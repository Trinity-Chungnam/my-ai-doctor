import { Stack } from 'expo-router';

import TabHeader from '../../../components/Header/TabHeader';

export default function Monitoring() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="[id]" options={{ header: TabHeader, title: '가족 건강 데이터', headerBackVisible: true }} />
        </Stack>
    );
}
