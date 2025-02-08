"use client"
import SignUpForm from "./components/signup-form"
import Image from "next/image"

export default function SignUpPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <Image
                src="/auth-bg.jpg"
                fill
                className="object-cover"
                alt="Auth background"
            />
            <div className="relative z-10 bg-white dark:bg-black rounded shadow">
                <SignUpForm />
            </div>
        </div>
    )
}
