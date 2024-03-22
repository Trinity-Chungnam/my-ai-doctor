import React from 'react';
import { Modal, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import SearchIcon from '../../assets/icons/search';
import { COLOR } from '../../tokens/color';
import Typo from '../Text/Typo';

type GoogleMapModalProps = {
    search: string;
    isOpen: boolean;
    onClose(): void;
    onChangeSearch(text: string): void;
    onSubmit(): void;
};

export default function GoogleMapModal({ isOpen, search, onChangeSearch, onClose, onSubmit }: GoogleMapModalProps) {
    return (
        <Modal visible={isOpen} transparent animationType="fade">
            <Pressable style={styles.wrapper} onPress={onClose}>
                <View style={styles.backdrop} />
                <View style={styles.screen}>
                    <Pressable>
                        <View style={styles.modalWrapper}>
                            <View style={styles.searchWrapper}>
                                <SearchIcon />
                                <TextInput style={{ flex: 1 }} value={search} onChangeText={onChangeSearch} />
                            </View>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: 34.850353,
                                    longitude: 126.441048,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}
                                provider={PROVIDER_GOOGLE}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: 34.850353,
                                        longitude: 126.441048,
                                    }}
                                    pinColor="#2D63E2"
                                    title="하이"
                                    description="테스트"
                                />
                            </MapView>
                            <View style={{ marginBottom: 35 }}>
                                <Typo variant="body1Medium" color="dark-grey-500" textAlign="center">
                                    예방접종은 가까운 병원만 선택 가능합니다
                                </Typo>
                            </View>
                            <TouchableOpacity style={styles.buttonWrapper} onPress={onSubmit}>
                                <Typo variant="title3Medium" color="white">
                                    확인
                                </Typo>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backdrop: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.4,
    },
    searchWrapper: {
        flexDirection: 'row',
        gap: 9,
        borderRadius: 14,
        borderWidth: 0.2,
        borderColor: COLOR.DARK_GREY[500],
        backgroundColor: COLOR.LIGHT_GREY[500],
        marginBottom: 24,
        paddingVertical: 13,
        paddingHorizontal: 10,
    },
    wrapper: {
        flex: 1,
    },
    modalWrapper: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 20,
    },
    map: {
        width: 300,
        height: 400,
        marginBottom: 24,
    },

    buttonWrapper: {
        paddingHorizontal: 34,
        paddingVertical: 7,
        backgroundColor: COLOR.BLUE[500],
        borderRadius: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
