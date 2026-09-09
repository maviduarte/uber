import { StyleSheet, View, Text } from "react-native"

import SearchBar from "@/components/SearchBar"
import { ButtonRecentAddress } from "@/components/Button"
import { ButtonArrow } from "@/components/Button"
import { ButtonForYou } from "@/components/Button"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.searchBar}>
                    <SearchBar placeholder="Para onde?" label="Mais tarde"/>
                </View>
                <View style={styles.recentAddress}>
                    <ButtonRecentAddress label="Avenida Atlântica, 67 - São Paulo" sublabel="São Paulo - SP, 08167-670" />
                    <ButtonRecentAddress label="Avenida Atlântica, 67 - São Paulo" sublabel="São Paulo - SP, 08167-670" />
                </View>
                <View style={styles.forYou}>
                    <Text style={styles.titleFY}>Para você</Text>
                    <ButtonArrow />
                    <View style={styles.boxButtons}>
                        <ButtonForYou image={require("@/assets/images/car.png")} />
                        <ButtonForYou image={require("@/assets/images/ifood.png")} />
                        <ButtonForYou image={require("@/assets/images/car.png")} />
                        <ButtonForYou image={require("@/assets/images/car.png")} />
                    </View>
                </View>
            </View>
        </View>
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

    searchBar: {
        //marginVertical: 20,
    },

    recentAddress: {
        //backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#7e7e7e9d",
        //padding: 10,
        //marginHorizontal: 10,
        //gap: 10,
    },

    forYou: {
        flexDirection: 'row',
        alignItems: 'center',
        //gap: 150,
    },

    titleFY: {
        fontSize: 20,
        fontWeight: 700,
    },

    boxButtons: {
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: "35%",
        gap: 10,
    },
})