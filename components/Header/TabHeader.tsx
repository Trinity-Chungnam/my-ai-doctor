import {} from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { variant } from '../Text/token';

export default function TabHeader(props: any) {
    const { top } = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingTop: top + 7,
                paddingBottom: 7,
                backgroundColor: 'white',
                paddingHorizontal: 24,
            }}
        >
            <Text style={variant.heading1Bold}>{props.options.title}</Text>
        </View>
    );
}
