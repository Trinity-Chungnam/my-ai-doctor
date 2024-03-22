import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import PersonPinCircle from '../../../assets/icons/person_pin_circle';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
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
                        <Typo variant="title1Semibold" color="white">
                            {`${data.name} `}
                            <Typo variant="body1Medium" color="white">
                                님
                            </Typo>
                        </Typo>
                        <Typo variant="body1Medium" color="white">
                            {`${data.residentRegistrationNumber} `}
                        </Typo>
                    </View>
                    <View style={styles.subCardWrapper}>
                        <View style={styles.subCardContent}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                진료대기
                            </Typo>
                            <Typo variant="heading1Semibold">{data.waitingCount}건</Typo>
                        </View>
                        <View style={styles.subCardContent}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                예약일정
                            </Typo>
                            <Typo variant="heading1Semibold">{data.reservationCount}건</Typo>
                        </View>
                        <Image source={require('../../../assets/images/QR.png')} style={styles.imageSize} />
                    </View>
                </ShadowCard>

                <View style={styles.locationCard}>
                    <PersonPinCircle width={26} height={26} />
                    <Typo variant="body1Medium">{data.location}</Typo>
                    <View style={styles.empty} />
                </View>

                <View style={styles.bodyInfoCard}>
                    <Typo variant="title1Semibold">신체 정보</Typo>
                    <View style={styles.bodyInfoSubCard}>
                        <Typo variant="body1Medium">
                            {data.height}
                            <Typo variant="body4Semibold">cm</Typo>
                        </Typo>
                        <Typo variant="body1Medium">
                            {data.weight}
                            <Typo variant="body4Semibold">kg</Typo>
                        </Typo>
                        <Typo variant="body1Medium">
                            {data.temperature}
                            <Typo variant="body4Semibold">℃</Typo>
                        </Typo>
                    </View>
                </View>

                <View style={styles.diseaseCard}>
                    <View style={styles.diseaseCardTitle}>
                        <Typo variant="title1Semibold">나의 질환</Typo>
                        <Typo variant="body5Medium" color="dark-grey-500">
                            *급성은 1개월 이내만 반영됩니다
                        </Typo>
                    </View>
                    <View style={styles.diseaseSubCardWrapper}>
                        <View style={styles.diseaseSubCard}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                만성
                            </Typo>
                            <Typo variant="heading1Bold" color="brand-color">
                                {data.disease.chronic}
                            </Typo>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.diseaseSubCard}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                급성
                            </Typo>
                            <Typo variant="heading1Bold" color="dark-grey-500">
                                {data.disease.acute}
                            </Typo>
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
    descriptionTypoColor: {
        color: COLOR.DARK_GREY[500],
    },
});
