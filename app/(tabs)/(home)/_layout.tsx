import { Stack } from 'expo-router';
import React from 'react';

import { variant } from '../../../components/Text/token';

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' }, headerTitleAlign: 'left' }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '마이 AI 닥터',
                    headerTitleAlign: 'left',
                    headerTitleStyle: variant.heading1Bold,
                }}
            />
        </Stack>
    );
}
