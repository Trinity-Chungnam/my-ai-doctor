import {} from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowBackIcon from '../../assets/icons/arrow_back_ios';
import { variant } from '../Text/token';

export default function TabHeader(props: any) {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[{ paddingTop: top + styles.wrapper.paddingBottom }, styles.wrapper]}>
            {props.options.headerBackVisible ? (
                <TouchableOpacity
                    onPress={() => {
                        if (props.navigation.canGoBack()) {
                            props.navigation.goBack();
                        }
                    }}
                >
                    <ArrowBackIcon />
                </TouchableOpacity>
            ) : null}
            <Text style={variant.heading1Bold}>{props.options.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 7,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
});