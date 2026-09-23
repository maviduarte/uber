// TabBar Bottom
import { Tabs } from "expo-router"
import { View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function AppTabs() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#444444',
            tabBarActiveBackgroundColor: '#81818142',
            animation: "fade",

            tabBarStyle: { 
                position: 'absolute',
                width: "70%",
                height: 55,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#7472728a",
                marginHorizontal: "15%",
                marginBottom: 20,
            },
            tabBarItemStyle: { 
                height: 55,
                //borderRadius: 55,
            },
        }}>
            <Tabs.Screen name="index"
                options={{
                    title: "Início",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'home-variant' : 'home-variant-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen name="options"
                options={{
                    //headerShown: false,
                    title: "Opções",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                        name='dots-grid'
                        size={24}
                        color={color}
                        />
                    ),
                }}
                />

            <Tabs.Screen name="activity"
                options={{
                    //headerShown: false,
                    title: "Atividade",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                        name={focused ? 'clipboard-text' : 'clipboard-text-outline'}
                        size={24}
                        color={color}
                        />
                    ),
                }}
                />

            <Tabs.Screen name="account"
                options={{
                    //headerShown: false,
                    title: "Conta",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'account' : 'account-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}