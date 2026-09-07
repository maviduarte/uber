import { StyleSheet, View, Text } from "react-native"

import SearchBar from "@/components/SearchBar"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar placeholder="Para onde?" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    searchBar: {
        marginHorizontal: 10,
        marginVertical: 20,
    },
})