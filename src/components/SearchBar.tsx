import {  StyleSheet, Text, TextInput, TextInputProps, View, TouchableOpacity, TouchableOpacityProps  } from "react-native"
import { Ionicons } from '@expo/vector-icons'

type ButtonLater = TouchableOpacityProps & { label: string }

export default function SearchBar({ label, ...rest}: ButtonLater & TextInputProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" style={styles.iconSearch} />
            <TextInput style={styles.input} {...rest} />
            <TouchableOpacity style={styles.btnLtr} activeOpacity={0.7} {...rest}>
                <Ionicons name="calendar" style={styles.iconCalendar} />
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
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

    btnLtr: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: "#5757572a",
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 8,
    },

    iconCalendar: {
        fontSize: 16,
    },

    label: {
        fontSize: 14,
    },
    
    iconSearch: {
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