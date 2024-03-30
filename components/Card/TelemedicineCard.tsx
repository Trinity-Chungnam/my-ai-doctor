import React from 'react';
import { StyleSheet, View } from 'react-native';

import Typo from '../Text/Typo';
import { TextColorType } from '../Text/type';

type TelemedicineCardProps = {
    borderColor?: string;
    color?: TextColorType;
    label: string;
};

export default function TelemedicineCard({ label, color, borderColor }: TelemedicineCardProps) {
    return (
        <View style={[styles.shadowBox, styles.wrapper, { borderColor }]}>
            <Typo variant="heading1Bold" color={color}>
                {label}
            </Typo>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 160,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadowBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
