
export default function Register() {

    return (
        <>
            <div className="flex">
                <h1 className="font-bold text-4xl">
                    <span className="text-">J</span>oystick
                </h1>
                <img src="joystick.svg" className="h-12" />
                <h1 className="font-bold text-white text-4xl">
                    Junction
                </h1>
            </div>


            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" id="username">Username</label>
                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" required />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" id="email">Email</label>
                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" required />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" id="password">Password</label>
                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" required />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" id="confirm">Confirm password</label>
                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" required />
                    </div>
                    <button type="submit" className="transition ease-in-out delay hover:-translate-y-1 hover:scale-100 w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                </form>
            </div>


        </>
    );
}
