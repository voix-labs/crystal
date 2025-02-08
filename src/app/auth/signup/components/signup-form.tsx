"use client";
import React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import LabelInputContainer from "./label-input-container";
import { BottomHighlightButton } from "@components/ui/bottom-highlight-button";
import Image from "next/image";
import { SUPPORTED_LOGIN_PROVIDERS, STRINGS } from "../data/data";

export default function SignUpForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const APP_LOGO = "/trademark/app-logo.svg";

    return (
        <div className="w-fit h-fit mx-auto border rounded-none md:rounded-2xl m-12 p-4 md:p-8 shadow-input bg-white border-neutral-700 dark:bg-black">
            <div className="flex justify-center mb-4">
                <Image src={APP_LOGO} alt="Crystal Logo" width={50} height={50} />
            </div>
            <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200 text-center">
                {STRINGS.SIGNUP_TITLE}
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300/50 text-center">
                {STRINGS.SIGNUP_SUBTITLE}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">{STRINGS.FIRST_NAME}</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>

                    <LabelInputContainer>
                        <Label htmlFor="lastname">{STRINGS.LAST_NAME}</Label>
                        <Input id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">{STRINGS.EMAIL}</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">{STRINGS.PASSWORD}</Label>
                    <Input id="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="confirm_password">{STRINGS.CONFIRM_PASSWORD}</Label>
                    <Input
                        id="confirm_password"
                        placeholder="••••••••"
                        type="password"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white text-sm rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    {STRINGS.SIGNUP} &rarr;
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4 flex-col gap-4">
                        {SUPPORTED_LOGIN_PROVIDERS.map((provider) => (
                            <BottomHighlightButton
                                key={provider.name}
                                title={provider.name}
                                Icon={provider.icon}
                                disabled={provider.disabled}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
}
