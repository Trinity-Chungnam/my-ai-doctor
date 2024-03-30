import { ResizeMode, Video } from 'expo-av';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenWrapper from '../../../components/ScreenWrapper';
import Typo from '../../../components/Text/Typo';
import { COLOR } from '../../../tokens/color';

export default function DiagnosisPage() {
    const videoRef = useRef(null);
    const { top, bottom } = useSafeAreaInsets();

    const fetch = () => {
        return {
            name: '도재학',
            직업: '의사',
            지역: '전남 무안',
            병원이름: '희망병원',
        };
    };

    const data = fetch();

    return (
        <ScreenWrapper>
            <Video
                ref={videoRef}
                style={[styles.fullScreen, { top }]}
                source={require('../../../assets/videos/doctor_man.mp4')}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                isLooping={false}
            />
            <View style={[styles.infoWrapper, { bottom }]}>
                <View style={styles.infoContainer}>
                    <Typo variant="heading1Semibold" color="white">
                        {data.name}
                    </Typo>
                    <Typo variant="body1Semibold" color="white">
                        {data.직업}
                    </Typo>
                </View>
                <View style={styles.infoContainer}>
                    <Typo variant="body1Semibold" color="white">
                        {data.지역}
                    </Typo>
                    <Typo variant="heading1Semibold" color="white">
                        {data.병원이름}
                    </Typo>
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    },
    infoWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: 40,
        paddingVertical: 24,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: COLOR.BLUE[500],
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
});
