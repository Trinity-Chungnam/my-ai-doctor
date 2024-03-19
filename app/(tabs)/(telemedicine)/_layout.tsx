import { Stack } from 'expo-router';
import React from 'react';

export default function TelemedicineLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="index" options={{ title: '원격 진료' }} />
        </Stack>
    );
}
