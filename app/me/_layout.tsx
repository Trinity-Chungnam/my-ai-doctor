import { Stack } from 'expo-router';

export default function Monitoring() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' }, headerShown: false }}>
            <Stack.Screen name="family-health-data" options={{ headerShown: false }} />
        </Stack>
    );
}
