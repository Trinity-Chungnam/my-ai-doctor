import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type ScreenWrapperProps = {
    style?: Pick<ViewStyle, 'padding' | 'gap' | 'paddingHorizontal' | 'paddingVertical'>;
    children: ReactNode;
};

export default function ScreenWrapper({ children, style }: ScreenWrapperProps) {
    return <View style={[styles.wrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
