import { useRouter } from 'expo-router';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UpdateIcon from '../../../assets/icons/update';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { MENU_LIST } from '../../../constants/me';
import { MY_SCREEN_DATA } from '../../../mocks/me';
import { COLOR } from '../../../tokens/color';

export default function MeScreen() {
    const { bottom } = useSafeAreaInsets();
    const router = useRouter();
    const data = MY_SCREEN_DATA;

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: Platform.select({ ios: bottom, android: 10, default: 10 }) }}>
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
                    {MENU_LIST.map(({ title, backGroundColor, color }) => {
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
                    <View style={styles.familyCardContainer}>
                        {data.familyInfos.map(({ id, name, birthday }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.familyCard}
                                    key={name + birthday}
                                    onPress={() => router.push(`/me/family-health-data/${id}`)}
                                    activeOpacity={0.9}
                                >
                                    <Typo variant="title3Semibold">{name}</Typo>
                                    <Typo variant="body5Medium" color="dark-grey-500">
                                        {birthday}
                                    </Typo>
                                </TouchableOpacity>
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

    familyCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap',
    },
    familyCard: {
        backgroundColor: 'white',
        borderRadius: 14,
        flex: 1,
        gap: 20,
        paddingVertical: 24,
        alignItems: 'center',
    },
});
