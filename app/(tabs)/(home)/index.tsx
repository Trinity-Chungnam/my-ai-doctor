import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import PersonPinCircle from '../../../assets/icons/person_pin_circle';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import { variant } from '../../../components/Text/token';
import { COLOR } from '../../../src/tokens/color';

export default function HomeScreen() {
    const data = {
        name: '마이닥',
        residentRegistrationNumber: '790516-1XXXXXX',
        waitingCount: 0,
        reservationCount: 1,
        location: '전라남도 무안군 삼향읍 오룡길 1',
        height: 180,
        weight: 92,
        temperature: 36.7,
        disease: {
            chronic: '고혈압',
            acute: '감기',
        },
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
                        <Text style={[styles.whiteColor, variant.body1]}>{`${data.residentRegistrationNumber} `}</Text>
                    </View>
                    <View style={styles.subCardWrapper}>
                        <View style={styles.subCardContent}>
                            <Text style={[styles.subCardTitle, variant.body4Semibold]}>진료대기</Text>
                            <Text style={variant.heading1Semibold}>{data.waitingCount}건</Text>
                        </View>
                        <View style={styles.subCardContent}>
                            <Text style={[styles.subCardTitle, variant.body4Semibold]}>예약일정</Text>
                            <Text style={variant.heading1Semibold}>{data.reservationCount}건</Text>
                        </View>
                        <Image source={require('../../../assets/images/QR.png')} style={styles.imageSize} />
                    </View>
                </ShadowCard>

                <View style={styles.locationCard}>
                    <PersonPinCircle width={26} height={26} />
                    <Text style={variant.body1Medium}>{data.location}</Text>
                    <View style={styles.empty} />
                </View>

                <View style={styles.bodyInfoCard}>
                    <Text style={variant.title1Semibold}>신체 정보</Text>
                    <View style={styles.bodyInfoSubCard}>
                        <Text style={variant.body1Medium}>
                            {data.height}
                            <Text style={variant.body4Semibold}>cm</Text>
                        </Text>
                        <Text style={variant.body1Medium}>
                            {data.weight}
                            <Text style={variant.body4Semibold}>kg</Text>
                        </Text>
                        <Text style={variant.body1Medium}>
                            {data.temperature}
                            <Text style={variant.body4Semibold}>℃</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.diseaseCard}>
                    <View style={styles.diseaseCardTitle}>
                        <Text style={variant.title1Semibold}>나의 질환</Text>
                        <Text style={[variant.body5Medium, styles.descriptionTextColor]}>*급성은 1개월 이내만 반영됩니다</Text>
                    </View>
                    <View style={styles.diseaseSubCardWrapper}>
                        <View style={styles.diseaseSubCard}>
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>만성</Text>
                            <Text style={[variant.heading1Bold, { color: COLOR.BLUE[500] }]}>{data.disease.chronic}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.diseaseSubCard}>
                            <Text style={[variant.body4Semibold, { color: COLOR.DARK_GREY[500] }]}>급성</Text>
                            <Text style={[variant.heading1Bold, { color: COLOR.DARK_GREY[500] }]}>{data.disease.acute}</Text>
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

    subCardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 14,
        paddingVertical: 7,
        paddingLeft: 47,
        paddingRight: 13,
    },
    subCardContent: {
        alignItems: 'center',
        gap: 10,
    },
    subCardTitle: {
        color: COLOR.DARK_GREY[500],
    },

    imageSize: {
        width: 90,
        height: 90,
    },

    empty: {
        width: 26,
    },
    locationCard: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        padding: 20,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bodyInfoCard: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        padding: 20,
        borderRadius: 14,
        gap: 20,
    },
    bodyInfoSubCard: {
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        flexDirection: 'row',
        width: '100%',
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

    divider: {
        height: 117,
        width: 1,
        backgroundColor: COLOR.LIGHT_GREY[500],
    },
    descriptionTextColor: {
        color: COLOR.DARK_GREY[500],
    },
});
