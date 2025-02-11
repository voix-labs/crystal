import SignInForm from "@/components/auth/signin-form"
import Image from "next/image"

export default function SignUpPage() {
    const AUTH_BG = "/auth/auth-bg.jpg"

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <Image
                src={AUTH_BG}
                fill
                className="object-cover"
                alt="Auth background"
            />
            <div className="relative z-10 rounded shadow">
                <SignInForm />
            </div>
        </div>
    )
}
