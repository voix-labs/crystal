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
import React from "react"

const OTPInputCard = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [remainingTime, setRemainingTime] = React.useState(60);

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
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setOpen(false)}
                >Cancel</Button>

                <Button onClick={() => setOpen(false)}
                >Confirm</Button>
            </CardFooter>
        </Card>
    )
}

export default OTPInputCard
