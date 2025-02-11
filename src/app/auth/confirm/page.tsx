import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import axios from 'axios';

const ConfirmPage = () => {
    const router = useRouter();
    const { token_hash, type, next: nextQuery } = router.query;
    const hasConfirmed = useRef(false);

    useEffect(() => {
        if (!router.isReady) return;

        const confirmToken = async () => {
            if (!token_hash || !type) {
                console.error('Token hash or type is missing');
                return;
            }

            if (hasConfirmed.current) return;
            hasConfirmed.current = true;

            const nextUrl = typeof nextQuery === 'string' ? nextQuery : '/';
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/auth/confirm?token_hash=${token_hash}&type=${type}&next=${nextUrl}`
                );
                if (data.redirectUrl) {
                    window.location.href = data.redirectUrl;
                }
            } catch (error) {
                console.error('Error confirming token:', error);
            }
        };

        confirmToken();
    }, [router.isReady, token_hash, type, nextQuery]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="mx-auto max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-medium text-black">Redirecting...</div>
                </div>
                <p className="text-gray-500">
                    Please wait while we redirect you to the appropriate page.
                </p>
            </div>
        </div>
    );
};

export default ConfirmPage;
