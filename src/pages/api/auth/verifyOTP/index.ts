import AuthController from "@/features/auth/controllers/AuthController";
import { NextApiResponse, NextApiRequest } from "next";
import { ResponseCode } from "@/utils/strings/response-code";

export const verifyOTP = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    if (!req.body) {
        res.status(ResponseCode.BAD_REQUEST).json({ error: "Request body is missing" });
        return res;
    }
    const authController = AuthController.getInstance();
    const {
        data: { session },
        error,
    } = await authController.verifyOTP(req, res);

    if (error) {
        res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: "Error verifying OTP" });
        return res;
    }

    return res.status(ResponseCode.SUCCESS).json({ session });
}

export default verifyOTP;
