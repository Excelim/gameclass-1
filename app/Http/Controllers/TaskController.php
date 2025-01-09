<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Class_listing;
use App\Models\Task; 
use App\Models\Lesson;

class TaskController extends Controller
{

    public function create(Class_listing $class) {

        $breadcrumbs = [
            ["link" => "/teacher/class/$class->id", "name" => "Kelas"],
            ["link" => "/teacher/class/$class->id", "name" => $class->study_name . " - " . $class->class],
            ["name" => "Tambah Soal"],
        ];

        return view('teacher.task.create', [
            'class' => $class,
            'breadcrumbs' => $breadcrumbs
        ]);
    }

    public function store(Class_listing $class, Lesson $lesson) {

        request()->validate([
           "title" => ["required", "min:3"],
           "type" => ["required"],
        ]);
        // $lesson = $class->lessons();
        // dd($lesson->id);
        if(request()->type === "1") {

            $task = Task::create([
                'title' => request()->title,
                'type' => request()->type,
                'lesson_id' => $lesson->id,
            ]);

            return redirect("/teacher/$class->id/$lesson->id/$task->id/quiz/create");
        }

        return redirect("/teacher/class/$class->id");
    }

    public function update(Task $task) {

       request()->validate([
           "title" => ["required", "min:3"],
       ]);

       $task->update([
           'title' => request()->title,
       ]);

       return redirect()->back();

    }

    public function destroy(Task $task) {

        $task->delete();

        return redirect("/teacher/class/" . $task->lesson->class->id);
    }

}
