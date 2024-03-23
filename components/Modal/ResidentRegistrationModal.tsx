import React from 'react';
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';

import CheckCircle from '../../assets/icons/check_circle';
import { COLOR } from '../../tokens/color';
import Typo from '../Text/Typo';

type ResidentRegistrationModalProps = {
    isOpen: boolean;
    onClose(): void;
    onSubmit(): void;
};

export default function ResidentRegistrationModal({ isOpen, onClose, onSubmit }: ResidentRegistrationModalProps) {
    return (
        <Modal visible={isOpen} transparent animationType="fade">
            <Pressable style={styles.wrapper} onPress={onClose}>
                <View style={styles.backdrop} />
                <View style={styles.screen}>
                    <Pressable style={{ width: '100%', alignItems: 'center' }}>
                        <View style={styles.modalWrapper}>
                            <View style={{ width: '90%', alignItems: 'center' }}>
                                <View style={{ marginBottom: 6 }}>
                                    <CheckCircle />
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Typo variant="body1Medium" color="dark-grey-500">
                                        예약 확정 완료
                                    </Typo>
                                </View>
                                <View style={{ marginBottom: 66 }}>
                                    <Typo variant="heading3Semibold">리마인더에 등록하시겠습니까?</Typo>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 30 }}>
                                    <TouchableOpacity onPress={onSubmit}>
                                        <View
                                            style={{
                                                width: 110,
                                                height: 40,
                                                backgroundColor: COLOR.LIGHT_GREY[500],
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 14,
                                            }}
                                        >
                                            <Typo>예</Typo>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={onClose}>
                                        <View
                                            style={{
                                                width: 110,
                                                height: 40,
                                                backgroundColor: COLOR.LIGHT_GREY[500],
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 14,
                                            }}
                                        >
                                            <Typo>아니요</Typo>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        width: '100%',
    },
    modalWrapper: {
        alignItems: 'center',
        width: '90%',
        borderRadius: 20,
        backgroundColor: 'white',
        paddingVertical: 24,
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
