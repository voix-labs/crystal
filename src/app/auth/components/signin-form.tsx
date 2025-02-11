"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import LabelInputContainer from "./label-input-container";
import { BottomHighlightButton } from "@components/ui/bottom-highlight-button";
import Image from "next/image";
import { getLoginProviders, STRINGS } from "../data/data";
import AnimatedGradientBorderButton from "@/components/ui/animated-gradient-border-button";
import ThemeToggleButton from "./theme-toggle-button";
import OTPInputCard from "./otp-input";
import { useTheme } from "next-themes";
import axios from "axios";
import { NextApiResponse } from "next";
import AuthController from "@/app/api/auth/signin/controllers/AuthController";

export default function SignInForm() {
    const [isShowOTP, setIsShowOTP] = useState(false);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const SUPPORTED_LOGIN_PROVIDERS = getLoginProviders(theme);

    useEffect(() => {
        setMounted(true);
    }, []);

    const APP_LOGO = theme === "dark" ? "/trademark/crystal/app-logo.svg" : "/trademark/crystal/app-logo-dark.svg";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let res = {} as NextApiResponse;
        try {
            AuthController.getInstance().signIn(e.currentTarget.email.value, res);
        } catch (error: any) {
            console.error(error);
        }
    };

    if (!mounted) return null;

    return (
        <div className="w-fit h-fit mx-auto border rounded-none md:rounded-2xl m-10 p-4 md:p-8 shadow-input bg-background border-border">
            <div className="flex justify-end">
                <ThemeToggleButton />
            </div>

            <div className="flex justify-center mb-4">
                <Image
                    src={APP_LOGO}
                    alt="App logo"
                    width={40}
                    height={40}
                />
            </div>
            <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200 text-center">
                {STRINGS.SIGNUP_TITLE}
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300/50 text-center">
                {STRINGS.SIGNUP_SUBTITLE}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">{STRINGS.EMAIL}</Label>
                    <Input id="email" placeholder="meow@crystal.ai" type="email" />
                </LabelInputContainer>

                <AnimatedGradientBorderButton title={STRINGS.SIGNUP + " →"} onClick={() => setIsShowOTP(true)} />

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="grid grid-cols-2 gap-4">
                    {SUPPORTED_LOGIN_PROVIDERS.map((provider) => (
                        <BottomHighlightButton
                            key={provider.name}
                            title={provider.name}
                            Icon={provider.icon}
                            disabled={provider.disabled}
                        />
                    ))}
                </div>

                {isShowOTP && (
                    <div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    >
                        <OTPInputCard open={isShowOTP} setOpen={setIsShowOTP} />
                    </div>
                )}
            </form>
        </div>
    );
}
