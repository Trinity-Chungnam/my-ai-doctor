import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

export default function Monitoring() {
    return (
        <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
