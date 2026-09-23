import style from "@/constants/Colors"
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from "expo-router"
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

type ButtonSobProps = TouchableOpacityProps & { label: string, sublabel: string }
type ButtonPressProps = TouchableOpacityProps
type ButtonImageProps = TouchableOpacityProps & { image: ImageSourcePropType }
type ButtonMoreProps = TouchableOpacityProps & { label: string, sublabel: string, image: ImageSourcePropType }
type ButtonOptionsProps = TouchableOpacityProps & { label: string, image: ImageSourcePropType }
type ButtonActivityProps = TouchableOpacityProps & { label: string, sublabel: string, val: number, image: ImageSourcePropType, lbassess: string, lbres: string }
type ButtonPreviousProps = TouchableOpacityProps & { label: string, sublabel: string, val: number, image: ImageSourcePropType, lbres: string }
type ButtonAssessProps = TouchableOpacityProps & { val: number }
type ButtonProps = TouchableOpacityProps & { label: string }

// Index Buttons 
//// Uber
export function ButtonSearch({ label, sublabel, ...rest }: ButtonSobProps) {
    return (
        <TouchableOpacity style={styles.btnSearch} activeOpacity={0.7} onPress={() => router.push("/pages/travel")} {...rest}>
            <Ionicons name="search" style={styles.iconSearch} />
            <Text style={styles.labelSearch}>{label}</Text>
            <TouchableOpacity style={styles.btnFloat} activeOpacity={0.7} onPress={() => router.push("/pages/travel")} {...rest}>
                <MaterialIcons name="calendar-today" style={styles.iconFloat} />
                <Text style={styles.labelFloat}>{sublabel}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export function ButtonRecentAddress({ label, sublabel, ...rest }: ButtonSobProps) {
    return (
        <TouchableOpacity style={styles.btnRecAdd} activeOpacity={0.7} {...rest}>
            <MaterialIcons name="access-time" style={styles.iconClock} />
            <Text style={[styles.labelAdd, { fontWeight: 700 }]}>{label}</Text>
            <Text style={styles.labelAdd}>{sublabel}</Text>
            <MaterialIcons name="keyboard-arrow-right" style={styles.iconKeyArrow} />
        </TouchableOpacity>
    )
}

export function ButtonArrow({ ...rest }: ButtonPressProps) {
    return (
        <TouchableOpacity style={styles.btnArrow} activeOpacity={0.7} onPress={() => router.push("/options")} {...rest}>
            <MaterialIcons name="keyboard-arrow-right" style={styles.iconArrow} />
        </TouchableOpacity>
    )
}

export function ButtonForYou({ image, ...rest }: ButtonImageProps) {
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

//// Envios
export function ButtonSearchEnv({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnSearch} activeOpacity={0.7} onPress={() => router.push("/pages/travel")} {...rest}>
            <Ionicons name="search" style={styles.iconSearch} />
            <Text style={styles.labelSearch}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonSeRe({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnSeRe} activeOpacity={0.7} {...rest}>
            <MaterialIcons name="turn-right" style={styles.iconTurn} />
            <Text style={styles.labelSeRe}>{label}</Text>
            <MaterialIcons name="keyboard-arrow-right" style={styles.iconKeyArrow} />
        </TouchableOpacity>
    )
}

export function ButtonTravelOp({ label, sublabel, image, ...rest }: ButtonMoreProps) {
    return (
        <TouchableOpacity style={[styles.btnMoreOp, { backgroundColor: "", borderWidth: 1, borderColor: style.c1, gap: 0 }]} activeOpacity={0.7} {...rest}>
            <Text style={styles.labelMoreOp}>{label}</Text>
            <Text style={[styles.sublabelMoreOp, { paddingRight: 0, }]}>{sublabel}</Text>
            <Image source={image} style={styles.imageMoreOp} />
        </TouchableOpacity>
    )
}

export function ButtonFloat({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnFloat} activeOpacity={0.7} {...rest}>
            <Ionicons name="reload" style={styles.iconFloat} />
            <Text style={styles.labelFloat}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonRequest({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnRequest} activeOpacity={0.7} {...rest}>
            <Text style={styles.labelRequest}>{label}</Text>
        </TouchableOpacity>
    )
}

// Options Buttons
export function ButtonOptionsBig({ label, image, ...rest }: ButtonOptionsProps) {
    return (
        <TouchableOpacity style={styles.btnOpB} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />
            <Text style={styles.labelOp}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonOptionsSmall({ label, image, ...rest }: ButtonOptionsProps) {
    return (
        <TouchableOpacity style={styles.btnOpS} activeOpacity={0.7} {...rest}>
            <Image source={image} style={styles.imageIcons} />
            <Text style={styles.labelOp}>{label}</Text>
        </TouchableOpacity>
    )
}


// Activity Buttons
export function ButtonFilter({ ...rest }: ButtonPressProps) {
    return (
        <TouchableOpacity style={styles.btnFilter} activeOpacity={0.7} {...rest}>
            <MaterialIcons name="filter-list" style={styles.iconFilter} />
        </TouchableOpacity>
    )
}

export function ButtonActivity({ label, sublabel, val, image, lbassess, lbres, ...rest }: ButtonActivityProps) {
    return (
        <TouchableOpacity style={styles.btnAct} activeOpacity={0.7} onPress={() => router.push("/pages/infoTravel")} {...rest}>
            <Image source={image} style={styles.imageMap} />
            <Text style={styles.labelAddress}>{label}</Text>
            <Text style={styles.labelDate}>{sublabel}</Text>
            <Text style={styles.labelMoney}>{val}</Text>
            <View style={styles.boxButtons} >
                <TouchableOpacity style={styles.btnFloat} activeOpacity={0.7} {...rest}>
                    <MaterialIcons name="star-border" style={styles.iconFloat} />
                    <Text style={styles.labelFloat}>{lbassess}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFloat} activeOpacity={0.7} {...rest}>
                    <Ionicons name="reload" style={styles.iconFloat} />
                    <Text style={styles.labelFloat}>{lbres}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export function ButtonPrevious({ image, label, sublabel, val, lbres, ...rest }: ButtonPreviousProps) {
    return (
        <TouchableOpacity style={styles.btnPrev} activeOpacity={0.7} onPress={() => router.push("/pages/infoTravel")} {...rest}>
            <View style={styles.imagePrev}>
                <Image source={image} style={styles.imageIcons} />
            </View>
            <View style={styles.labelPrev}>
                <Text style={[styles.labelAddress, { fontSize: 18 }]}>{label}</Text>
                <Text style={styles.labelDate}>{sublabel}</Text>
                <Text style={styles.labelMoney}>{val}</Text>
            </View>
            <View style={styles.btnRes}>
                <TouchableOpacity style={[styles.btnFloat, {marginTop: "20%"}]} activeOpacity={0.7} {...rest}>
                    <Ionicons name="reload" style={styles.iconFloat} />
                    <Text style={styles.labelFloat}>{lbres}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

// Account Buttons
export function ButtonAssess({ val, ...rest }: ButtonAssessProps) {
    return (
        <TouchableOpacity style={styles.btnAssess} {...rest}>
            <MaterialIcons name="star" style={[styles.iconFloat, { fontSize: 13 }]} />
            <Text style={[styles.labelMoney, { fontSize: 11 }]}>{val}</Text>
        </TouchableOpacity>
    )
}

export function ButtonVerified({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnAssess} {...rest}>
            <MaterialIcons name="verified" style={[styles.iconFloat, { fontSize: 13, color: "blue" }]} />
            <Text style={[styles.labelMoney, { fontSize: 11 }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonPersonPhoto({ ...rest }: ButtonPressProps) {
    return (
        <TouchableOpacity style={styles.btnPersonPhoto} {...rest}>
            <MaterialIcons name="person-outline" style={styles.iconPersonPhoto} />
        </TouchableOpacity>
    )
}

export function ButtonOptions({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnOptions} {...rest}>
            <MaterialIcons name="shield" style={styles.iconOptions} />
            <Text style={styles.labelOptions}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonMoreOp({ label, sublabel, image, ...rest }: ButtonMoreProps) {
    return (
        <TouchableOpacity style={styles.btnMoreOp} activeOpacity={0.7} {...rest}>
            <Text style={styles.labelMoreOp}>{label}</Text>
            <Text style={styles.sublabelMoreOp}>{sublabel}</Text>
            <Image source={image} style={styles.imageMoreOp} />
        </TouchableOpacity>
    )
}

export function ButtonCO2({ label, sublabel, ...rest }: ButtonSobProps) {
    return (
        <TouchableOpacity style={[styles.btnMoreOp, { flexDirection: 'row', alignItems: 'center', paddingBottom: 15 }]} activeOpacity={0.7} {...rest}>
            <Text style={styles.labelMoreOp}>{label}</Text>
            <View style={styles.boxNum}>
                <Ionicons name="leaf" style={styles.iconCO2} />
                <Text style={styles.sublabelCO2}>{sublabel}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function ButtonMostOp({ label, sublabel, ...rest }: ButtonSobProps) {
    return (
        <TouchableOpacity style={styles.btnMostOp} activeOpacity={0.7} {...rest}>
            <MaterialIcons name="people-outline" style={styles.iconOptions} />
            <View>
                <Text style={[styles.labelMoreOp, { paddingTop: 0 }]}>{label}</Text>
                <Text style={[styles.sublabelMoreOp, { paddingRight: 0, paddingBottom: 0, fontSize: 12 }]}>{sublabel}</Text>
            </View>
        </TouchableOpacity>
    )
}

// InfoTravel
/// Help Button
export function ButtonHelp({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.btnFloat, { backgroundColor: style.c6 }]} activeOpacity={0.7} {...rest}>
            <Text style={styles.labelFloat}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ButtonReceipt({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.btnReceipt} {...rest}>
            <MaterialIcons name="receipt" style={[styles.iconFloat, { fontSize: 20 }]} />
            <Text style={[styles.labelMoney, { fontSize: 18, fontWeight: 600 }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // Index
    // Search Button
    btnSearch: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: style.c2,
        borderWidth: 1,
        borderColor: "#bebebe",
        borderRadius: 50,
        paddingHorizontal: 12,
        gap: 10,
    },

    iconSearch: {
        fontSize: 22,
        padding: 5,
        color: style.c3,
    },

    labelSearch: {
        flex: 1,
        fontSize: 17,
        fontWeight: 500,
        color: style.c3,
    },

    //// Float Button
    btnFloat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: style.c2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        //margin: "auto",
    },

    iconFloat: {
        fontSize: 16,
    },

    labelFloat: {
        fontSize: 14,
    },

    // Recent Address Button
    btnRecAdd: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        backgroundColor: style.c2,
        borderRadius: 5,
    },

    iconClock: {
        position: 'absolute',
        fontSize: 15,
        backgroundColor: style.c2,
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
        marginLeft: "90%",
    },

    // Arrow Button
    btnArrow: {
        borderWidth: 1,
        borderColor: style.c1,
        borderRadius: 50,
        marginLeft: 8,
    },

    iconArrow: {
        fontSize: 14,
        color: style.c3,
    },

    // ForYou Button
    btnFY: {
        backgroundColor: style.c2,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 50,
    },

    // More Button
    btnMore: {
        width: 250,
        backgroundColor: style.c2,
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
    btnMost: {},

    labelMost: {},

    imageMost: {},

    // Send && Receive Button
    btnSeRe: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingVertical: 35,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    iconTurn: {
        position: 'absolute',
        fontSize: 24,
        backgroundColor: style.c2,
        padding: 16,
        borderRadius: 10,
        marginLeft: 10,
    },

    labelSeRe: {
        fontSize: 16,
        fontWeight: 700,
        marginLeft: "20%",
    },

    // Request Button
    btnRequest: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        backgroundColor: style.c
    },

    labelRequest: {
        fontSize: 16,
        fontWeight: 600,
    },

    // Options
    btnOpB: {
        width: "30%",
        height: 100,
        backgroundColor: style.c2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        gap: 8,
    },

    imageIcons: {
        width: 60,
        height: 50,
    },

    labelOp: {
        color: 'black',
        fontSize: 14,
        fontWeight: 600,
    },

    btnOpS: {
        width: "22%",
        height: 100,
        backgroundColor: style.c2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        gap: 8,
    },

    // Activity
    // Filter Button
    btnFilter: {
        backgroundColor: style.c2,
        padding: 6,
        borderRadius: 50,
        marginLeft: "65%",
    },

    iconFilter: {
        fontSize: 20,
        color: style.c3,
    },

    // Activity Button
    btnAct: {
        width: "100%",
        //resizeMode: "contain",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: style.c1,
        padding: 15,
    },

    imageMap: {
        width: "100%",
        height: 180,
        borderRadius: 8,
        marginBottom: 10,
    },

    labelAddress: {
        fontSize: 20,
        fontWeight: 700,
    },

    labelDate: {},

    labelMoney: {},

    //// Assess && Reschedule Button
    boxButtons: {
        flexDirection: "row",
        gap: 10,
        marginTop: 8,
    },

    //Previous Button
    btnPrev: {
        flexDirection: 'row',
        //flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop: 10,
        //backgroundColor: style.c2,
        borderRadius: 5,
        gap: 10,
    },

    imagePrev: {
        //position: 'absolute',
        //fontSize: 10,
        backgroundColor: style.c2,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 10,
        //marginLeft: 10,
    },

    labelPrev: {
        paddingRight: 200,
    },

    btnRes: {
        position: "absolute",
        marginLeft: "70%",
    },

    // Account
    // Assess && Verified Button
    btnAssess: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: style.c2,
        borderRadius: 6,
        padding: 4,
    },

    // Person Photo Button
    btnPersonPhoto: {
        backgroundColor: style.c1,
        padding: 16,
        borderRadius: 50,
    },

    iconPersonPhoto: {
        fontSize: 30,
        color: style.c3
    },

    // Options Button
    btnOptions: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: style.c2,
        padding: 18,
        borderRadius: 10,
    },

    iconOptions: {
        fontSize: 20,
    },

    labelOptions: {
        fontSize: 16,
    },

    // More Options Button
    btnMoreOp: {
        width: "100%",
        backgroundColor: style.c2,
        borderRadius: 10,
        paddingBottom: 10,
        paddingHorizontal: 18,
        gap: 6,
    },

    imageMoreOp: {
        position: 'absolute',
        marginLeft: "80%",
        //marginTop: 8,
        width: 70,
        height: 70,
    },

    labelMoreOp: {
        paddingTop: 8,
        fontSize: 16,
        fontWeight: 600,
    },

    sublabelMoreOp: {
        paddingRight: 100,
        paddingBottom: 8,
    },

    // CO2 Button
    boxNum: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginLeft: "25%",
        marginTop: 12,
        gap: 8,
    },

    iconCO2: {
        fontSize: 22,
        color: style.c5,
    },

    sublabelCO2: {
        fontSize: 22,
        fontWeight: 900,
    },

    // MostOp Button
    btnMostOp: {
        //justifyContent: 'center',
        alignItems: 'center',
        //margin: 'auto',
        flexDirection: 'row',
        gap: 22,
    },

// InfoTravel
    // Receipt
    btnReceipt: {
        width: "35%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        backgroundColor: style.c2,
        borderRadius: 30,
        padding: 16,
    },
})