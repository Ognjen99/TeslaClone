import { ColorPropType, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
        bottom: 20
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: 'black', 
    }
});

export default styles;