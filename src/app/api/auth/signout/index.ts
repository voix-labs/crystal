import { NextApiRequest, NextApiResponse } from 'next';
import AuthController from '../../../../features/auth/controllers/AuthController';

export const signOut = async (res: NextApiResponse): Promise<NextApiResponse> => {
    const authController = AuthController.getInstance();
    await authController.signOut(res);
    return res
}
