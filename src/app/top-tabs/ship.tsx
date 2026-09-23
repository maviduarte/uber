import { ScrollView, View, Text, StyleSheet, Image } from "react-native"
import { ButtonSearchEnv, ButtonSeRe, ButtonTravelOp, ButtonFloat, ButtonRequest } from "@/components/Button"
import { MaterialIcons } from "@expo/vector-icons"
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

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.boxButtons}>
              <View style={styles.boxBtn}>
                <ButtonFloat label="Enviar documentos" />
                <ButtonFloat label="Esqueceu um item?" />
                <ButtonFloat label="Retirada no Marketplace" />
              </View>
              <View style={styles.boxBtn}>
                <ButtonFloat label="Equipamentos para retirada de pedidos" />
                <ButtonFloat label="Entregar pedidos de usuários" />
                <ButtonFloat label="Entrega de doações" />
              </View>
              <View style={styles.boxBtn}>
                <ButtonFloat label="Receber suprimentos" />
                <ButtonFloat label="Envie um presente" />
                <ButtonFloat label="Pedidos online para retirada " />
              </View>
            </View>
          </ScrollView>

          <View style={styles.boxNeed}>
            <Text style={styles.title}>Entrega para necessidades pessoais e corporativas</Text>
            <View style={styles.boxChecks}>
              <View style={styles.boxCheck}>
                <MaterialIcons name="check" style={styles.iconCheck} />
                <Text style={styles.txt}>Rastreamento em tempo real e confirm...</Text>
              </View>
              <View style={styles.boxCheck}>
                <MaterialIcons name="check" style={styles.iconCheck} />
                <Text style={styles.txt}>Partidas instantâneas ou agendadas</Text>
              </View>
              <View style={styles.boxCheck}>
                <MaterialIcons name="check" style={styles.iconCheck} />
                <Text style={styles.txt}>Instruções detalhadas para entrega</Text>
              </View>
            </View>
            <ButtonRequest label="Solicitar um envio" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 80,
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

  boxButtons: {
    //flexDirection: 'row',
    gap: 8,
  },

  boxBtn: {
    flexDirection: 'row',
    gap: 8,
  },

  boxNeed: {
    backgroundColor: style.c4,
    borderRadius: 15,
    padding: 12,
    gap: 14,
  },

  boxChecks: {
    //marginTop: 8,
    gap: 6,
  },

  boxCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconCheck: {
    fontSize: 25,
  },

  txt: {
    fontSize: 16,
    fontWeight: 600,
  },
});