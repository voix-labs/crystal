import { ResponseCode } from '@/config/strings/response-code';
import AuthController from '@/features/auth/controllers/AuthController';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
    const authController = AuthController.getInstance();
    const res = new NextResponse();

    const { error } = await authController.verifyOTP(req, res);

    if (error) {
        return NextResponse.json(
            { error: 'Error verifying OTP' },
            { status: ResponseCode.INTERNAL_SERVER_ERROR }
        );
    }

    return NextResponse.json({}, { status: ResponseCode.SUCCESS });
};
