import { ScrollView, View, Text, StyleSheet } from "react-native"
import { ButtonAssess, ButtonVerified, ButtonPersonPhoto, ButtonOptions, ButtonMoreOp, ButtonCO2, ButtonMostOp } from "@/components/Button"

export default function Account() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{gap: 6}}>
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
                </View>
                <ButtonMoreOp label="Você tem várias promoções" sublabel="Aplicaremos automaticamente a promoção mais vantajosa" image={require("@/assets/images/promo.png")} />
                <ButtonMoreOp label="Economize nas suas viagens" sublabel="Evite picos de preço. Experimente grátis o preço fixo." image={require("@/assets/images/promo.png")} />
                <ButtonMoreOp label="Você tem várias promoções" sublabel="Aproveite as vantagens por 2 meses com 50% off" image={require("@/assets/images/promo.png")} />
                <ButtonMoreOp label="Você tem várias promoções" sublabel="Saiba como fazer viagens mais seguras" image={require("@/assets/images/promo.png")} />
                <ButtonCO2 label="Redução estimada de CO2" sublabel="0 g" />

                <ButtonMostOp label="Família" sublabel="Gerencie contas para adolescentes, adultos e idosos" />
                <ButtonMostOp label="Configurações" sublabel="" />
                <ButtonMostOp label="Modo simples" sublabel="Um app simplificado para idosos" />
                <ButtonMostOp label="Enviar um presente" sublabel="" />
                <ButtonMostOp label="Contatos" sublabel="Gerencie todos os seus contatos no app do Uber" />
                <ButtonMostOp label="Ganhe dinheiro dirigindo ou fazendo entregas" sublabel="" />
                <ButtonMostOp label="Grupos salvos" sublabel="" />
                <ButtonMostOp label="Crie seu perfil corporativo" sublabel="Automatize as despesas com viagens a trabalho e pedidos" />
                <ButtonMostOp label="Uber para Empresas" sublabel="" />
                <ButtonMostOp label="Vantagens de parceiros" sublabel="" />
                <ButtonMostOp label="Indique amigos e desbloqueie ofertas" sublabel="" />
                <ButtonMostOp label="Gerenciar conta da Uber" sublabel="" />
                <ButtonMostOp label="Jurídico" sublabel="" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 60,
        paddingBottom: 80,
        padding: 22,
        gap: 14,
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
        gap: 6,
    }
}) 