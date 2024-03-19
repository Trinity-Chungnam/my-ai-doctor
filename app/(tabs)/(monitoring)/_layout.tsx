import { Stack } from 'expo-router';
import React from 'react';

export default function MonitoringLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="index" options={{ title: 'AI 모니터링' }} />
        </Stack>
    );
}
