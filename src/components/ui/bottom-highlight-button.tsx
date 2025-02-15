'use client';

import { Button } from '@components/ui/button';
import { IconProps } from '@tabler/icons-react';
import Image from 'next/image';
import { ForwardRefExoticComponent } from 'react';

type IconType = string | ForwardRefExoticComponent<IconProps>;

export function BottomHighlightButton({
    title,
    disabled,
    Icon,
}: {
    title: string;
    disabled: Boolean;
    Icon?: IconType;
}) {
    return (
        <Button
            disabled={disabled as boolean}
            className={`group/btn relative flex h-12 w-full items-center justify-start space-x-2 rounded-lg dark:bg-neutral-700/50 dark:text-neutral-200 dark:hover:bg-neutral-700/80`}
            type="submit"
        >
            {Icon &&
                (typeof Icon === 'string' ? (
                    <Image src={Icon} alt={title} width={16} height={16} />
                ) : (
                    <Icon width={16} height={16} />
                ))}

            {title}

            <BottomGradient />
        </Button>
    );
}

function BottomGradient() {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-2 w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
}
