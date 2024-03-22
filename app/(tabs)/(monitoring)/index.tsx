import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import GoogleMapModal from '../../../components/Modal/GoogleMapModal';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { COLOR } from '../../../tokens/color';

export default function HomeScreen() {
    const [isOpenGoogleMapModal, setIsOpenGoogleMapModal] = useState(false);
    const router = useRouter();
    const [search, setSearch] = useState('');
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
        <>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ScreenWrapper style={styles.wrapper}>
                    <ShadowCard style={styles.shadowCard}>
                        <View style={styles.cardContainer}>
                            <Typo variant="title1Semibold" color="white">
                                {`${data.name} `}
                                <Typo variant="body1Medium" color="white">
                                    님
                                </Typo>
                            </Typo>
                            <Typo variant="body5Medium" color="white">
                                *글자를 누르면 주간 운동과 식단이 제공됩니다
                            </Typo>
                        </View>
                        <View style={styles.subCard}>
                            <View style={styles.subCardWrapper}>
                                <View style={styles.subCardContent}>
                                    <Typo variant="body4Semibold" color="dark-grey-500">
                                        건강나이
                                    </Typo>
                                    <Image source={require('../../../assets/images/person.png')} style={styles.imageSize} />
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
                                    <Image source={require('../../../assets/images/liver.png')} style={styles.imageSize} />
                                    <Typo variant="heading1Semibold">{data.waring}</Typo>
                                </View>
                                <View style={styles.subCardContent}>
                                    <Typo variant="body4Semibold" color="dark-grey-500">
                                        연령대 평균
                                    </Typo>
                                    <Image source={require('../../../assets/images/graph.png')} style={styles.imageSize} />
                                    <Typo variant="heading1Semibold">{data.ageGroupAverage.origin}</Typo>
                                    <Typo variant="body7Semibold" color="orange-500">
                                        {data.ageGroupAverage.compare >= 0
                                            ? '+' + data.ageGroupAverage.compare + '점'
                                            : data.ageGroupAverage.compare + '점'}
                                    </Typo>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => router.push(`/monitoring/${data.id}`)}>
                                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                                    <View style={styles.buttonWrapper}>
                                        <Typo variant="body1Medium">상세 정보 살펴보기</Typo>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.diseaseSubCardWrapper}>
                            <View style={styles.diseaseSubCard}>
                                <Typo variant="body4Semibold" color="dark-grey-500">
                                    AI 닥터 추천 운동
                                </Typo>
                                <Typo variant="heading1Bold" color="brand-color">
                                    {data.recommendedExercise}
                                </Typo>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.diseaseSubCard}>
                                <Typo variant="body4Semibold" color="dark-grey-500">
                                    AI 닥터 추천 식단
                                </Typo>
                                <Typo variant="heading1Bold">{data.recommendedDiet}</Typo>
                            </View>
                        </View>
                    </ShadowCard>

                    <View style={styles.vaccinationCard}>
                        <View style={styles.vaccinationCardTitle}>
                            <Typo variant="title1Semibold">추천 예방접종</Typo>
                            <Typo variant="body5Medium" color="dark-grey-500">
                                *접종명을 누르면 접종 예약이 가능합니다
                            </Typo>
                        </View>
                        <View style={styles.vaccinationSubCardWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    setSearch('씨앤뉴 내과 (전남 무안군 삼향읍 유교길 1)');
                                    setIsOpenGoogleMapModal(true);
                                }}
                            >
                                <View style={styles.vaccinationItem}>
                                    <Typo variant="body1Medium">B형간염 예방접종</Typo>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setSearch('아이엘 피부과 (전남 무안군 삼향읍 유교길 6)');
                                    setIsOpenGoogleMapModal(true);
                                }}
                            >
                                <View style={styles.vaccinationItem}>
                                    <Typo variant="body1Medium">대상포진 예방접종</Typo>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScreenWrapper>
            </ScrollView>
            <GoogleMapModal
                search={search}
                isOpen={isOpenGoogleMapModal}
                onClose={() => {
                    setSearch('');
                    setIsOpenGoogleMapModal(false);
                }}
                onChangeSearch={setSearch}
                onSubmit={() => {
                    setIsOpenGoogleMapModal(false);
                    router.push(`/monitoring/appointment-vaccination/${search}`);
                }}
            />
        </>
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
