import { StyleSheet, View } from 'react-native';

import { COLOR } from '../../tokens/color';
import ShadowCard from '../ShadowCard';
import Typo from '../Text/Typo';

type ChronicCardProps = {
    title: string;
    date: string;
    병명: string;
    진료기관: string;
};

export default function ChronicCard({ date, title, 병명, 진료기관 }: ChronicCardProps) {
    return (
        <ShadowCard style={styles.wrapper}>
            <View style={styles.container}>
                <Typo variant="title1Semibold" color="white">
                    {title}
                </Typo>
                <Typo variant="body1Medium" color="white">
                    {date}
                </Typo>
            </View>
            <View style={styles.subCard}>
                <Typo variant="heading1Semibold">{병명}</Typo>
                <View style={styles.subCardContainer}>
                    <Typo variant="body4" color="dark-grey-500">
                        진료기관
                    </Typo>
                    <Typo variant="body1Semibold">{진료기관}</Typo>
                </View>
            </View>
        </ShadowCard>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLOR.BLUE[500],
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    subCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 104,
        padding: 24,
        borderRadius: 14,
    },
    subCardContainer: {
        alignItems: 'center',
    },
});
