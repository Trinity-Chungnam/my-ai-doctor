import { COLOR } from '../../tokens/color';
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
        lineHeight: 28,
        fontWeight: fontWeights.bold,
        fontFamily: 'Pretendard-Bold',
    },
    heading1Semibold: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    heading3Bold: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: fontWeights.bold,
        fontFamily: 'Pretendard-Bold',
    },
    heading3Semibold: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    heading3Medium: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    title1Bold: {
        fontSize: 22,
        lineHeight: 26,
        fontWeight: fontWeights.bold,
        fontFamily: 'Pretendard-Bold',
    },
    title1Semibold: {
        fontSize: 22,
        lineHeight: 26,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    title3Semibold: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-Semibold',
    },
    title3Medium: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    body1Medium: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    body1: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: fontWeights.regular,
        fontFamily: 'Pretendard-Regular',
    },
    body3Bold: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: fontWeights.bold,
        fontFamily: 'Pretendard-Bold',
    },
    body4Semibold: {
        fontSize: 13,
        lineHeight: 24,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    body4: {
        fontSize: 13,
        lineHeight: 24,
        fontWeight: fontWeights.regular,
        fontFamily: 'Pretendard-Regular',
    },
    body5Medium: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
    body7Semibold: {
        fontSize: 10,
        lineHeight: 14,
        fontWeight: fontWeights.semibold,
        fontFamily: 'Pretendard-SemiBold',
    },
    body8Medium: {
        fontSize: 9,
        lineHeight: 13,
        fontWeight: fontWeights.medium,
        fontFamily: 'Pretendard-Medium',
    },
};

export const textColor: TextLightColor = {
    'brand-color': COLOR.BLUE[500],
    white: '#FFFFFF',
    'orange-500': COLOR.ORANGE[500],
    'dark-grey-500': COLOR.DARK_GREY[500],
    'light-gray-500': COLOR.LIGHT_GREY[500],
    black: '#000000',
    'yellow-500': COLOR.YELLOW[500],
    'red-500': COLOR.RED[500],
};

export const variant = variantMap;
