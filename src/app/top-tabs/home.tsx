import { router } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from "react-native"
//import SearchBar from "@/components/SearchBar"
import { ButtonSearch, ButtonRecentAddress, ButtonArrow, ButtonForYou, ButtonMore, ButtonMostBtn } from "@/components/Button"
import style from "@/constants/Colors"
import line from "@/constants/Lines"

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={{ gap: 15 }}>
            <View style={styles.searchBar}>
              <ButtonSearch label="Para onde?" sublabel="Mais tarde" />
            </View>

            <View style={styles.recentAddress}>
              <ButtonRecentAddress label="Avenida Atlântica, 67 - São Paulo" sublabel="São Paulo - SP, 08167-670" />
              <View style={line.l1} />
              <ButtonRecentAddress label="Avenida Atlântica, 67 - São Paulo" sublabel="São Paulo - SP, 08167-670" />
            </View>
          </View>

          <View style={styles.forYou}>
            <Text style={styles.title} onPress={() => router.push("/options")}>Para você</Text>
            <ButtonArrow />
            <View style={styles.boxButtons}>
              <View style={styles.optionBtn}>
                <ButtonForYou image={require("@/assets/images/car.png")} onPress={() => router.push("/pages/travel")} />
                <Text>Viagem</Text>
              </View>
              <View style={styles.optionBtn}>
                <ButtonForYou image={require("@/assets/images/enviar-itens.png")} />
                <Text>Enviar itens</Text>
              </View>
              <View style={styles.optionBtn}>
                <ButtonForYou image={require("@/assets/images/reserve.png")} />
                <Text>Reserve</Text>
              </View>
              <View style={styles.optionBtn}>
                <ButtonForYou image={require("@/assets/images/ifood.png")} />
                <Text>iFood</Text>
              </View>
            </View>
          </View>

          <View style={{ gap: 20 }}>
            <View style={styles.boxMoreOp}>
              <Text style={styles.title}>Mais formas de usar o app</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                <ButtonMore image={require("@/assets/images/veiculos-eletricos.png")} label="Viaje com veículos elétricos" sublabel="Viaje em um veículo totalmente elétrico" />
                <ButtonMore image={require("@/assets/images/envie-item.png")} label="Envie um item" sublabel="Entrega sob demanda em toda a cidade" />
                <ButtonMore image={require("@/assets/images/confort-travel.png")} label="Viaje com conforto" sublabel="Os motoristas parceiros mais bem avaliados e os carros mais novos" />
                <ButtonMore image={require("@/assets/images/style-travel.png")} label="Viaje em grande estilo" sublabel="Viagens de alto nível em carros de luxo" />
                <ButtonMore image={require("@/assets/images/seguranca.png")} label="Recursos de segurança" sublabel="Recursos de segurança durante a viagem" />
              </ScrollView>
            </View>

            <View style={styles.boxMoreOp}>
              <Text style={styles.title}>Viaje de forma sustentável</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                <ButtonMore image={require("@/assets/images/uber-electric.png")} label="Experimente o Uber Eletric" sublabel="Viagens totalmente elétricas a preços acessíveis" />
                <ButtonMore image={require("@/assets/images/duas-rodas.png")} label="Viaje sobre 2 rodas" sublabel="Menos emissões de CO2, mais diversão" />
              </ScrollView>
            </View>

            <View style={styles.boxMoreOp}>
              <Text style={styles.title}>Eleve sua experiência</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                <ButtonMore image={require("@/assets/images/uber-black.png")} label="Viaje pelo Uber Black" sublabel="Viagens de luxo e motoristas parceiros com as melhores avaliações" />
                <ButtonMore image={require("@/assets/images/uber-comfort.png")} label="Viaje pelo Uber Comfort" sublabel="Veículos novos com muito mais espaço" />
              </ScrollView>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
              <ButtonMostBtn label="Economia de 15% em Envios Carro acabando!" sublabel="Agendar" image={require("@/assets/images/envios.png")} />
              <ButtonMostBtn label="Personalize seus recursos de segurança" sublabel="Configurar agora" image={require("@/assets/images/envios.png")} />
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.c,
    paddingBottom: 80,
  },

  boxContainer: {
    marginHorizontal: 15,
    gap: 20,
  },

  // SEARCH BAR
  searchBar: {
    paddingTop: 10,
  },

  // RECENT ADDRESS
  recentAddress: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: style.c1,
  },

  // FOR YOU
  forYou: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    //gap: 150,
  },

  boxMoreOp: {
    gap: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
  },

  boxButtons: {
    width: "100%",
    justifyContent: 'center',
    flexDirection: 'row',
    //flexWrap: 'wrap',
    marginTop: 16,
    gap: 15,
  },

  optionBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
})