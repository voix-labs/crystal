import { NextApiRequest, NextApiResponse } from 'next';
import AuthController from '../../../../features/auth/controllers/AuthController';

export const signOut = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
    const authController = AuthController.getInstance();
    await authController.signOut(req, res);
    return res;
}

export default signOut;
