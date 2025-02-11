import { NextApiRequest, NextApiResponse } from 'next';

export default interface AuthServiceInterface {
    signIn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
    signOut: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
    signUp: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
    verifyOTP: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}
