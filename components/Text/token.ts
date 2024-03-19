import { StyleSheet } from 'react-native';

import { FontWeight } from './type';

const fontWeights: FontWeight = {
    heavy: '900',
    bold: '700',
    semibold: '600',
    medium: '500',
    regular: '400',
    light: '300',
    thin: '100',
} as const;

export const variant = StyleSheet.create({
    heading1: {
        fontSize: 24,
    },
    heading1Bold: {
        fontSize: 24,
        fontWeight: fontWeights.bold,
    },
    heading1Semibold: {
        fontSize: 24,
        fontWeight: fontWeights.semibold,
    },
    title1: {
        fontSize: 22,
    },
    title1Semibold: {
        fontSize: 22,
        fontWeight: fontWeights.semibold,
    },
    body1: {
        fontSize: 16,
    },
    body1Medium: {
        fontSize: 16,
        fontWeight: fontWeights.medium,
    },
    body1Semibold: {
        fontSize: 16,
    },
    body2: {
        fontSize: 15,
    },
    body3: {
        fontSize: 14,
    },
    body4: {
        fontSize: 13,
    },
    body4Semibold: {
        fontSize: 13,
        fontWeight: fontWeights.semibold,
    },
    body5: {
        fontSize: 12,
    },
    body5Medium: {
        fontSize: 12,
        fontWeight: fontWeights.medium,
    },
    body6: {
        fontSize: 11,
    },
    body7: {
        fontSize: 10,
    },
    body7Semibold: {
        fontSize: 10,
        fontWeight: fontWeights.semibold,
    },
});
