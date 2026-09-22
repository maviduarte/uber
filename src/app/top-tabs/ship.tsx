import { ScrollView, View, Text, StyleSheet, Image } from "react-native"
import { ButtonSearchEnv, ButtonSeRe, ButtonTravelOp } from "@/components/Button"
import style from "@/constants/Colors"
import line from "@/constants/Lines"

export default function Envios() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.searchBar}>
            <ButtonSearchEnv label="Entregar neste endereço?" />
          </View>

          <View>
            <Text style={styles.title}>Entrega sob demanda</Text>
            <Text>Entregadores parceiros rápidos e acessíveis</Text>
            <Image source={require("@/assets/images/motor.png")} style={styles.image} />
          </View>

          <View style={styles.boxSeRe}>
            <ButtonSeRe label="Enviar" />
            <View style={line.l1} />
            <ButtonSeRe label="Receber" />
          </View>

          <Text style={styles.title}>Economize uma viagem</Text>
          <View style={styles.boxTravel}>
            <ButtonTravelOp label="Retiradas na loja" sublabel="Receba suas compras onde você estiver" image={require("@/assets/images/envios.png")} />
            <ButtonTravelOp label="Envio Nacional" sublabel="Envie itens para todo o Brasil" image={require("@/assets/images/envios.png")} />
          </View>

          <Text style={styles.title}>Suas tarefas são concluídas rapidamente</Text>
        </View>
      </View>
    </ScrollView>
  );
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

  searchBar: {
    paddingTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    paddingRight: 100,
  },

  image: {
    position: 'absolute',
    width: 70,
    height: 70,
    marginLeft: "80%",
  },

  boxSeRe: {
    borderWidth: 1,
    borderColor: style.c1,
    borderRadius: 8,
  },

  boxTravel: {
    gap: 8,
  },
});