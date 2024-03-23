import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { bgColorMap, sizeMap } from './token';
import { BackgroundColorType, SizeType } from './type';
import Typo from '../Text/Typo';
import { TextColorType, VariantType } from '../Text/type';

type ButtonProps = {
    label: string;
    size?: SizeType;
    bgColor?: BackgroundColorType;
    variant?: VariantType;
    color?: TextColorType;
    onPress?(): void;
};

export default function Button({
    label,
    size = 'full',
    bgColor = 'white',
    variant = 'body1Medium',
    color = 'black',
    onPress,
}: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.wrapper, sizeMap[size], { backgroundColor: bgColorMap[bgColor] }]}>
                <Typo variant={variant} color={color}>
                    {label}
                </Typo>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 14,
    },
});
