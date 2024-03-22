import dayjs from 'dayjs';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowBackIcon from '../../../assets/icons/arrow_back_ios';
import ArrowFrontIcon from '../../../assets/icons/arrow_front_ios';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { COLOR } from '../../../tokens/color';
import { calculateAverage } from '../../../utils/average';
import { getLastDays, getTimeDifference } from '../../../utils/time-format';

dayjs.locale('ko');

export default function FamilyHealthDataScreen() {
    const { bottom } = useSafeAreaInsets();
    const [day, setDay] = useState(dayjs());
    const { width } = useWindowDimensions();

    const handlePressPrevDate = () => {
        setDay((prevDay) => prevDay.subtract(5, 'day'));
    };

    const handlePressNextDate = () => {
        setDay((prevDay) => {
            if (dayjs().isSame(prevDay)) {
                return prevDay;
            }
            return prevDay.add(5, 'day');
        });
    };

    const data = {
        혈당List: [85, 100, 70, 80, 70],
        심박수List: [120, 85, 70, 80, 110],
        card: {
            혈압: {
                source: require('../../../assets/images/blood_pressure.png'),
                value: '120/75',
                단위: 'mmHg',
                updatedAt: dayjs()
                    .subtract(1, 'day')
                    .subtract(1, 'hour')
                    .subtract(15, 'minute')
                    .subtract(40, 'second')
                    .format(),
            },
            체온: {
                source: require('../../../assets/images/temperature.png'),
                value: 36.6,
                단위: '℃',
                updatedAt: dayjs()
                    .subtract(1, 'day')
                    .subtract(5, 'hour')
                    .subtract(45, 'minute')
                    .subtract(40, 'second')
                    .format(),
            },
            산소포화도: {
                source: require('../../../assets/images/oxygen_saturation.png'),
                value: 90,
                단위: '%',
                updatedAt: dayjs()
                    .subtract(2, 'day')
                    .subtract(1, 'hour')
                    .subtract(15, 'minute')
                    .subtract(10, 'second')
                    .format(),
            },
            걸음수: {
                source: require('../../../assets/images/footsteps.png'),
                value: 12075,
                단위: '걸음',
                updatedAt: dayjs()
                    .subtract(1, 'day')
                    .subtract(3, 'hour')
                    .subtract(15, 'minute')
                    .subtract(10, 'second')
                    .format(),
            },
        },
    };

    const chartData = {
        labels: getLastDays(day.format(), 5),
        datasets: [
            {
                data: data.혈당List,
                color: (opacity = 0.73) => `rgba(255, 197, 50, ${opacity})`,
            },
            {
                data: data.심박수List,
                color: (opacity = 1) => `rgba(255, 197, 50, ${opacity})`,
            },
            {
                data: [0, 160],
                color: () => `rgba(255, 255, 255, 0)`,
            },
        ],
        legend: ['혈당', '심박수'],
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: bottom }}>
            <ScreenWrapper style={styles.wrapper}>
                <View style={styles.dataWrapper}>
                    <TouchableOpacity onPress={handlePressPrevDate}>
                        <ArrowBackIcon />
                    </TouchableOpacity>
                    <Typo>{`${day.subtract(4, 'day').format('YYYY.MM.DD')} ~ ${day.format('YYYY.MM.DD')}`}</Typo>
                    <TouchableOpacity onPress={handlePressNextDate}>
                        <ArrowFrontIcon />
                    </TouchableOpacity>
                </View>
                <ShadowCard style={styles.shadowCardWrapper}>
                    <View>
                        <Typo variant="title1Semibold" color="white">
                            마이진
                            <Typo variant="body1Medium" color="white">
                                님
                            </Typo>
                        </Typo>
                    </View>
                    <LineChart
                        data={chartData}
                        width={width - 80}
                        height={220}
                        chartConfig={{
                            backgroundColor: 'white',
                            backgroundGradientFrom: 'white',
                            backgroundGradientFromOpacity: 1,
                            backgroundGradientTo: 'white',
                            backgroundGradientToOpacity: 1,
                            strokeWidth: 3,
                            scrollableDotStrokeColor: 'black',
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            useShadowColorFromDataset: true,
                            propsForBackgroundLines: {
                                strokeDasharray: '',
                                stroke: '#CCCCCC',
                            },
                            decimalPlaces: 0,
                        }}
                        style={{
                            borderRadius: 14,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            paddingVertical: 21,
                            paddingHorizontal: 30,
                            borderRadius: 14,
                        }}
                    >
                        <View style={{ gap: 10, alignItems: 'center' }}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                평균 혈당
                            </Typo>
                            <Typo variant="heading3Semibold">
                                {calculateAverage(data.혈당List)}
                                <Typo variant="body4Semibold">mg/dL</Typo>
                            </Typo>
                        </View>
                        <View style={{ gap: 10, alignItems: 'center' }}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                평균 심박수
                            </Typo>
                            <Typo variant="heading3Semibold">
                                {calculateAverage(data.심박수List)}
                                <Typo variant="body4Semibold">BPM</Typo>
                            </Typo>
                        </View>
                        <View style={{ gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typo variant="body4Semibold" color="dark-grey-500">
                                범위
                            </Typo>
                            <Typo variant="heading3Semibold">정상</Typo>
                        </View>
                    </View>
                    <View style={styles.cardWrapper}>
                        {Object.entries(data.card).map(([key, { source, value, 단위, updatedAt }]) => {
                            return (
                                <View
                                    key={key}
                                    style={{
                                        width: '48%',
                                        backgroundColor: 'white',
                                        marginBottom: 20,
                                        paddingBottom: 5,
                                        borderRadius: 5,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingVertical: 13,
                                            gap: 4,
                                        }}
                                    >
                                        <Image source={source} style={{ width: 37, height: 37 }} />
                                        <View style={{ gap: 5 }}>
                                            <Typo variant="body3Bold">{key}</Typo>
                                            <Typo variant="body3Bold" color="orange-500">
                                                {value}
                                                <Typo variant="body5Medium" color="dark-grey-500">
                                                    {단위}
                                                </Typo>
                                            </Typo>
                                        </View>
                                    </View>

                                    <View style={{ alignSelf: 'center' }}>
                                        <Typo variant="body8Medium" color="dark-grey-500">
                                            마지막측정: {getTimeDifference(updatedAt)}
                                        </Typo>
                                    </View>
                                </View>
                            );
                        })}
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
    },
    dataWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.LIGHT_GREY[500],
        padding: 20,
        borderRadius: 14,
        marginBottom: 24,
    },

    shadowCardWrapper: {
        gap: 20,
        borderRadius: 14,
        backgroundColor: COLOR.ORANGE[500],
        padding: 20,
    },

    cardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});
