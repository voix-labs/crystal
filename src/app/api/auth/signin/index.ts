import AuthController from "../../../../features/auth/controllers/AuthController";
import { NextApiResponse, NextApiRequest } from "next";

export const signInWithOTP = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { email } = req.body;
    const authController = AuthController.getInstance();
    await authController.signIn(email, res);
}
