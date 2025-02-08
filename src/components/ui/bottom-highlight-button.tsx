"use client"
import { IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent } from "react";
import Image from "next/image";
import { Button } from "@components/ui/button";

type IconType = string | ForwardRefExoticComponent<IconProps>;

export function BottomHighlightButton({ title, disabled, Icon }: { title: string; disabled: Boolean; Icon?: IconType }) {
    return (
        <Button
            disabled={disabled as boolean}
            className={`flex space-x-2 items-center justify-start text-sm font-normal}`}
            type="submit"
        >
            {Icon && (
                typeof Icon === "string" ? (
                    <Image src={Icon} alt={title} width={16} height={16}/>
                ) : (
                    <Icon />
                )
            )}
            <span>
                {title}
            </span>
            <BottomGradient />
        </Button>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};
