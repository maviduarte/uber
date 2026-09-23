import { View, Text, StyleSheet, Image } from "react-native"
import style from "@/constants/Colors"
import { ButtonHelp, ButtonPersonPhoto, ButtonReceipt } from "@/components/Button"

export default function InfoTravel() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informações da viagem</Text>
            <View style={styles.boxProblem}>
                <Text style={styles.txtProblem}>Está com algum problema com outro motorista parceiro?</Text>
                <View>
                    <ButtonHelp label="Peça ajuda" />
                </View>
            </View>
            <Image source={require("@/assets/images/map2.png")} style={styles.imageMap} />
            <View style={styles.boxPerson}>
                <Text style={styles.title}>Solicite uma viagem pelo UberX com Douglas</Text>
                <ButtonPersonPhoto />
            </View>
            <View style={{gap: 8}}>
                <Text style={styles.subtxt}>19 de set. 2:56PM</Text>
                <Text style={styles.subtxt}>R$ 8,51 - SMT23P4</Text>
            </View>
            <ButtonReceipt label="Recibo" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 22,
        paddingTop: 8,
        paddingBottom: 22,
        //marginTop: 40,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },

    boxProblem: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        backgroundColor: style.c4,
        borderRadius: 15,
        padding: 12,
        //gap: 14,
    },

    txtProblem: {
        fontSize: 14,
        marginRight: 80,
    },

    imageMap: {
        width: "100%",
        height: 180,
        borderRadius: 15,
    },

    boxPerson: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    subtxt: {
        fontSize: 18,
    },
}) 