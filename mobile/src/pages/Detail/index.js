import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute }  from '@react-navigation/native';
import { View, Text, Image, Touchableopacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message =  `Olá ${incident.name}, eustou entrando em contato pois gostaria de ajudar no caso"${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}"`

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject:`Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <Touchableopacity onPress={navigateBack} >
                    <Feather name="arrow-left" size={28} color ="#E82041"/>
                </Touchableopacity>
            </View>
            <View style={styles.incident}>
                <Text style={ [styles.incidentProperty, {marginTop: 0 }] }>ONG:</Text>
                <Text style={styles.incidentValue}>`{incident.name} de {incident.city}/{incident.uf}`</Text>

                <Text style={ styles.incidentProperty }>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={ styles.incidentProperty }>VALOR:</Text>
                <Text style={styles.incidentValue}> <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text></Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text sytle={styles.heroDescription}>Entre em contato.</Text>

                <View style={style.actions}>
                    <Touchableopacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </Touchableopacity>

                    <Touchableopacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </Touchableopacity>
                </View>
            </View>

        </View>
    )
};
