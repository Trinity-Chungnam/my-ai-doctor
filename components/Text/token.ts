import { COLOR } from '../../src/tokens/color';
import { FontWeight, TextLightColor, VariantMap } from './type';

const fontWeights: FontWeight = {
    heavy: '900',
    bold: '700',
    semibold: '600',
    medium: '500',
    regular: '400',
    light: '300',
    thin: '100',
} as const;

export const variantMap: VariantMap = {
    heading1Bold: {
        fontSize: 24,
        fontWeight: fontWeights.bold,
        fontFamily: 'Pretendard-Bold',
    },
    heading1Semibold: {
        fontSize: 24,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    heading3Semibold: {
        fontSize: 20,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    heading3Medium: {
        fontSize: 20,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    title1Semibold: {
        fontSize: 22,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    title3Semibold: {
        fontSize: 18,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-Semibold',
    },
    title3Medium: {
        fontSize: 18,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    body1Medium: {
        fontSize: 16,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    body4Semibold: {
        fontSize: 13,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    body5Medium: {
        fontSize: 12,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    body7Semibold: {
        fontSize: 10,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
};

export const textColor: TextLightColor = {
    'brand-color': COLOR.BLUE[500],
    white: '#FFFFFF',
    'orange-500': COLOR.ORANGE[500],
    'dark-grey-500': COLOR.DARK_GREY[500],
    'light-gray-500': COLOR.LIGHT_GREY[500],
    black: '#000000',
    'red-500': COLOR.RED[500],
};

export const variant = variantMap;
