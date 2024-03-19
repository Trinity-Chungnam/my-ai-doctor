import { Stack } from 'expo-router';
import React from 'react';

import TabHeader from '../../../components/Header/TabHeader';

export default function TelemedicineLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '원격 진료',
                    header: TabHeader,
                }}
            />
        </Stack>
    );
}
