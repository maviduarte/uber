import { View, Text, StyleSheet, Image } from "react-native"
import { createMaterialTopTabNavigator } from "expo-router/js-top-tabs"
import style from "@/constants/Colors"
//import { Ionicons } from "@expo/vector-icons"
import HomeTop from "../top-tabs/home"
import EnviosTop from "../top-tabs/ship"
import IFoodTop from "../top-tabs/iFood"

const Tab = createMaterialTopTabNavigator();

export default function Index() {
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: style.c0,
                tabBarInactiveTintColor: style.c1,

                tabBarStyle: {
                    paddingTop: 50,
                },

                tabBarIndicatorStyle: {
                    backgroundColor: style.c0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    width: "60%",
                    height: 4,
                    borderRadius: 50,
                },
            }}
        >
            <Tab.Screen name="Uber" component={HomeTop}
                options={{
                    tabBarLabel: ({ color }) => (
                        <View style={styles.tabLabel}>
                            {/*
                            <Ionicons
                                name="car-sport-sharp"
                                size={24}
                                color={color}
                            />
                            */}
                            <Image
                                source={require("@/assets/images/car.png")}
                                style={styles.tabImage}
                            />

                            <Text style={[styles.tabText, { color }]}>
                                Uber
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Envios" component={EnviosTop}
                options={{
                    tabBarLabel: ({ color }) => (
                        <View style={styles.tabLabel}>
                            {/*
                            <Ionicons
                                name="briefcase-sharp"
                                size={24}
                                color={color}
                            />
                            */}
                            <Image
                                source={require("@/assets/images/envios.png")}
                                style={styles.tabImage}
                            />

                            <Text style={[styles.tabText, { color }]}>
                                Envios
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="iFood" component={IFoodTop}
                options={{
                    tabBarLabel: ({ color }) => (
                        <View style={styles.tabLabel}>
                            {/*
                            <Ionicons
                                name="bag-handle-sharp"
                                size={24}
                                color={color}
                            />
                            */}
                            <Image
                                source={require("@/assets/images/ifood.png")}
                                style={styles.tabImage}
                            />

                            <Text style={[styles.tabText, { color }]}>
                                iFood
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    tabLabel: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    tabImage: {
        width: 35,
        height: 35,
        resizeMode: "contain",
    },

    tabText: {
        fontSize: 16,
        fontWeight: "700",
    },
})