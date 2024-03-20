import { Stack } from 'expo-router';

import TabHeader from '../../components/Header/TabHeader';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

export default function Monitoring() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="[id]" options={{ headerBackVisible: true, title: 'AI 모니터링 상세', header: TabHeader }} />
            <Stack.Screen name="appointment-vaccination" options={{ headerShown: false }} />
        </Stack>
    );
}
