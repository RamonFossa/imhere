import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    name: string;
    onDel: () => void;
}

export function Participant({ name, onDel }: Props) {

    return (
        <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.name}>
                 {name}
            </Text>
        </View>
            <TouchableOpacity style={styles.button} onPress={onDel}>
                <Text style={styles.buttonText}>
                        -
                </Text>
            </TouchableOpacity>
        </View>
    )
}