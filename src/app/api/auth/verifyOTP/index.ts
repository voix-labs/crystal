import AuthController from "../../../../features/auth/controllers/AuthController";
import { NextApiResponse, NextApiRequest } from "next";
import { ResponseCode } from "@/utils/strings/response-code";

export const verifyOTP = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    const { email, otp } = req.body;
    const authController = AuthController.getInstance();
    const {
        data: { session },
        error,
    } = await authController.verifyOTP(email, otp, res);

    if (error) {
        res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: "Error verifying OTP" });
        return res;
    }

    return res.status(ResponseCode.SUCCESS).json({ session });
}
