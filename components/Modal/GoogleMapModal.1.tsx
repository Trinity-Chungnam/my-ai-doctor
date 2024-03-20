import React from 'react';
import { Button, Modal, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GoogleMapModalProps, styles } from './GoogleMapModal';

export default function GoogleMapModal({ isOpen, onClose }: GoogleMapModalProps) {
    return (
        <Modal visible={isOpen} transparent>
            <Button onPress={onClose}>
                <View style={{ backgroundColor: 'black', opacity: 0.4, width: '100%', height: '100%', position: 'absolute' }} />
            </Button>
            <View style={styles.screen}>
                <View style={styles.wrapper}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37,
                            longitude: 126,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                        provider={PROVIDER_GOOGLE}
                    />
                </View>
            </View>
        </Modal>
    );
}
