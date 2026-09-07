import {  StyleSheet, TextInput, TextInputProps, View  } from "react-native"
import { Ionicons } from '@expo/vector-icons'

export default function SearchBar({...rest}: TextInputProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" style={styles.icon} />
            <TextInput style={styles.input} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#8f8f8f2c" ,
        borderWidth: 1,
        borderColor: "#bebebe",
        borderRadius: 50,
        paddingHorizontal: 12,
        gap: 10,
    },
    
    icon: {
        fontSize: 22,
        padding: 8,
        color: "#5e5e5e"
    },
    
    input: {
        flex: 1,
        fontSize: 17,
        fontWeight: 500,
    },
})