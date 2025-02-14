import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

let TRADEMARK_PATH = "/trademark";

export const getLoginProviders = () => [
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
    icon: `${TRADEMARK_PATH}/zenbright/zb-y.svg`,
    disabled: false,
  },
  {
    name: "Tuturuuu",
    icon: `${TRADEMARK_PATH}/tuturuuu/ttr-b.svg`,
    disabled: false,
  },
];

export const STRINGS = {
  SIGNUP_TITLE: "Welcome to Kitto",
  SIGNUP_SUBTITLE:
    "Get stock predictions, portfolio analysis, and financial insights—just by asking.",
  FIRST_NAME: "First name",
  LAST_NAME: "Last name",
  EMAIL: "Email Address",
  PASSWORD: "Password",
  CONFIRM_PASSWORD: "Re-enter password",
  SIGNUP: "Sign up",
};
