import type { ColorValue, TextStyle } from 'react-native';

export type FontWeightType = 'heavy' | 'bold' | 'semibold' | 'medium' | 'regular' | 'light' | 'thin';
export type FontWeight = {
    [key in FontWeightType]: TextStyle['fontWeight'];
};

export type VariantType =
    | 'heading1Bold'
    | 'heading1Semibold'
    | 'heading3Bold'
    | 'heading3Semibold'
    | 'heading3Medium'
    | 'title1Bold'
    | 'title1Semibold'
    | 'title3Semibold'
    | 'title3Medium'
    | 'body1'
    | 'body1Medium'
    | 'body1Semibold'
    | 'body3Bold'
    | 'body4Semibold'
    | 'body4'
    | 'body5Medium'
    | 'body7Semibold'
    | 'body8Medium';

export type VariantMap = {
    [key in VariantType]: {
        fontSize: number;
        fontWeight: TextStyle['fontWeight'];
        fontFamily: string;
        lineHeight: number;
    };
};

export type Variant = {
    [key in VariantType]: {
        fontWeight: TextStyle['fontWeight'];
        lineHeight: TextStyle['lineHeight'];
        fontSize: TextStyle['fontSize'];
    };
};

export type TextColorType =
    | 'brand-color'
    | 'white'
    | 'orange-500'
    | 'dark-grey-500'
    | 'light-gray-500'
    | 'black'
    | 'red-500'
    | 'yellow-500';

export type TextLightColor = {
    [key in TextColorType]: ColorValue;
};

export type TextAlign = TextStyle['textAlign'];
export type TextAlignVertical = TextStyle['textAlignVertical'];
