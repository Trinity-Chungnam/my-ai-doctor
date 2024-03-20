import { Stack } from 'expo-router';
import React from 'react';

import TabHeader from '../../../components/Header/TabHeader';

export default function MonitoringLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen
                name="index"
                options={{
                    title: 'AI 모니터링',
                    header: TabHeader,
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    headerBackVisible: true,
                    title: 'AI 모니터링 상세',
                    header: TabHeader,
                }}
            />
        </Stack>
    );
}
