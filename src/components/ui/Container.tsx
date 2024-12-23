import React, {ReactNode} from 'react';
import {cn} from "@/utils/classnames";

const Container = ({className, children}: {className?: string, children?: ReactNode}) => {
    return (
        <div className={cn("mx-auto max-w-[1170px]", className)}>
            {children}
        </div>
    );
};

export default Container;