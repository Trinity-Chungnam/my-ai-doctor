export const MONITORING_DATA = {
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

export const MONITORING_DETAIL_DATA = {
    id: '123',
    dateString: '2024년 4월 5일',
    요약: {
        건강나이: {
            source: require('../assets/images/person.png'),
            value: '48세',
            description: '4세',
        },
        주의: {
            source: require('../assets/images/liver.png'),
            value: '간암',
            description: '가족력',
        },
        '연령대 평균': {
            source: require('../assets/images/graph.png'),
            value: '보통',
            description: '-6점',
        },
    },
    physicalHealth: '보통',
    bloodHealth: '나쁨',
    lungDisease: '보통',
    kidneyDisease: '위험',
    prostateDisease: '좋음',
    brainDisease: '보통',
};
