<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Class_listing;
use App\Models\Lesson;
use App\Models\Task;
use App\Models\UploadAnswer;
use App\Models\UploadScore;
use Illuminate\Support\Facades\Auth;
use App\Models\Activity;

class SUploadController extends Controller
{
    
    public function show(Class_listing $class,Lesson $lesson,Task $task) {

        $uploadAnswered = $task->upload?->answer()->where("user_id", Auth::user()->id)->get();
        $user = Auth::user();
        // dd($user);
        $breadcrumbs = [
            ['link' => "/student/class", 'name' => "Kelas"],
            ['link' => "/student/class/$class->id", 'name' => $class->study_name . " - " . $class->class],
            ['name' => $task->title],
        ];

        // dd($task->upload);
        if($task->upload?->scores->where("user_id", Auth::user()->id)->count() > 0) {
        
            return redirect("/student/$class->id/$lesson->id/upload/$task->id/result");
        }

        return view('student.upload.show', [
            'class' => $class,
            'task' => $task,
            'breadcrumbs' => $breadcrumbs,
            'user' => $user,
        ]);

    }

    public function store(Class_listing $class, Lesson $lesson, Task $task) {

        request()->validate([
            "file" => ["file", "max:2048"],
        ]);

        $upload = $task->upload;
        
        if(request()->hasFile("file")) {
            $file = request()->file("file");
            $filename = $file->getClientOriginalName();
            $file->move("uploads", $filename);
        };
        // dd($class->id);
        UploadAnswer::create([
            "file" => $filename,
            "upload_id" => $upload->id,
            "user_id" => Auth::user()->id
        ]);

        UploadScore::create([
            "upload_id" => $upload->id,
            "user_id" => Auth::user()->id,
            "class_id" => $class->id,
        ]);

        Activity::create([
            'description' => "mengumpulkan tugas: " . $task->title,
            'user_id' => Auth::user()->id,
            "class_id" => $class->id
        ]);

        return redirect()->back();
    }

    public function result(Class_listing $class, Lesson $lesson, Task $task) {

        $user = Auth::user();
        
        $breadcrumbs = [
            ['link' => "/student/class", 'name' => "Kelas"],
            ['link' => "/student/class/$class->id", 'name' => $class->study_name . " - " . $class->class],
            ['name' => $task->title],
        ];
        // dd($task->upload->scores->where("user_id", Auth::user()->id)->first());
        return view('student.upload.result', [
            'class' => $class,
            'task' => $task,
            'breadcrumbs' => $breadcrumbs,
            'user' => $user
        ]);
    }

}
