import { NextResponse } from "next/server";
import AuthController from "../../../../features/auth/controllers/AuthController";

export const POST = async () => {
  const authController = AuthController.getInstance();

  const res = new NextResponse();
  return await authController.signOut(res);
};
