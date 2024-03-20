import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenWrapper from '../../components/ScreenWrapper';
import ShadowCard from '../../components/ShadowCard';
import { variant } from '../../components/Text/token';
import { COLOR } from '../../src/tokens/color';

export default function MonitoringDetailScreen() {
    const { bottom } = useSafeAreaInsets();
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

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: bottom + 79 }}>
            <ScreenWrapper style={styles.wrapper}>
                <ShadowCard style={styles.shadowCard}>
                    <View style={styles.cardContainer}>
                        <Text style={[styles.whiteColor, variant.title1Semibold]}>{data.dateString}</Text>
                        <Text style={[styles.whiteColor, variant.body5Medium]}>*My Data 반영, 동일 연령 기준</Text>
                    </View>
                    <View style={styles.subCard}>
                        <View style={styles.subCardWrapper}>
                            <View style={styles.subCardContent}>
                                <Text style={[styles.subCardTitle, variant.body4Semibold]}>건강나이</Text>
                                <Image source={require('../../assets/images/person.png')} style={styles.imageSize} />
                                <Text style={variant.heading1Semibold}>{data.healthyAge.origin}세</Text>
                                <Text style={(variant.body7Semibold, { color: COLOR.ORANGE[500] })}>
                                    {data.healthyAge.compare >= 0
                                        ? '+' + data.healthyAge.compare + '세'
                                        : data.healthyAge.compare + '세'}
                                </Text>
                            </View>
                            <View style={styles.subCardContent}>
                                <Text style={[styles.subCardTitle, variant.body4Semibold]}>주의</Text>
                                <Image source={require('../../assets/images/liver.png')} style={styles.imageSize} />
                                <Text style={variant.heading1Semibold}>{data.waring.origin}</Text>
                                <Text style={(variant.body7Semibold, { color: COLOR.ORANGE[500] })}>{data.waring.reason}</Text>
                            </View>
                            <View style={styles.subCardContent}>
                                <Text style={[styles.subCardTitle, variant.body4Semibold]}>연령대 평균</Text>
                                <Image source={require('../../assets/images/graph.png')} style={styles.imageSize} />
                                <Text style={variant.heading1Semibold}>{data.ageGroupAverage.origin}</Text>
                                <Text style={(variant.body7Semibold, { color: COLOR.ORANGE[500] })}>
                                    {data.ageGroupAverage.compare >= 0
                                        ? '+' + data.ageGroupAverage.compare + '점'
                                        : data.ageGroupAverage.compare + '점'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View
                            style={{
                                borderRadius: 14,
                                backgroundColor: 'white',
                                paddingVertical: 19,
                                alignItems: 'center',
                                gap: 10,
                                width: '30%',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>신체 건강</Text>
                            <Image
                                source={require('../../assets/images/accessibility.png')}
                                style={{ width: 60, height: 60 }}
                            />
                            <Text style={variant.heading3Semibold}>{data.physicalHealth}</Text>
                            <Text style={[variant.body7Semibold, { color: COLOR.DARK_GREY[500] }]}>동일 연령 기준</Text>
                        </View>
                        <View
                            style={{
                                borderRadius: 14,
                                backgroundColor: 'white',
                                paddingVertical: 19,
                                alignItems: 'center',
                                gap: 10,
                                width: '30%',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>혈액 건강</Text>
                            <Image source={require('../../assets/images/blood.png')} style={{ width: 60, height: 60 }} />
                            <Text
                                style={[
                                    variant.heading3Semibold,
                                    data.bloodHealth === '나쁨' ? { color: COLOR.RED[500] } : undefined,
                                ]}
                            >
                                {data.bloodHealth}
                            </Text>
                            <Text style={[variant.body7Semibold, { color: COLOR.DARK_GREY[500] }]}>당뇨 주의</Text>
                        </View>
                        <View
                            style={{
                                borderRadius: 14,
                                backgroundColor: 'white',
                                paddingVertical: 19,
                                alignItems: 'center',
                                gap: 10,
                                width: '30%',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>폐 질환</Text>
                            <Image source={require('../../assets/images/lung.png')} style={{ width: 60, height: 60 }} />
                            <Text style={variant.heading3Semibold}>{data.lungDisease}</Text>
                            <Text style={[variant.body7Semibold, { color: COLOR.DARK_GREY[500] }]}>흡연 주의</Text>
                        </View>
                        <View
                            style={{
                                borderRadius: 14,
                                backgroundColor: 'white',
                                paddingVertical: 19,
                                alignItems: 'center',
                                gap: 10,
                                width: '30%',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>신장 질환</Text>
                            <Image source={require('../../assets/images/kidney.png')} style={{ width: 60, height: 60 }} />
                            <Text
                                style={[
                                    variant.heading3Semibold,
                                    data.kidneyDisease === '위험' ? { color: COLOR.RED[500] } : undefined,
                                ]}
                            >
                                {data.kidneyDisease}
                            </Text>
                            <Text style={[variant.body7Semibold, { color: COLOR.DARK_GREY[500] }]}>동일 연령 기준</Text>
                        </View>
                        <View
                            style={{
                                borderRadius: 14,
                                backgroundColor: 'white',
                                paddingVertical: 19,
                                alignItems: 'center',
                                gap: 10,
                                width: '30%',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>전립선 질환</Text>
                            <Image source={require('../../assets/images/prostate.png')} style={{ width: 60, height: 60 }} />
                            <Text style={variant.heading3Semibold}>{data.prostateDisease}</Text>
                            <Text style={[variant.body7Semibold, { color: COLOR.DARK_GREY[500] }]}>동일 연령 기준</Text>
                        </View>
                        <View
                            style={{
                                borderRadius: 14,
                                backgroundColor: 'white',
                                paddingVertical: 19,
                                alignItems: 'center',
                                gap: 10,
                                width: '30%',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>뇌 질환</Text>
                            <Image source={require('../../assets/images/brain.png')} style={{ width: 60, height: 60 }} />
                            <Text style={variant.heading3Semibold}>{data.brainDisease}</Text>
                            <Text style={[variant.body7Semibold, { color: COLOR.DARK_GREY[500] }]}>동일 연령 기준</Text>
                        </View>
                    </View>
                </ShadowCard>
                <View style={styles.buttonWrapper}>
                    <Text style={variant.title3Medium}>주간 레포트 저장하기</Text>
                </View>
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
