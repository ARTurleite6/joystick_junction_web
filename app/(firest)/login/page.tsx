"use client"

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push('/profile')
        } else {
            // Handle errors
        }
    }

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


            <div className="lg:w-2/5 md:w-1/2 w-2/3" onSubmit={handleSubmit}>
                <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" id="username">Username</label>
                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" id="password">Password</label>
                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
                    </div>
                    <button type="submit" className="transition ease-in-out delay hover:-translate-y-1 hover:scale-100 w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button>
                </form>
            </div>


        </>
    );
}
