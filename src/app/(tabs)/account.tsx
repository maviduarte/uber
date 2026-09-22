import { ScrollView, View, Text, StyleSheet } from "react-native"
import { ButtonAssess, ButtonVerified, ButtonPersonPhoto, ButtonOptions, ButtonMoreOp } from "@/components/Button"

export default function Account() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <View style={styles.boxPerson}>
                        <Text style={styles.title}>Cleyton da Silva</Text>
                        <View style={styles.boxBtn}>
                            <ButtonAssess val={4.9} />
                            <ButtonVerified label="Verificado" />
                        </View>
                        <View style={styles.personPhoto}>
                            <ButtonPersonPhoto />
                        </View>
                    </View>
                    <View style={styles.boxOptions}>
                        <ButtonOptions label="Ajuda" />
                        <ButtonOptions label="Carteira" />
                        <ButtonOptions label="Segurança" />
                        <ButtonOptions label="Mensagens" />
                    </View>
                    <ButtonMoreOp label="Você tem várias promoções" sublabel="Aplicaremos automaticamente a promoção mais vantajosa" image={require("@/assets/images/promo.png")} />
                    <ButtonMoreOp label="Economize nas suas viagens" sublabel="Evite picos de preço. Experimente grátis o preço fixo." image={require("@/assets/images/promo.png")} />
                    <ButtonMoreOp label="Você tem várias promoções" sublabel="Aproveite as vantagens por 2 meses com 50% off" image={require("@/assets/images/promo.png")} />
                    <ButtonMoreOp label="Você tem várias promoções" sublabel="Saiba como fazer viagens mais seguras" image={require("@/assets/images/promo.png")} />
                    <ButtonMoreOp label="Redução estimada de CO2" sublabel="" image={require("@/assets/images/promo.png")} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 40,
    },
    
    boxContainer: {
        padding: 22,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },

    boxPerson: {
        flexDirection: 'column',
    },

    boxBtn: {
        marginTop: 6,
        flexDirection: 'row',
        gap: 8,
    },

    personPhoto: {
        position: 'absolute',
        //flexDirection: 'row',
        //marginTop: "6%",
        marginLeft: "82%",
    },

    boxOptions: {
        //width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    }
}) 