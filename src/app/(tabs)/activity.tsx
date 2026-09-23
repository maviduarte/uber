import { ScrollView, StyleSheet, Text, View } from "react-native"
import { ButtonFilter, ButtonActivity, ButtonPrevious } from "@/components/Button"
import line from "@/constants/Lines"

export default function Activity() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Atividade</Text>
                <View style={styles.boxOp}>
                    <Text style={styles.subtitle}>Anteriores</Text>
                    <ButtonFilter />
                </View>
                <ButtonActivity image={require("@/assets/images/map.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbassess="Avaliar" lbres="Reagendar" />
                <ButtonPrevious image={require("@/assets/images/car.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbres="Reagendar" />
                <View style={line.l2} />
                <ButtonPrevious image={require("@/assets/images/car.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbres="Reagendar" />
                <View style={line.l2} />
                <ButtonPrevious image={require("@/assets/images/car.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbres="Reagendar" />
                <View style={line.l2} />
                <ButtonPrevious image={require("@/assets/images/car.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbres="Reagendar" />
                <View style={line.l2} />
                <ButtonPrevious image={require("@/assets/images/car.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbres="Reagendar" />
                <View style={line.l2} />
                <ButtonPrevious image={require("@/assets/images/car.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} lbres="Reagendar" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 22,
        paddingTop: 60,
        paddingBottom: 80,
        gap: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },

    subtitle: {
        fontSize: 20,
        fontWeight: 600,
    },

    boxOp: {
        flexDirection: "row",
    },
})