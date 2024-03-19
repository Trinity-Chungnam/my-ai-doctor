import { ReactNode, useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type ShadowCardProps = {
    style?: Pick<ViewStyle, 'backgroundColor' | 'borderRadius' | 'height' | 'width' | 'padding' | 'margin' | 'gap'>;
    children: ReactNode;
};

export default function ShadowCard({ style, children }: ShadowCardProps) {
    const wrapperStyle = useMemo(() => [styles.shadowBox, style], [style]);
    return <View style={wrapperStyle}>{children}</View>;
}

const styles = StyleSheet.create({
    shadowBox: {
        backgroundColor: 'white',
        padding: 20,
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
