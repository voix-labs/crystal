import { NextApiRequest, NextApiResponse } from 'next';

export default interface AuthServiceInterface {
    signIn: (email: string, res: NextApiResponse) => Promise<void>;
    signOut: (res: NextApiResponse) => Promise<void>;
    signUp: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
    verifyOTP: (email: string, otp: string, res: NextApiResponse) => any;
}
