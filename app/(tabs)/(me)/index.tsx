import dayjs from 'dayjs';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UpdateIcon from '../../../assets/icons/update';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { COLOR } from '../../../src/tokens/color';

export default function MonitoringDetailScreen() {
    const { bottom } = useSafeAreaInsets();
    const data = {
        fetchDate: dayjs().format('YYYY년 MM월 DD일 HH:mm 기준'),
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: bottom + 79 }}>
            <ScreenWrapper style={styles.wrapper}>
                <ShadowCard style={styles.shadowCard}>
                    <View style={styles.cardContainer}>
                        <View style={styles.titleWrapper}>
                            <Typo variant="title1Semibold" color="white">
                                {'마이데이터 '}
                            </Typo>
                            <UpdateIcon />
                        </View>
                        <Typo variant="body5Medium" color="white">
                            {data.fetchDate}
                        </Typo>
                    </View>
                    <View style={[styles.buttonWrapper, styles.bgWhite]}>
                        <Typo variant="title3Medium">진료기록</Typo>
                    </View>
                    <View style={[styles.buttonWrapper, styles.bgWhite]}>
                        <Typo variant="title3Medium">예방접종 기록</Typo>
                    </View>
                    <View style={[styles.buttonWrapper, styles.bgWhite]}>
                        <Typo variant="title3Medium">건강검진 기록</Typo>
                    </View>
                    <View style={[styles.buttonWrapper, styles.bgWhite]}>
                        <Typo variant="title3Medium">나의 보험</Typo>
                    </View>
                    <View style={[styles.buttonWrapper, styles.bgDarkGrey]}>
                        <Typo variant="title3Medium" color="white">
                            접종 / 국가건강검진 예약하기
                        </Typo>
                    </View>
                </ShadowCard>
            </ScreenWrapper>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        gap: 20,
    },

    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },

    shadowCard: {
        gap: 20,
        borderRadius: 14,
        backgroundColor: COLOR.BLUE[500],
    },
    whiteColor: {
        color: 'white',
    },

    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },

    bgWhite: {
        backgroundColor: 'white',
    },
    bgDarkGrey: {
        backgroundColor: COLOR.DARK_GREY[500],
    },

    buttonWrapper: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        borderRadius: 14,
        alignItems: 'center',
        paddingVertical: 13,
    },
});
