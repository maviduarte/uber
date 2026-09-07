import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image, ImageSourcePropType } from "react-native"

type ButtonOptionsProps = TouchableOpacityProps & { label: string, image: ImageSourcePropType }
type ButtonActivityProps = TouchableOpacityProps & { label: string, sublabel: string, val: number, image: ImageSourcePropType }

export function ButtonOptions({ label, image, ...rest }: ButtonOptionsProps) {
    return (
        <TouchableOpacity style={styles.btnOp} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonActivity({ label, sublabel, val, image, ...rest }: ButtonActivityProps) {
    return (
        <TouchableOpacity style={styles.btnAct} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageMap} />
            <Text style={styles.labelAdress}>{label}</Text>
            <Text style={styles.labelDate}>{sublabel}</Text>
            <Text style={styles.labelMoney}>{val}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
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

    labelAdress: {
        fontSize: 20,
        fontWeight: 700,
    },

    labelDate: {

    },

    labelMoney: {

    },
})