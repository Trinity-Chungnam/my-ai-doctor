import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import { variant } from '../../../components/Text/token';
import { COLOR } from '../../../src/tokens/color';

export default function HomeScreen() {
    const data = {
        id: '123',
        name: '마이닥',
        healthyAge: {
            origin: 48,
            compare: 4,
        },
        waring: '간암',
        ageGroupAverage: {
            origin: '보통',
            compare: -6,
        },
        recommendedExercise: '유산소 운동',
        recommendedDiet: 'DASH 식단',
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ScreenWrapper style={styles.wrapper}>
                <ShadowCard style={styles.shadowCard}>
                    <View style={styles.cardContainer}>
                        <Text style={[styles.whiteColor, variant.title1Semibold]}>
                            {`${data.name} `}
                            <Text style={variant.body1Semibold}>님</Text>
                        </Text>
                        <Text style={[styles.whiteColor, variant.body5Medium]}>
                            *글자를 누르면 주간 운동과 식단이 제공됩니다
                        </Text>
                    </View>
                    <View style={styles.subCard}>
                        <View style={styles.subCardWrapper}>
                            <View style={styles.subCardContent}>
                                <Text style={[styles.subCardTitle, variant.body4Semibold]}>건강나이</Text>
                                <Image source={require('../../../assets/images/person.png')} style={styles.imageSize} />
                                <Text style={variant.heading1Semibold}>{data.healthyAge.origin}세</Text>
                                <Text style={(variant.body7Semibold, { color: COLOR.ORANGE[500] })}>
                                    {data.healthyAge.compare >= 0
                                        ? '+' + data.healthyAge.compare + '세'
                                        : data.healthyAge.compare + '세'}
                                </Text>
                            </View>
                            <View style={styles.subCardContent}>
                                <Text style={[styles.subCardTitle, variant.body4Semibold]}>주의</Text>
                                <Image source={require('../../../assets/images/liver.png')} style={styles.imageSize} />
                                <Text style={variant.heading1Semibold}>{data.waring}</Text>
                            </View>
                            <View style={styles.subCardContent}>
                                <Text style={[styles.subCardTitle, variant.body4Semibold]}>연령대 평균</Text>
                                <Image source={require('../../../assets/images/graph.png')} style={styles.imageSize} />
                                <Text style={variant.heading1Semibold}>{data.ageGroupAverage.origin}</Text>
                                <Text style={(variant.body7Semibold, { color: COLOR.ORANGE[500] })}>
                                    {data.ageGroupAverage.compare >= 0
                                        ? '+' + data.ageGroupAverage.compare + '점'
                                        : data.ageGroupAverage.compare + '점'}
                                </Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                            <View style={styles.buttonWrapper}>
                                <Link href={`/${data.id}`}>
                                    <Text style={variant.body1Medium}>상세 정보 살펴보기</Text>
                                </Link>
                            </View>
                        </View>
                    </View>

                    <View style={styles.diseaseSubCardWrapper}>
                        <View style={styles.diseaseSubCard}>
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>AI 닥터 추천 운동</Text>
                            <Text style={[variant.heading1Bold, { color: COLOR.BLUE[500] }]}>{data.recommendedExercise}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.diseaseSubCard}>
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>AI 닥터 추천 식단</Text>
                            <Text style={[variant.heading1Bold]}>{data.recommendedDiet}</Text>
                        </View>
                    </View>
                </ShadowCard>

                <View style={styles.vaccinationCard}>
                    <View style={styles.vaccinationCardTitle}>
                        <Text style={variant.title1Semibold}>추천 예방접종</Text>
                        <Text style={[variant.body5Medium, styles.descriptionTextColor]}>
                            *접종명을 누르면 접종 예약이 가능합니다
                        </Text>
                    </View>
                    <View style={styles.vaccinationSubCardWrapper}>
                        <View style={styles.vaccinationItem}>
                            <Text style={[variant.body1Medium]}>B형간염 예방접종</Text>
                        </View>
                        <View style={styles.vaccinationItem}>
                            <Text style={[variant.body1Medium]}>대상포진 예방접종</Text>
                        </View>
                    </View>
                </View>
            </ScreenWrapper>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
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

    scrollContainer: {
        gap: 20,
    },

    subCard: {
        backgroundColor: 'white',
        borderRadius: 14,
    },
    subCardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
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

    diseaseCard: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        padding: 20,
        borderRadius: 14,
        gap: 20,
    },
    diseaseCardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },

    diseaseSubCardWrapper: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 14,
        alignItems: 'center',
    },
    diseaseSubCard: {
        paddingTop: 20,
        paddingBottom: 47,
        gap: 25,
        flex: 1,
        alignItems: 'center',
    },

    vaccinationCard: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        padding: 20,
        borderRadius: 14,
        gap: 20,
    },
    vaccinationCardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    vaccinationSubCardWrapper: {
        width: '100%',
        gap: 20,
    },
    vaccinationItem: {
        borderRadius: 14,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 12,
    },

    buttonWrapper: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 14,
        width: '100%',
    },
    divider: {
        height: 117,
        width: 1,
        backgroundColor: COLOR.LIGHT_GREY[500],
    },
    descriptionTextColor: {
        color: COLOR.DARK_GREY[500],
    },
});
