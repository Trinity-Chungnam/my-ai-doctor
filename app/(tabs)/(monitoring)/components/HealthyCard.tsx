import { Image, ImageSource } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import Typo from '../../../../components/Text/Typo';

export type HealthyCardProps = {
    label: string;
    result: string;
    description: string;
    source: string | number | ImageSource | ImageSource[] | string[];
};

const isRedText = (text: string) => ['위험', '나쁨'].findIndex((redText) => redText === text) !== -1;

export default function HealthyCard({ label, description, result, source }: HealthyCardProps) {
    return (
        <View style={styles.wrapper}>
            <Typo variant="body4Semibold" color="dark-grey-500">
                {label}
            </Typo>
            <Image source={source} style={{ width: 60, height: 60 }} />
            <Typo variant="heading3Semibold" color={isRedText(result) ? 'red-500' : 'black'}>
                {result}
            </Typo>
            <Typo variant="body7Semibold" color="dark-grey-500">
                {description}
            </Typo>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 14,
        backgroundColor: 'white',
        paddingVertical: 19,
        alignItems: 'center',
        gap: 10,
        width: '30%',
        marginBottom: 20,
    },
});
