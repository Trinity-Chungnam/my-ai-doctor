import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

export default function RootLayout() {
    const [isLoadedFont, setIsLoadedFont] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            'Pretendard-Black': require('../assets/font/Pretendard-Black.ttf'),
            'Pretendard-Bold': require('../assets/font/Pretendard-Bold.ttf'),
            'Pretendard-ExtraBold': require('../assets/font/Pretendard-ExtraBold.ttf'),
            'Pretendard-ExtraLight': require('../assets/font/Pretendard-ExtraLight.ttf'),
            'Pretendard-Light': require('../assets/font/Pretendard-Light.ttf'),
            'Pretendard-Medium': require('../assets/font/Pretendard-Medium.ttf'),
            'Pretendard-Regular': require('../assets/font/Pretendard-Regular.ttf'),
            'Pretendard-SemiBold': require('../assets/font/Pretendard-SemiBold.ttf'),
            'Pretendard-Thin': require('../assets/font/Pretendard-Thin.ttf'),
        }).then(() => {
            setIsLoadedFont(true);
        });
    }, []);

    if (!isLoadedFont) {
        return null;
    }

    return (
        <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
