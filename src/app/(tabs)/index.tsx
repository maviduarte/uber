import { ScrollView, StyleSheet, View, Text } from "react-native"

import SearchBar from "@/components/SearchBar"
import { ButtonRecentAddress } from "@/components/Button"
import { ButtonArrow } from "@/components/Button"
import { ButtonForYou } from "@/components/Button"
import { ButtonMore } from "@/components/Button"
import { ButtonMost } from "@/components/Button"

export default function Index() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <View style={styles.searchBar}>
                        <SearchBar placeholder="Para onde?" label="Mais tarde"/>
                    </View>
                    
                    <View style={styles.recentAddress}>
                        <ButtonRecentAddress label="Avenida Atlântica, 67 - São Paulo" sublabel="São Paulo - SP, 08167-670" />
                        <View style={styles.line} />
                        <ButtonRecentAddress label="Avenida Atlântica, 67 - São Paulo" sublabel="São Paulo - SP, 08167-670" />
                    </View>

                    <View style={styles.forYou}>
                        <Text style={styles.title}>Para você</Text>
                        <ButtonArrow />
                        <View style={styles.boxButtons}>
                            <View style={styles.optionBtn}>
                                <ButtonForYou image={require("@/assets/images/car.png")} />
                                <Text>Viagem</Text>
                            </View>
                            <View style={styles.optionBtn}>
                                <ButtonForYou image={require("@/assets/images/ifood.png")} />
                                <Text>iFood</Text>
                            </View>
                            <View style={styles.optionBtn}>
                                <ButtonForYou image={require("@/assets/images/reserve.png")} />
                                <Text>Reserve</Text>
                            </View>
                            <View style={styles.optionBtn}>
                                <ButtonForYou image={require("@/assets/images/enviar-itens.png")} />
                                <Text>Enviar itens</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.more}>
                        <Text style={styles.title}>Viaje de forma sustentável</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                                <ButtonMore image={require("@/assets/images/uber-electric.png")} label="Experimente o Uber Eletric" sublabel="Viagens totalmente elétricas a preços acessíveis" />
                                <ButtonMore image={require("@/assets/images/duas-rodas.png")} label="Viaje sobre 2 rodas" sublabel="Menos emissões de CO2, mais diversão" />
                        </ScrollView>
                        <Text style={styles.title}>Mais formas de usar o app</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                            <ButtonMore image={require("@/assets/images/veiculos-eletricos.png")} label="Viaje com veículos elétricos" sublabel="Viaje em um veículo totalmente elétrico" />
                            <ButtonMore image={require("@/assets/images/seguranca.png")} label="Recursos de segurança" sublabel="Recursos de segurança durante a viagem" />
                            <ButtonMore image={require("@/assets/images/uber-electric.png")} label="Viaje com conforto" sublabel="Os motoristas parceiros mais bem avaliados e os carros mais novos" />
                            <ButtonMore image={require("@/assets/images/uber-electric.png")} label="Viaje em grande estilo" sublabel="Viagens de alto nível em carros de luxo" />
                            <ButtonMore image={require("@/assets/images/uber-electric.png")} label="Envie um item" sublabel="Entrega sob demanda em toda a cidade" />
                        </ScrollView>
                        
                        <Text style={styles.title}>Eleve sua experiência</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                            <ButtonMore image={require("@/assets/images/uber-black.png")} label="Viaje pelo Uber Black" sublabel="Viagens de luxo e motoristas parceiros com as melhores avaliações" />
                            <ButtonMore image={require("@/assets/images/uber-comfort.png")} label="Viaje pelo Uber Comfort" sublabel="Veículos novos com muito mais espaço" />
                        </ScrollView>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                            
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    
    boxContainer: {
        marginHorizontal: 15,
        gap: 20,
    },

    // SEARCH BAR
    searchBar: {
        //marginVertical: 20,
    },

    // RECENT ADDRESS
    recentAddress: {
        //backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#7e7e7e9d",
        //padding: 10,
        //marginHorizontal: 10,
        //gap: 10,
    },

    line: {
        height: 1,
        backgroundColor: "#7e7e7e9d",
        width: "86%",
        marginLeft: "14%",
    },

    // FOR YOU
    forYou: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        //gap: 150,
    },

    title: {
        fontSize: 20,
        fontWeight: 700,
    },

    boxButtons: {
        //position: 'absolute',
        flexDirection: 'row',
        //flexWrap: 'wrap',
        marginTop: 20,
        gap: 15,
    },

    optionBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },

    // MORE
    more: {
        gap: 10,
    },
})