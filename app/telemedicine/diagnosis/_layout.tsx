import { Stack } from 'expo-router';

export default function DiagnosisRoute() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
        </Stack>
    );
}
