import { Stack } from "expo-router";

export default function Pages() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen
                name="travel"
                options={{
                    title: "Planje sua próxima viagem",
                }}
            />

            <Stack.Screen
                name="infoTravel"
                options={{
                    title: "",
                }}
            />
        </Stack>
    );
}