import { View, Text, StyleSheet } from "react-native"

import { ButtonOptions } from "@/components/Button"

export default function Options() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Opções</Text>
            <Text style={styles.subtitle}>Vá para onde quiser, peça o que precisar</Text>

            <View style={styles.boxBtn}>
                <ButtonOptions image={require("@/assets/images/car.png")} label="Viagem" />
                <ButtonOptions image={require("@/assets/images/ifood.png")} label="iFood" />
                <ButtonOptions image={require("@/assets/images/enviar-itens.png")} label="Enviar itens" />
                <ButtonOptions image={require("@/assets/images/car.png")} label="Reserve" />
                <ButtonOptions image={require("@/assets/images/car.png")} label="Moto" />
                <ButtonOptions image={require("@/assets/images/car.png")} label="Seniors" />
                <ButtonOptions image={require("@/assets/images/car.png")} label="Teens" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 22,
        marginVertical: 20,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },

    subtitle: {
        fontSize: 18,
    },

    boxBtn: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        //justifyContent: 'center',
    },
}) 