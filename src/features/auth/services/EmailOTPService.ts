import { ResponseCode } from "@/utils/strings/response-code";
import AuthServiceInterface from "../interfaces/AuthServiceInterface";
import { createClient } from "@/utils/supabase/server";

export class EmailOTPServices implements AuthServiceInterface {
    public static instance: EmailOTPServices;
    private supabase = createClient();

    private constructor() { }

    public static getInstance(): EmailOTPServices {
        if (!EmailOTPServices.instance) {
            EmailOTPServices.instance = new EmailOTPServices();
        }
        return EmailOTPServices.instance;
    }

    async signIn(req: any, res: any): Promise<void> {
        const { email } = req.body;
        const { data, error } = await (await this.supabase).auth.signInWithOtp({
            email: email,
            options: {
                shouldCreateUser: true,
            },
        })

        if (error) {
            console.error("Error signing in with OTP: ", error);
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: "Error signing in with OTP" });
            return;
        }

        res.status(ResponseCode.SUCCESS).json({ data });
    }

    async verifyOTP(req: any, res: any): Promise<void> {
        const { email, otp } = req.body;
        const {
            data: { session },
            error,
        } = await (await this.supabase).auth.verifyOtp({
            email,
            token: otp,
            type: 'email',
        })

        if (error) {
            console.error("Error verifying OTP: ", error);
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: "Error verifying OTP" });
            return;
        }

        res.status(ResponseCode.SUCCESS).json({ session });
    }

    async signUp(_req: any, _res: any): Promise<void> {
        throw new Error("Method not needed. Do not implement.");
    }

    async signOut(res: any): Promise<void> {
        await (await this.supabase).auth.signOut();
    }
}
