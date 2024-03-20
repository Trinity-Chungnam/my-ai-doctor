import { Stack } from 'expo-router';

import TabHeader from '../../../components/Header/TabHeader';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

export default function AppointmentVaccination() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="[hospital]" options={{ title: '예방접종 예약', header: TabHeader }} />
        </Stack>
    );
}
