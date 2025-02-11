import { ResponseCode } from '@/utils/strings/response-code';
import AuthServiceInterface from '../interfaces/AuthServiceInterface';
import { EmailOTPServices } from '../services/EmailOTPService';
import { NextApiRequest, NextApiResponse } from 'next';

export default class AuthController {
    private static instance: AuthController;
    private authService: AuthServiceInterface;

    private constructor(authService?: AuthServiceInterface) {
        this.authService = authService || EmailOTPServices.getInstance();
    }

    public static getInstance(): AuthController {
        if (!AuthController.instance) {
            AuthController.instance = new AuthController();
        }
        return AuthController.instance;
    }

    async signIn(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        try {
            await this.authService.signIn(req, res);
            res.status(ResponseCode.SUCCESS).json({ message: 'OTP sent to email' });
        } catch (error: any) {
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Internal Server Error' });
            console.error('Error signing in with OTP: ', error);
        }
    }

    async signUp(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        try {
            await this.authService.signUp(req, res);
        } catch (error: any) {
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Internal Server Error' });
        }
    }

    async signOut(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        try {
            await this.authService.signOut(req, res);
            res.status(ResponseCode.SUCCESS).json({ message: 'Sign out successful' });
        } catch (error: any) {
            res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Internal Server Error' });
        }
    }

    public setAuthService(authService: AuthServiceInterface): AuthController {
        this.authService = authService;
        return this;
    }

    public verifyOTP(req: NextApiRequest, res: NextApiResponse): any {
        return this.authService.verifyOTP(req, res);
    }
}
