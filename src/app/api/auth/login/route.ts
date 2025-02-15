import AuthController from '@/features/auth/controllers/AuthController';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const authController = AuthController.getInstance();

  const res = new NextResponse();
  return await authController.signIn(req, res);
}
