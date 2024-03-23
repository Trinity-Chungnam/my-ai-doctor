import React, { ReactNode, useMemo } from 'react';
import { Platform, ScrollView, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenWrapper from './ScreenWrapper';

type ScrollViewWrapperProps = {
    children: ReactNode;
    style?: {
        paddingBottom?: number;
    };
    contentContainerStyle?: ViewStyle;
};

export default function ScrollViewWrapper({ children, contentContainerStyle, style }: ScrollViewWrapperProps) {
    const { bottom } = useSafeAreaInsets();

    const paddingBottomStyle = useMemo(
        () => ({
            paddingBottom: Platform.select({ android: 20, ios: bottom, default: 20 }) + (style?.paddingBottom ?? 0),
        }),
        [bottom],
    );

    return (
        <ScrollView contentContainerStyle={paddingBottomStyle}>
            <ScreenWrapper style={contentContainerStyle}>{children}</ScreenWrapper>
        </ScrollView>
    );
}
