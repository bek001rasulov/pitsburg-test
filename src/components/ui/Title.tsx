import React from 'react';
import {cn} from "@/utils/classnames";

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ITitleProps {
    size?: TitleSize;
    className?: string;
    children: string;
}

const Title = ({size = 'xs', children, className}: ITitleProps) => {

    const titleTagBySize = {
        xs: 'h5',
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
        xl: 'h1',
        '2xl': 'h1',
    }

    const titleClassNameBySize = {
        xs: 'text-[16px]',
        sm: 'text-[22px]',
        md: 'text-[26px]',
        lg: 'text-[32px]',
        xl: 'text-[40px]',
        '2xl': 'text-[48px]',
    }


    return React.createElement(
        titleTagBySize[size],
        {className: cn(titleClassNameBySize[size], className)},
        children
    );
};

export default Title;