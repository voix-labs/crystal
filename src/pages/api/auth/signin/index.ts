import AuthController from "@/features/auth/controllers/AuthController";
import { ResponseCode } from "@/utils/strings/response-code";
import { NextApiResponse, NextApiRequest } from "next";

const signInWithOTP = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    console.log("Sign in with 1-time password");
    console.log("Request body: ", req.body);
    
    if (!req.body) {
        res.status(ResponseCode.BAD_REQUEST).json({ error: "Request body is missing" });
        return;
    }

    const authController = AuthController.getInstance();
    await authController.signIn(req, res);
}

export default signInWithOTP;
