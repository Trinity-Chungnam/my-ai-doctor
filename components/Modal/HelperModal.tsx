import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { COLOR } from '../../tokens/color';
import Typo from '../Text/Typo';

type HelperModalProps = {
    isOpen: boolean;
    onClose(): void;
};

export default function HelperModal({ isOpen, onClose }: HelperModalProps) {
    return (
        <Modal visible={isOpen} transparent animationType="fade">
            <Pressable style={styles.wrapper} onPress={onClose}>
                <View style={styles.backdrop} />
                <View style={styles.screen}>
                    <Pressable style={{ width: '100%', alignItems: 'center' }}>
                        <View style={styles.modalWrapper}>
                            <View style={{ width: '90%', gap: 40 }}>
                                <Typo variant="title1Bold">진료 과목 안내</Typo>
                                <View>
                                    <Typo variant="heading3Bold" color="brand-color">
                                        만성 질환
                                    </Typo>
                                    <Typo variant="body1">오래 지속된 질병. 차도가 늦은 질병.</Typo>
                                    <Typo variant="body4" color="dark-grey-500">
                                        ex) 관절염, 만성호흡기병, 비만, 심장병, 당뇨병, 위궤양
                                    </Typo>
                                </View>
                                <View>
                                    <Typo variant="heading3Bold" color="orange-500">
                                        급성 질환
                                    </Typo>
                                    <Typo variant="body1">발병 후 단기간만 지속되는 질병.</Typo>
                                    <Typo variant="body4" color="dark-grey-500">
                                        ex) 감기, 독감, 화상, 충수염, (급성)위장염, 요로감염, 수두
                                    </Typo>
                                </View>
                                <View>
                                    <Typo variant="heading3Bold" color="dark-grey-500">
                                        잘 모르겠다면
                                    </Typo>
                                    <Typo variant="body1">오래 지속된 질병. 차도가 늦은 질병.</Typo>
                                    <Typo variant="body4" color="dark-grey-500">
                                        ‘상담 및 기타’를 눌러주세요
                                    </Typo>
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
