"use client";
import React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import LabelInputContainer from "./label-input-container";
import { BottomHighlightButton } from "@components/ui/bottom-highlight-button";
import Image from "next/image";
import { SUPPORTED_LOGIN_PROVIDERS, STRINGS } from "../data/data";
import AnimatedGradientBorderButton from "@/components/ui/animated-gradient-border-button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import OTPInputCard from "./otp-input";
import APP_LOGO from "@public/trademark/crystal/app-logo.svg";

export default function SignInForm() {
    const [isShowOTP, setIsShowOTP] = React.useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="w-fit h-fit mx-auto border rounded-none md:rounded-2xl m-12 p-4 md:p-8 shadow-input bg-background border-border">
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
