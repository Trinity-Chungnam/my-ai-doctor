import { Stack } from 'expo-router';
import React from 'react';

import TabHeader from '../../../components/Header/TabHeader';

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '마이 AI 닥터',
                    header: TabHeader,
                }}
            />
        </Stack>
    );
}
