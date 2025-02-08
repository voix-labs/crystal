import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';

export const SUPPORTED_LOGIN_PROVIDERS = [
    {
        name: "GitHub",
        icon: IconBrandGithub,
        disabled: true,
    },
    {
        name: "Google",
        icon: IconBrandGoogle,
        disabled: true,
    },
    {
        name: "Zen Bright",
        icon: "/zb-y.svg",
        disabled: true,
    },
    {
        name: "Tuturuuu",
        icon: "/ttr-b.svg",
        disabled: true,
    }
]

export const STRINGS = {
    SIGNUP_TITLE: "Welcome to Crystal",
    SIGNUP_SUBTITLE: "Get stock predictions, portfolio analysis, and financial insights—just by asking.",
    FIRST_NAME: "First name",
    LAST_NAME: "Last name",
    EMAIL: "Email Address",
    PASSWORD: "Password",
    CONFIRM_PASSWORD: "Re-enter password",
    SIGNUP: "Sign up",
}
