import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import axios from "axios";
import React from "react"

interface OTPInputCardProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
}

const OTPInputCard: React.FC<OTPInputCardProps> = ({ open, setOpen, email }) => {
    const [remainingTime, setRemainingTime] = React.useState(60);
    const [otp, setOTP] = React.useState("");

    const handleSubmit = async (otp: string) => {
        try {
            axios.post("/api/auth/verifyOTP", { email: email, otp: otp });
        } catch (error: any) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        if (remainingTime > 0) {
            const interval = setInterval(() => {
                setRemainingTime((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [remainingTime]);

    return (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>Enter OTP</CardTitle>
                <CardDescription>
                    <div className="flex items-center justify-between w-full text-sm text-neutral-600">
                        Check your email for the OTP

                        <Button
                            variant="link"
                            disabled={remainingTime > 0}
                            className={`justify-end p-0 ${remainingTime > 0 ? "text-neutral-400" : "text-primary"}`}
                            onClick={() => setRemainingTime(60)}>
                            {remainingTime > 0
                                ? `Resend in ${remainingTime}s`
                                : "Resend OTP"}
                        </Button>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <InputOTP maxLength={6} value={otp} onChange={(value: string) => setOTP(value)}>
                    <InputOTPGroup>
                        {Array.from({ length: 3 }, (_, i) => (
                            <InputOTPSlot key={i} index={i} />
                        ))}
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        {Array.from({ length: 3 }, (_, i) => (
                            <InputOTPSlot key={i} index={i + 3} />
                        ))}
                    </InputOTPGroup>
                </InputOTP>
            </CardContent>
            <CardFooter className="flex justify-between gap-4">
                <Button variant="outline" onClick={() => setOpen(false)} className="w-full">
                    Cancel
                </Button>

                <Button onClick={() => { setOpen(false), handleSubmit(otp) }} className="w-full">
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    )
}

export default OTPInputCard
