'use client';

export default function Navbar() {

    function redirect() {
        window.location.href = "/search";
    }

    return (
        <nav className="flex justify-between items-center w-full bg-dark_bg h-32 p-10">
            <div className="flex">
                <h1 className="font-bold text-4xl">
                    <span className="text-">J</span>oystick
                </h1>
                <img src="joystick.svg" className="h-12" />
                <h1 className="font-bold text-white text-4xl">
                    Junction
                </h1>
            </div>
            <div className="flex gap-6 font-bold">

                <div className="text-white/60 hover:text-white/100">Login</div>
                <div className="text-white/60 hover:text-white/100">Register</div>
                <div className="text-white/60 hover:text-white/100">Logout</div>

            </div>
            <form className="flex items-center " onSubmit={redirect}>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" className="bg-gray-50  text-white-900 text-sm rounded-l-lg focus:ring-[#635192] focus:[#635192] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search For Games..." required />
                    <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3" />
                </div>
                <button type="submit" className="h-10 inline-flex rounded-r-lg items-center bg-[#635192] py-2.5 px-3  font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#635192]/20 transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Search
                </button>
            </form>
        </nav >
    );
}
