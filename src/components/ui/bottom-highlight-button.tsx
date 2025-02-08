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
            className={`relative group/btn flex space-x-2 items-center justify-start w-full h-12 rounded-lg dark:text-neutral-200 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/80`}
            type="submit"
        >
            {Icon && (
                typeof Icon === "string" ? (
                    <Image src={Icon} alt={title} width={16} height={16} />
                ) : (
                    <Icon width={16} height={16} />
                )
            )}

            {title}

            <BottomGradient />
        </Button>
    );
}

function BottomGradient() {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-2 w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
}
