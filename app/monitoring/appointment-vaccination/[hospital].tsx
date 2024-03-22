import dayjs from 'dayjs';
import { useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import CalendarMonth from '../../../assets/icons/calendar_month';
import ResidentRegistrationModal from '../../../components/Modal/ResidentRegistrationModal';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { COLOR } from '../../../tokens/color';
LocaleConfig.locales['fr'] = {
    monthNames: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

export default function AppointmentVaccinationScreen() {
    const data = {
        name: '마이닥',
    };
    const { hospital } = useLocalSearchParams<{ hospital: string }>();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const initDate = dayjs().format('YYYY-MM-DD');
    const [selected, setSelected] = useState(initDate);
    const marked = useMemo(
        () => ({
            [selected]: {
                selected: true,
                selectedColor: '#2246FF4D',
                selectedTextColor: '#2246FF',
            },
        }),
        [selected],
    );

    return (
        <>
            <ScreenWrapper style={styles.wrapper}>
                <ShadowCard style={styles.shadowCard}>
                    <View style={styles.textWrapper}>
                        <Typo variant="title1Semibold" color="white">
                            {`${data.name} `}
                            <Typo variant="body1Medium" color="white">
                                님
                            </Typo>
                        </Typo>
                        <Typo variant="title1Semibold" color="white">
                            {hospital?.replace(/\([^)]*\)/, '').trim()}
                        </Typo>
                    </View>
                    <Calendar
                        style={{ borderRadius: 14, paddingBottom: 20, marginBottom: 20 }}
                        initialDate={initDate}
                        monthFormat="yyyy년 MM월"
                        markedDates={marked}
                        renderHeader={(date) => {
                            return (
                                <View style={{ height: 96, padding: 25 }}>
                                    <Typo variant="heading3Medium">{dayjs(date).format('YYYY년 MM월')}</Typo>
                                </View>
                            );
                        }}
                        onDayPress={(day) => {
                            setSelected(day.dateString);
                        }}
                        hideArrows
                    />
                    <View style={styles.calendarStringWrapper}>
                        <CalendarMonth />
                        <Typo>{dayjs(selected).format('YYYY년 MM월 DD일')}</Typo>
                        <View style={{ width: 26 }} />
                    </View>
                    <View style={styles.divider} />
                    <TouchableOpacity onPress={() => setIsOpenModal(true)}>
                        <View style={styles.buttonWrapper}>
                            <Typo variant="title1Semibold" color="white">
                                예약 확정하기
                            </Typo>
                        </View>
                    </TouchableOpacity>
                </ShadowCard>
            </ScreenWrapper>
            <ResidentRegistrationModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} onSubmit={() => {}} />
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 24,
        paddingHorizontal: 20,
    },
    shadowCard: {
        borderRadius: 14,
        backgroundColor: COLOR.BLUE[500],
        padding: 0,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    whiteColor: {
        color: 'white',
    },

    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    calendarStringWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 17,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 14,
        marginBottom: 53,
    },

    divider: {
        height: 1,
        backgroundColor: COLOR.LIGHT_GREY[500],
    },

    buttonWrapper: {
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
