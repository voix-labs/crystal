import SignInForm from '@/components/auth/signin-form';
import { createClient } from '@/config/supabase/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function SignUpPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) redirect('/dashboard');

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <Image
                src="/auth/auth-bg.jpg"
                fill
                className="object-cover"
                alt="Auth background"
            />
            <div className="relative z-10 rounded shadow">
                <SignInForm />
            </div>
        </div>
    );
}
