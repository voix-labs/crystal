import AuthController from "../../../../features/auth/controllers/AuthController";
import { NextApiResponse, NextApiRequest } from "next";

export const verifyOTP = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { email, otp } = req.body;
    const authController = AuthController.getInstance();
    const {
        data: { session },
        error,
    } = await authController.verifyOTP(email, otp, res);

    if (error) {
        console.error("Error verifying OTP: ", error);
        res.status(500).json({ error: "Error verifying OTP" });
        return;
    }

    res.status(200).json({ session });
}
