import { Stack } from 'expo-router';

import TabHeader from '../../components/Header/TabHeader';

export default function TelemedicineRoute() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="chronic-disease" options={{ headerBackVisible: true, title: '만성 질환', header: TabHeader }} />
            <Stack.Screen name="diagnosis" options={{ headerShown: false }} />
        </Stack>
    );
}
