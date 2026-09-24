import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { ButtonOptionsBig, ButtonOptionsSmall } from "@/components/Button"
import style from "@/constants/Colors"

export default function Options() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Opções</Text>
            <Text style={styles.subtitle}>Vá para onde quiser, peça o que precisar</Text>

            <View style={styles.boxBtn}>
                <ButtonOptionsBig image={require("@/assets/images/car.png")} label="Viagem" onPress={() => router.push("/pages/travel")} />
                <ButtonOptionsBig image={require("@/assets/images/enviar-itens.png")} label="Enviar itens" />
                <ButtonOptionsBig image={require("@/assets/images/reserve.png")} label="Reserve" />
                <ButtonOptionsSmall image={require("@/assets/images/ifood.png")} label="iFood" />
                <ButtonOptionsSmall image={require("@/assets/images/motor.png")} label="Moto" onPress={() => router.push("/pages/travel")} />
                <ButtonOptionsSmall image={require("@/assets/images/teens.png")} label="Teens" />
                <ButtonOptionsSmall image={require("@/assets/images/seniors.png")} label="Seniors" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: style.c,
        padding: 22,
        paddingTop: 60,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },

    subtitle: {
        fontSize: 18,
        paddingRight: 70,
    },

    boxBtn: {
        width: "100%",
        //justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
}) 