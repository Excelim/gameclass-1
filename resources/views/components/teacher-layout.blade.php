<x-layout title="{{$title}}">
    <main class="h-full flex">
        <div> 
            <x-sidebar class="fixed duration-700 ease-in-out" dashboardUrl="teacher" classUrl="teacher/class" discussioniUrl="teacher/discussion" profileSettingUrl="profileSetting"/>
        </div>
        <div class="text-white flex-1 m-0 lg:ml-64 relative">
            <div class="flex justify-between items-center p-6 mb-5 bg-neutral-900 h-[69px] border-b border-neutral-800">
                <div class="flex">
                    <div class="flex flex-col space-y-1.5 pr-4 lg:hidden cursor-pointer" id="humburger-dashboard">
                        <span class="duration-500 ease-in h-[0.187rem] w-9 bg-white inline-block rounded-full"></span>
                        <span class="duration-500 ease-in h-[0.187rem] w-9 bg-white inline-block rounded-full"></span>
                        <span class="duration-500 ease-in h-[0.187rem] w-9 bg-white inline-block rounded-full"></span>
                    </div>
                    <h2 class="font-semibold text-base">{{$title}}</h2>
                </div>
                <h2 class="font-medium text-gray-300">{{Auth::user()->name}}</h2>
            </div>
            <div class="mx-6">
                {{$slot}}
            </div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
    @vite('resources/js/editor.js')
    @vite('resources/js/main.js')
</x-layout>