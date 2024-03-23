import React from 'react';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';

import { textColor, variantMap } from './token';
import { TextAlign, TextAlignVertical, TextColorType, VariantType } from './type';

export interface TypoProps extends Omit<TextProps, 'style'> {
    variant?: VariantType;
    color?: TextColorType;
    textAlign?: TextAlign;
    textAlignVertical?: TextAlignVertical;
    fontFamily?: string | undefined;
}

export default function Typo({
    children,
    variant = 'body1Medium',
    color = 'black',
    textAlign = 'auto',
    textAlignVertical = 'auto',
    suppressHighlighting = true,
    fontFamily = undefined,
    ...rest
}: TypoProps) {
    const variantStyle = variantMap[variant];

    return (
        <Text
            {...rest}
            style={[
                variantStyle,
                {
                    textAlign,
                    textAlignVertical,
                    color: textColor[color],
                    fontFamily,
                },
            ]}
            suppressHighlighting={suppressHighlighting}
        >
            {children}
        </Text>
    );
}
