import type { ColorValue, ViewStyle } from 'react-native';

export type SizeType = 'full' | 'small';

export type SizeMap = {
    [key in SizeType]: ViewStyle;
};

export type BackgroundColorType =
    | 'brand-color'
    | 'white'
    | 'orange-500'
    | 'dark-grey-500'
    | 'light-gray-500'
    | 'black'
    | 'red-500';

export type BackgroundColor = {
    [key in BackgroundColorType]: ColorValue;
};
