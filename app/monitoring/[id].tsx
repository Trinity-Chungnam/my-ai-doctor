import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HealthyCard, { HealthyCardProps } from '../(tabs)/(monitoring)/components/HealthyCard';
import ReservationModal from '../../components/Modal/ReservationModal';
import ScreenWrapper from '../../components/ScreenWrapper';
import ShadowCard from '../../components/ShadowCard';
import Typo from '../../components/Text/Typo';
import { COLOR } from '../../tokens/color';

export default function MonitoringDetailScreen() {
    const { bottom } = useSafeAreaInsets();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const router = useRouter();

    const data = {
        id: '123',
        dateString: '2024년 4월 5일',
        healthyAge: {
            origin: 48,
            compare: 4,
        },
        waring: {
            origin: '간암',
            reason: '가족력',
        },
        ageGroupAverage: {
            origin: '보통',
            compare: -6,
        },
        physicalHealth: '보통',
        bloodHealth: '나쁨',
        lungDisease: '보통',
        kidneyDisease: '위험',
        prostateDisease: '좋음',
        brainDisease: '보통',
    };

    const healthyCardArray: HealthyCardProps[] = [
        {
            label: '신체 건강',
            result: data.physicalHealth,
            description: '동일 연령 기준',
            source: require('../../assets/images/accessibility.png'),
        },
        {
            label: '혈액 건강',
            result: data.bloodHealth,
            description: '당뇨 주의',
            source: require('../../assets/images/blood.png'),
        },
        {
            label: '폐 질환',
            result: data.lungDisease,
            description: '흡연 주의',
            source: require('../../assets/images/lung.png'),
        },
        {
            label: '신장 질환',
            result: data.kidneyDisease,
            description: '동일 연령 기준',
            source: require('../../assets/images/kidney.png'),
        },
        {
            label: '전립선 질환',
            result: data.prostateDisease,
            description: '동일 연령 기준',
            source: require('../../assets/images/prostate.png'),
        },
        {
            label: '뇌 질환',
            result: data.brainDisease,
            description: '동일 연령 기준',
            source: require('../../assets/images/brain.png'),
        },
    ];

    return (
        <>
            <ScrollView contentContainerStyle={{ paddingBottom: bottom + 79 }}>
                <ScreenWrapper style={styles.wrapper}>
                    <ShadowCard style={styles.shadowCard}>
                        <View style={styles.cardContainer}>
                            <Typo variant="title1Semibold" color="white">
                                {data.dateString}
                            </Typo>
                            <Typo variant="body5Medium" color="white">
                                *My Data 반영, 동일 연령 기준
                            </Typo>
                        </View>
                        <View style={styles.subCard}>
                            <View style={styles.subCardWrapper}>
                                <View style={styles.subCardContent}>
                                    <Typo variant="body4Semibold" color="dark-grey-500">
                                        건강나이
                                    </Typo>
                                    <Image source={require('../../assets/images/person.png')} style={styles.imageSize} />
                                    <Typo variant="heading1Semibold">{data.healthyAge.origin}세</Typo>
                                    <Typo variant="body7Semibold" color="orange-500">
                                        {data.healthyAge.compare >= 0
                                            ? '+' + data.healthyAge.compare + '세'
                                            : data.healthyAge.compare + '세'}
                                    </Typo>
                                </View>
                                <View style={styles.subCardContent}>
                                    <Typo variant="body4Semibold" color="dark-grey-500">
                                        주의
                                    </Typo>
                                    <Image source={require('../../assets/images/liver.png')} style={styles.imageSize} />
                                    <Typo variant="heading1Semibold">{data.waring.origin}</Typo>
                                    <Typo variant="body7Semibold" color="orange-500">
                                        {data.waring.reason}
                                    </Typo>
                                </View>
                                <View style={styles.subCardContent}>
                                    <Typo variant="body4Semibold" color="dark-grey-500">
                                        연령대 평균
                                    </Typo>
                                    <Image source={require('../../assets/images/graph.png')} style={styles.imageSize} />
                                    <Typo variant="heading1Semibold">{data.ageGroupAverage.origin}</Typo>
                                    <Typo variant="body7Semibold" color="orange-500">
                                        {data.ageGroupAverage.compare >= 0
                                            ? '+' + data.ageGroupAverage.compare + '점'
                                            : data.ageGroupAverage.compare + '점'}
                                    </Typo>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {healthyCardArray.map((props) => {
                                return <HealthyCard key={props.label} {...props} />;
                            })}
                        </View>
                    </ShadowCard>
                    <TouchableOpacity onPress={() => setIsOpenModal(true)}>
                        <View style={styles.buttonWrapper}>
                            <Typo variant="title3Medium">주간 레포트 저장하기</Typo>
                        </View>
                    </TouchableOpacity>
                </ScreenWrapper>
            </ScrollView>
            <ReservationModal
                isOpen={isOpenModal}
                onSubmit={() => {
                    setIsOpenModal(false);
                    router.push('/monitoring/appointment-vaccination/목포종합병원');
                }}
                onClose={() => setIsOpenModal(false)}
            />
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        gap: 20,
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

    subCard: {
        backgroundColor: 'white',
        borderRadius: 14,
    },
    subCardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 30,
    },
    subCardContent: {
        alignItems: 'center',
        gap: 17,
    },
    subCardTitle: {
        color: COLOR.DARK_GREY[500],
    },

    imageSize: {
        width: 60,
        height: 60,
    },

    buttonWrapper: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        borderRadius: 14,
        alignItems: 'center',
        paddingVertical: 13,
    },
});
