import { View, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const WrapperCustom = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

export default WrapperCustom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
});