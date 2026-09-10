import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image, ImageSourcePropType } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

type ButtonRecentAddressProps = TouchableOpacityProps & { label: string, sublabel: string }
type ButtonArrowProps = TouchableOpacityProps
type ButtonForYouProps = TouchableOpacityProps & { image: ImageSourcePropType }
type ButtonMoreProps = TouchableOpacityProps & { label: string, sublabel: string, image: ImageSourcePropType }
type ButtonOptionsProps = TouchableOpacityProps & { label: string, image: ImageSourcePropType }
type ButtonActivityProps = TouchableOpacityProps & { label: string, sublabel: string, val: number, image: ImageSourcePropType }

// Index Buttons
export function ButtonRecentAddress({ label, sublabel, ...rest }: ButtonRecentAddressProps) {
    return (
        <TouchableOpacity style={styles.btnRecAdd} activeOpacity={0.7} {...rest}>
            <MaterialIcons name="access-time" style={styles.iconClock} />
            <Text style={[styles.labelAdd, { fontWeight: 700 }]}>{label}</Text>
            <Text style={styles.labelAdd}>{sublabel}</Text>
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

export function ButtonMore({ label, sublabel, image, ...rest }: ButtonMoreProps) {
    return (
        <TouchableOpacity style={styles.btnMore} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageMore} />
            <Text style={styles.labelMore}>{label}</Text>
            <Text style={styles.sublabelMore}>{sublabel}</Text>
        </TouchableOpacity>
    )
}

export function ButtonMost({ label, image, ...rest }: ButtonOptionsProps) {
    return (
            <TouchableOpacity style={styles.btnMost} activeOpacity={0.7} {...rest}>
                <Text style={styles.labelMost}>{label}</Text>
                <Image source={image} style={styles.imageMost} />
            </TouchableOpacity>
    )
}

// Options Buttons
export function ButtonOptionsBig({ label, image, ...rest }: ButtonOptionsProps) {
    return (
        <TouchableOpacity style={styles.btnOpB} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />
            <Text style={styles.labelOptions}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonOptionsSmall({ label, image, ...rest }: ButtonOptionsProps) {
    return (
        <TouchableOpacity style={styles.btnOpS} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />
            <Text style={styles.labelOptions}>{label}</Text>
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
// Index
    // Recent Address Button
    btnRecAdd: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#5050502c",
        borderRadius: 5,
    },

    iconClock: {
        position: 'absolute',
        fontSize: 15,
        backgroundColor: "#5050502c",
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
    
    labelAdd: {
        fontSize: 15,
        marginLeft: 45,
    },

    iconKeyArrow: {
        position: 'absolute',
        fontSize: 16,
        marginLeft: "95%",
    },

    // Arrow Button
    btnArrow: {
        backgroundColor: "#5050502c",
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

    // More Button
    btnMore: {
        width: 250,
        backgroundColor: "#5050502c",
        borderRadius: 15,
        paddingBottom: 10,
    },
    
    imageMore: {
        width: 250,
        height: 140,
        borderRadius: 15,
    },

    labelMore: {
        paddingTop: 8,
        fontSize: 16,
        fontWeight: 600,
    },

    sublabelMore: {

    },

    // Most Button
    btnMost: {

    },

    labelMost: {

    },

    imageMost: {

    },

// Options
    btnOpB: {
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

    labelOptions: {
        color: 'black',
        fontSize: 14,
        fontWeight: 600,
    },

    btnOpS: {
        width: "22%",
        height: 100,
        backgroundColor: "#5050501f",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        gap: 8,
    },

// Activity
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