import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text, Platform, StatusBar } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const WrapperCustom = ({ children }: { children: React.ReactNode }) => {

    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{ ...styles.container }}>
            <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} backgroundColor={"#000"} />
            <View
                style={{ flex: 1, backgroundColor: '#DDD', marginBottom: Platform.OS === 'android' ? insets.top : 0 }}
            >
                {children}
            </View>
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