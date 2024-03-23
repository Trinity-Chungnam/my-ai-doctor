import dayjs from 'dayjs';

dayjs.locale('ko');

export const FAMILY_HEALTH_DATA = {
    혈당List: [85, 100, 70, 80, 70],
    심박수List: [120, 85, 70, 80, 110],
    card: {
        혈압: {
            source: require('../assets/images/blood_pressure.png'),
            value: '120/75',
            단위: 'mmHg',
            updatedAt: dayjs().subtract(1, 'day').subtract(1, 'hour').subtract(15, 'minute').subtract(40, 'second').format(),
        },
        체온: {
            source: require('../assets/images/temperature.png'),
            value: 36.6,
            단위: '℃',
            updatedAt: dayjs().subtract(1, 'day').subtract(5, 'hour').subtract(45, 'minute').subtract(40, 'second').format(),
        },
        산소포화도: {
            source: require('../assets/images/oxygen_saturation.png'),
            value: 90,
            단위: '%',
            updatedAt: dayjs().subtract(2, 'day').subtract(1, 'hour').subtract(15, 'minute').subtract(10, 'second').format(),
        },
        걸음수: {
            source: require('../assets/images/footsteps.png'),
            value: 12075,
            단위: '걸음',
            updatedAt: dayjs().subtract(1, 'day').subtract(3, 'hour').subtract(15, 'minute').subtract(10, 'second').format(),
        },
    },
};

export const MY_SCREEN_DATA = {
    fetchDate: dayjs().format('YYYY년 MM월 DD일 HH:mm 기준'),
    familyInfos: [
        { id: 1, name: '마이진', birthday: '2012년 5월 30일생' },
        { id: 2, name: '마할배', birthday: '1953년 12월 17일생' },
    ],
};
