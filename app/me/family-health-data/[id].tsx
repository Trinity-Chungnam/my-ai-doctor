import dayjs from 'dayjs';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowBackIcon from '../../../assets/icons/arrow_back_ios';
import ArrowFrontIcon from '../../../assets/icons/arrow_front_ios';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ShadowCard from '../../../components/ShadowCard';
import Typo from '../../../components/Text/Typo';
import { FAMILY_HEALTH_DATA } from '../../../mocks/me';
import { COLOR } from '../../../tokens/color';
import { calculateAverage } from '../../../utils/average';
import { getLastDays, getTimeDifference } from '../../../utils/time-format';

export default function FamilyHealthDataScreen() {
    const { bottom } = useSafeAreaInsets();
    const [day, setDay] = useState(dayjs());
    const { width } = useWindowDimensions();

    const data = FAMILY_HEALTH_DATA;

    const averageDataArray = [
        {
            label: '평균 혈당',
            value: calculateAverage(data.혈당List),
            unit: 'mg/dL',
        },
        {
            label: '평균 심박수',
            value: calculateAverage(data.심박수List),
            unit: 'BPM',
        },
        {
            label: '범위',
            value: '정상',
        },
    ];

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

    const handlePressPrevDate = () => {
        setDay((prevDay) => prevDay.subtract(5, 'day'));
    };

    const handlePressNextDate = () => {
        setDay((prevDay) => prevDay.add(5, 'day'));
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
                        chartConfig={chartConfig}
                        style={styles.chart}
                    />
                    <View style={styles.averageCard}>
                        {averageDataArray.map(({ label, value, unit }) => {
                            return (
                                <View key={label} style={{ gap: 10, alignItems: 'center' }}>
                                    <Typo variant="body4Semibold" color="dark-grey-500">
                                        {label}
                                    </Typo>
                                    <Typo variant="heading3Semibold">
                                        {value}
                                        {unit ? <Typo variant="body4Semibold">{unit}</Typo> : null}
                                    </Typo>
                                </View>
                            );
                        })}
                    </View>
                    <View style={styles.cardWrapper}>
                        {Object.entries(data.card).map(([key, { source, value, 단위, updatedAt }]) => {
                            return (
                                <View key={key} style={styles.detailCardWrapper}>
                                    <View style={styles.detailCardContainer}>
                                        <Image source={source} style={styles.imageSize} />
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
                                    <View style={styles.detailCardLastTime}>
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

const chartConfig: AbstractChartConfig = {
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
};

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

    chart: {
        borderRadius: 14,
    },

    averageCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingVertical: 21,
        paddingHorizontal: 30,
        borderRadius: 14,
    },

    detailCardWrapper: {
        width: '48%',
        backgroundColor: 'white',
        marginBottom: 20,
        paddingBottom: 5,
        borderRadius: 5,
    },
    detailCardContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 13,
        gap: 4,
    },
    detailCardLastTime: {
        alignSelf: 'center',
    },
    imageSize: {
        width: 37,
        height: 37,
    },
});
