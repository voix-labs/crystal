import { ResponseCode } from "@/utils/strings/response-code";
import AuthServiceInterface from "../interfaces/AuthServiceInterface";
import { createClient } from "@/utils/supabase/server";
import { NextApiRequest, NextApiResponse } from "next";

export class EmailOTPServices implements AuthServiceInterface {
    public static instance: EmailOTPServices;

    private constructor() { }

    public static getInstance(): EmailOTPServices {
        if (!EmailOTPServices.instance) {
            EmailOTPServices.instance = new EmailOTPServices();
        }
        return EmailOTPServices.instance;
    }

    async signIn(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        const supabase = await createClient();
        const { email } = req.body;
        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                shouldCreateUser: true,
            },
        });

        if (error) {
            console.error("Error signing in with OTP: ", error);
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: "Error signing in with OTP" });
            return;
        }

        res.status(ResponseCode.SUCCESS).json({ data });
    }

    async verifyOTP(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        const supabase = await createClient();
        const { email, otp } = req.body;
        const {
            data: { session },
            error,
        } = await supabase.auth.verifyOtp({
            email,
            token: otp,
            type: 'email',
        });

        if (error) {
            console.error("Error verifying OTP: ", error);
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: "Error verifying OTP" });
            return;
        }

        res.status(ResponseCode.SUCCESS).json({ session });
    }

    async signUp(_req: NextApiRequest, _res: NextApiResponse): Promise<void> {
        throw new Error("Method not needed. Do not implement.");
    }

    async signOut(_res: NextApiResponse): Promise<void> {
        const supabase = await createClient();
        await supabase.auth.signOut();
    }
}
