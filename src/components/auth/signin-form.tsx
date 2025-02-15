'use client';

import AnimatedGradientBorderButton from '@/components/ui/animated-gradient-border-button';
import { STRINGS, getLoginProviders } from '@/data/auth/data';
import { BottomHighlightButton } from '@components/ui/bottom-highlight-button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import KITTO_LOGO_DARK from '@public/trademark/kitto/app-logo-dark.svg';
import KITTO_LOGO from '@public/trademark/kitto/app-logo.svg';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

import LabelInputContainer from './label-input-container';
import OTPInputCard from './otp-input';
import ThemeToggleButton from './theme-toggle-button';

export default function SignInForm() {
    const [isShowOTP, setIsShowOTP] = useState(false);
    const [email, setEmail] = useState('');

    const SUPPORTED_LOGIN_PROVIDERS = getLoginProviders();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            axios.post('/api/auth/login', {
                email: e.currentTarget.email.value,
            });
            setEmail(e.currentTarget.email.value);
        } catch (error: any) {
            console.error('Error signing in with OTP: ', error);
        }
    };

    return (
        <div className="shadow-input bg-background border-border m-10 mx-auto h-fit w-fit rounded-none border p-4 md:rounded-2xl md:p-8">
            <div className="flex justify-end">
                <ThemeToggleButton />
            </div>

            <div className="mb-4 flex justify-center">
                <Image
                    src={KITTO_LOGO}
                    alt="App logo"
                    width={40}
                    height={40}
                    className="hidden dark:block"
                />

                <Image
                    src={KITTO_LOGO_DARK}
                    alt="App logo"
                    width={40}
                    height={40}
                    className="dark:hidden"
                />
            </div>

            <h2 className="text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                {STRINGS.SIGNUP_TITLE}
            </h2>

            <p className="mt-2 max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-300/50">
                {STRINGS.SIGNUP_SUBTITLE}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">{STRINGS.EMAIL}</Label>
                    <Input
                        id="email"
                        placeholder="meow@crystal.ai"
                        type="email"
                    />
                </LabelInputContainer>

                <AnimatedGradientBorderButton
                    title={STRINGS.SIGNUP + ' →'}
                    onClick={() => setIsShowOTP(true)}
                />

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                <div className="grid grid-cols-2 gap-4">
                    {SUPPORTED_LOGIN_PROVIDERS.map(provider => (
                        <BottomHighlightButton
                            key={provider.name}
                            title={provider.name}
                            Icon={provider.icon}
                            disabled={provider.disabled}
                        />
                    ))}
                </div>

                {isShowOTP && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <OTPInputCard
                            open={isShowOTP}
                            setOpen={setIsShowOTP}
                            email={email}
                        />
                    </div>
                )}
            </form>
        </div>
    );
}
