import { createClient } from '@/config/supabase/server';
import { redirect } from 'next/navigation';

import LogoutButton from './logout-button';

export default async function HomePage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect('/login');
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4 p-4 md:p-8">
            <div className="text-2xl font-semibold">Dashboard</div>
            <LogoutButton />
        </div>
    );
}
