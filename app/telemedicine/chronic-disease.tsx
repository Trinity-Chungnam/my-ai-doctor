import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ChronicCard from '../../components/Card/ChronicCard';
import ScrollViewWrapper from '../../components/ScrollViewWrapper';
import Typo from '../../components/Text/Typo';
import { COLOR } from '../../tokens/color';

export default function ChronicDisease() {
    const router = useRouter();
    const data = {
        최근진료: {
            date: '2024년 2월 25일',
            병명: '고혈압',
            진료기관: '남악복음내과의원',
        },
        과거진료Array: [
            {
                date: '2023년 12월 18일',
                병명: '고지혈증',
                진료기관: '남악온누리내과의원',
            },
            {
                date: '2023년 4월 17일',
                병명: '당뇨병',
                진료기관: '남악복음내과의원',
            },
        ],
    };

    const navigateDiagnosis = (병명: string) => {
        router.push(`/telemedicine/diagnosis/${병명}`);
    };

    return (
        <ScrollViewWrapper contentContainerStyle={styles.wrapper}>
            <View style={styles.cardWrapper}>
                <TouchableOpacity onPress={() => navigateDiagnosis(data.최근진료.병명)}>
                    <ChronicCard
                        title="최근진료"
                        date={data.최근진료.date}
                        병명={data.최근진료.병명}
                        진료기관={data.최근진료.진료기관}
                    />
                </TouchableOpacity>
                {data.과거진료Array.map(({ date, 병명, 진료기관 }) => (
                    <TouchableOpacity key={date} onPress={() => navigateDiagnosis(병명)}>
                        <ChronicCard title="과거 진료" date={date} 병명={병명} 진료기관={진료기관} />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.descriptionWrapper}>
                <Typo variant="body1Medium">해당하지 않는다면? 만성 질환은 진료코드로 분류됩니다</Typo>
            </View>
        </ScrollViewWrapper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    cardWrapper: {
        gap: 24,
        marginBottom: 26,
    },
    descriptionWrapper: {
        padding: 20,
        backgroundColor: COLOR.LIGHT_GREY[500],
        borderRadius: 14,
    },
});
