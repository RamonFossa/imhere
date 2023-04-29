import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);

    const [participantName, setParticipantName] = useState('');

    const handleParticipantAdd = () => {
        if(participantName.trim().length <= 1) {
            return Alert.alert('Escreva um nome de participante válido');
        }
        if(participants.includes(participantName)) {
            return Alert.alert('Participante existe', 'Já existe um participante com esse nome!');
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    const handleParticipantDel = (name: string) => {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(participants.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}> Nome do evento </Text>
            <Text style={styles.eventDate}> Sexta, 4 de Novembro de 2022 </Text>

            <View style={styles.formsContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    keyboardType='visible-password'
                    value={participantName}
                    onChangeText={setParticipantName}
                    autoCapitalize='characters'
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                        key={item}
                        name={item}
                        onDel={() => handleParticipantDel(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou aqui ainda? Adicione participantes a sua lista de presença
                    </Text>
                )}
            />
        </View>
    )
}