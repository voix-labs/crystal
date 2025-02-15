import AuthController from '../../../../features/auth/controllers/AuthController';
import { NextResponse } from 'next/server';

export const POST = async () => {
  const authController = AuthController.getInstance();

  const res = new NextResponse();
  return await authController.signOut(res);
};
