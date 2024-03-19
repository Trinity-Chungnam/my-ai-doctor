import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AccountCircle from '../../assets/icons/account_circle';
import { AddToQueueIcon } from '../../assets/icons/add_to_queue';
import EcgHeartIcon from '../../assets/icons/ecg_heart';
import HomeIcon from '../../assets/icons/home';
import { COLOR } from '../../src/tokens/color';

export const unstable_settings = {
    initialRouteName: '(home)',
};

export default function TabLayout() {
    const { bottom } = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    height: 56 + bottom,
                },
                headerTitleStyle: {
                    fontSize: 12,
                    lineHeight: 22,
                    letterSpacing: 0,
                },
                tabBarActiveTintColor: COLOR.BLUE[500],
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="(home)"
                options={{
                    title: '홈',
                    tabBarIcon: ({ color }) => <HomeIcon stroke={color} />,
                }}
            />
            <Tabs.Screen
                name="(telemedicine)"
                options={{
                    title: '원격진료',
                    tabBarIcon: ({ color }) => <AddToQueueIcon fill={color} />,
                }}
            />
            <Tabs.Screen
                name="(monitoring)"
                options={{
                    title: 'AI 모니터링',
                    tabBarIcon: ({ color }) => <EcgHeartIcon fill={color} />,
                }}
            />
            <Tabs.Screen
                name="(me)"
                options={{
                    title: '마이페이지',
                    tabBarIcon: ({ color }) => <AccountCircle fill={color} />,
                }}
            />
        </Tabs>
    );
}
