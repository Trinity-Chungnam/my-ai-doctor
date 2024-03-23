import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import HealthyCard, { HealthyCardProps } from '../(tabs)/(monitoring)/components/HealthyCard';
import ReservationModal from '../../components/Modal/ReservationModal';
import ScrollViewWrapper from '../../components/ScrollViewWrapper';
import ShadowCard from '../../components/ShadowCard';
import Typo from '../../components/Text/Typo';
import { MONITORING_DETAIL_DATA } from '../../mocks/monitoring';
import { COLOR } from '../../tokens/color';

export default function MonitoringDetailScreen() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const router = useRouter();

    const data = MONITORING_DETAIL_DATA;
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
            <ScrollViewWrapper style={{ paddingBottom: 79 }} contentContainerStyle={styles.wrapper}>
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
                            {Object.entries(data.요약).map(([title, { value, description, source }]) => {
                                return (
                                    <View key={title} style={styles.subCardContent}>
                                        <Typo variant="body4Semibold" color="dark-grey-500">
                                            {title}
                                        </Typo>
                                        <Image source={source} style={styles.imageSize} />
                                        <Typo variant="heading1Semibold">{value}</Typo>
                                        <Typo variant="body7Semibold" color="orange-500">
                                            {description}
                                        </Typo>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.healthyCardWrapper}>
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
            </ScrollViewWrapper>
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

    healthyCardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    buttonWrapper: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        borderRadius: 14,
        alignItems: 'center',
        paddingVertical: 13,
    },
});
