import { View, Text, StyleSheet } from "react-native"

import { ButtonOptionsBig } from "@/components/Button"
import { ButtonOptionsSmall } from "@/components/Button"

export default function Options() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Opções</Text>
            <Text style={styles.subtitle}>Vá para onde quiser, peça o que precisar</Text>

            <View style={styles.boxBtn}>
                <ButtonOptionsBig image={require("@/assets/images/car.png")} label="Viagem" />
                <ButtonOptionsBig image={require("@/assets/images/ifood.png")} label="iFood" />
                <ButtonOptionsBig image={require("@/assets/images/reserve.png")} label="Reserve" />
                <ButtonOptionsSmall image={require("@/assets/images/enviar-itens.png")} label="Enviar itens" />
                <ButtonOptionsSmall image={require("@/assets/images/teens.png")} label="Teens" />
                <ButtonOptionsSmall image={require("@/assets/images/motor.png")} label="Moto" />
                <ButtonOptionsSmall image={require("@/assets/images/seniors.png")} label="Seniors" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 22,
        marginTop: 40,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },

    subtitle: {
        fontSize: 18,
        marginRight: 50,
    },

    boxBtn: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        //justifyContent: 'center',
    },
}) 