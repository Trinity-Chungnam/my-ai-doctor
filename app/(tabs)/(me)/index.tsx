import dayjs from 'dayjs';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UpdateIcon from '../../../assets/icons/update';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { TextColorType } from '../../../components/Text/type';
import { COLOR } from '../../../src/tokens/color';

export default function MonitoringDetailScreen() {
    const { bottom } = useSafeAreaInsets();
    const data = {
        fetchDate: dayjs().format('YYYY년 MM월 DD일 HH:mm 기준'),
        familyInfos: [
            { name: '마이진', birthday: '2012년 5월 30일생' },
            { name: '마할배', birthday: '1953년 12월 17일생' },
        ],
    };

    const menuList: {
        title: string;
        color: TextColorType;
        backGroundColor: TextColorType;
    }[] = [
        {
            title: '진료기록',
            color: 'black',
            backGroundColor: 'white',
        },
        {
            title: '예방접종 기록',
            color: 'black',
            backGroundColor: 'white',
        },
        {
            title: '건강검진 기록',
            color: 'black',
            backGroundColor: 'white',
        },
        {
            title: '나의 보험',
            color: 'black',
            backGroundColor: 'white',
        },
        {
            title: '접종 / 국가건강검진 예약하기',
            color: 'white',
            backGroundColor: 'dark-grey-500',
        },
    ];

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: bottom }}>
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
                    {menuList.map(({ title, backGroundColor, color }) => {
                        return (
                            <View
                                key={title}
                                style={[
                                    styles.buttonWrapper,
                                    backGroundColor === 'dark-grey-500' ? styles.bgDarkGrey : styles.bgWhite,
                                ]}
                            >
                                <Typo variant="title3Medium" color={color}>
                                    {title}
                                </Typo>
                            </View>
                        );
                    })}
                </ShadowCard>
                <ShadowCard style={styles.familyCardWrapper}>
                    <View style={styles.cardContainer}>
                        <Typo variant="title1Semibold" color="white">
                            가족관리
                        </Typo>
                        <Typo variant="body5Medium" color="white">
                            *가족을 누르면 상세데이터가 보여집니다
                        </Typo>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
                        {data.familyInfos.map(({ name, birthday }) => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 14,
                                        flex: 1,
                                        gap: 20,
                                        paddingVertical: 24,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typo variant="title3Semibold">{name}</Typo>
                                    <Typo variant="body5Medium" color="dark-grey-500">
                                        {birthday}
                                    </Typo>
                                </View>
                            );
                        })}
                    </View>
                    <View style={[styles.buttonWrapper, styles.bgWhite]}>
                        <Typo variant="title3Medium" color="dark-grey-500">
                            가족 추가하기
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

    familyCardWrapper: {
        gap: 20,
        borderRadius: 14,
        backgroundColor: COLOR.ORANGE[500],
    },
});
