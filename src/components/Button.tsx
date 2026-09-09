import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image, ImageSourcePropType } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

type ButtonRecentAddressProps = TouchableOpacityProps & { label: string, sublabel: string }
type ButtonArrowProps = TouchableOpacityProps
type ButtonForYouProps = TouchableOpacityProps & { image: ImageSourcePropType }
type ButtonOptionsProps = TouchableOpacityProps & { label: string, image: ImageSourcePropType }
type ButtonActivityProps = TouchableOpacityProps & { label: string, sublabel: string, val: number, image: ImageSourcePropType }

// Index Buttons
export function ButtonRecentAddress({ label, sublabel, ...rest }: ButtonRecentAddressProps) {
    return (
        <TouchableOpacity style={styles.btnRecAdd} activeOpacity={0.7} {...rest}>
            <MaterialIcons name="access-time" style={styles.iconClock} />
            <Text style={[styles.labelAdd, { fontWeight: 700 }]}>{label}</Text>
            <Text style={[styles.labelAdd, { marginLeft: 45 }]}>{sublabel}</Text>
            <MaterialIcons name="keyboard-arrow-right" style={styles.iconKeyArrow} />
        </TouchableOpacity>
    )
}

export function ButtonArrow({ ...rest }: ButtonArrowProps) {
    return (
        <TouchableOpacity style={styles.btnArrow} activeOpacity={0.7} {...rest}>
            <Link href="/options">
                <MaterialIcons name="arrow-forward" style={styles.iconArrow} />
            </Link>
        </TouchableOpacity>
    )
}

export function ButtonForYou({ image, ...rest }: ButtonForYouProps) {
    return (
        <TouchableOpacity style={styles.btnFY} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />  
        </TouchableOpacity>
    )
}

// Options Buttons
export function ButtonOptions({ label, image, ...rest }: ButtonOptionsProps) {
    return (
        <TouchableOpacity style={styles.btnOp} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}


// Activity Buttons
export function ButtonActivity({ label, sublabel, val, image, ...rest }: ButtonActivityProps) {
    return (
        <TouchableOpacity style={styles.btnAct} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageMap} />
            <Text style={styles.labelAddress}>{label}</Text>
            <Text style={styles.labelDate}>{sublabel}</Text>
            <Text style={styles.labelMoney}>{val}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // Recent Address Button
    btnRecAdd: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#5252522c",
        borderRadius: 5,
    },

    iconClock: {
        fontSize: 15,
        backgroundColor: "#8a8a8a42",
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },

    labelAdd: {
        fontSize: 15,
    },

    iconKeyArrow: {
        fontSize: 16,
        marginLeft: "25%",
    },

    // Arrow Button
    btnArrow: {
        backgroundColor: "#80808060",
        padding: 6,
        borderRadius: 50,
        marginLeft: "65%",
    },

    iconArrow: {
        fontSize: 20,
    },

    // ForYou Button
    btnFY: {
        backgroundColor: "#5050502c",
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 50,
    },

    // Options Button
    btnOp: {
        width: "30%",
        height: 100,
        backgroundColor: "#5050501f",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        gap: 8,
    },

    imageIcons: {
        width: 60,
        height: 50,
    },

    label: {
        color: 'black',
        fontSize: 14,
        fontWeight: 600,
    },

    // Activity Button
    btnAct: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        backgroundColor: "#5050501c",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#cecece",
        gap: 8,
        padding: 15,
    },

    imageMap: {
        width: "100%",
        height: 180,
        borderRadius: 8,
    },

    labelAddress: {
        fontSize: 20,
        fontWeight: 700,
    },

    labelDate: {

    },

    labelMoney: {

    },
})