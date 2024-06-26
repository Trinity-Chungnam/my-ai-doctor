import { Stack } from 'expo-router';
import React from 'react';

import SettingIcon from '../../../assets/icons/setting';
import TabHeader from '../../../components/Header/TabHeader';

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '마이페이지',
                    header: TabHeader,
                    headerRight() {
                        return <SettingIcon />;
                    },
                }}
            />
        </Stack>
    );
}
