import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import HelpIcon from '../../../assets/icons/help';
import TelemedicineCard from '../../../components/Card/TelemedicineCard';
import HelperModal from '../../../components/Modal/HelperModal';
import Typo from '../../../components/Text/Typo';
import { COLOR } from '../../../tokens/color';

export default function TelemedicineScreen() {
    const [isOpenModal, setOpenModal] = useState(false);
    const router = useRouter();

    return (
        <>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => setOpenModal(true)}>
                    <View style={styles.helpWrapper}>
                        <View style={styles.helpIconSize} />
                        <Typo>도움이 필요하신가요?</Typo>
                        <HelpIcon />
                    </View>
                </TouchableOpacity>
                <View style={styles.cardWrapper}>
                    <TelemedicineCard
                        label="만성 질환"
                        color="brand-color"
                        borderColor="rgba(34, 70, 255, 0.20)"
                        onPress={() => {
                            router.push('/telemedicine/chronic-disease');
                        }}
                    />
                    <TelemedicineCard label="급성 질환" color="yellow-500" borderColor="rgba(255, 182, 0, 0.3)" />
                    <TelemedicineCard label="상담 및 기타" borderColor={COLOR.LIGHT_GREY[500]} />
                </View>
            </View>
            <HelperModal isOpen={isOpenModal} onClose={() => setOpenModal(false)} />
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    helpWrapper: {
        backgroundColor: COLOR.LIGHT_GREY[500],
        borderRadius: 14,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    helpIconSize: {
        width: 20,
    },
    cardWrapper: {
        marginTop: 28,
        gap: 28,
        width: '100%',
    },
});
