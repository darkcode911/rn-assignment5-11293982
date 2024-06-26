import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
const { currentTheme } = useTheme();

return (
<ScrollView
style={[styles.container, { backgroundColor: currentTheme.background }]}
>
<View style={styles.top}>
<Image
style={styles.userimage}
source={require("../Images/profile.png")}
/>
<View style={styles.welcomeContainer}>
<Text style={[styles.welcomeText, { color: currentTheme.text }]}>
Welcome back,
</Text>
<Text style={[styles.username, { color: currentTheme.text }]}>
Kwaku Ayensu
</Text>
</View>
<View
style={[
styles.searchContainer,
{ backgroundColor: currentTheme.circle },
]}
>
<Icon
style={styles.search}
name="search"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
/>
</View>
</View>
<View style={styles.card}>
<Image source={require("../Images/Card.png")} />
</View>
<View style={styles.buttons}>
<View style={styles.button}>
<View
style={[styles.circle, { backgroundColor: currentTheme.circle }]}
>
<Icon
name="arrow-up"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
/>
</View>
<Text style={[styles.sent, { color: currentTheme.text }]}>Sent</Text>
</View>
<View style={styles.button}>
<View
style={[styles.circle, { backgroundColor: currentTheme.circle }]}
>
<Icon
name="arrow-down"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
/>
</View>
<Text style={[styles.receive, { color: currentTheme.text }]}>
Receive
</Text>
</View>
<View style={styles.button}>
<View
style={[styles.circle, { backgroundColor: currentTheme.circle }]}
>
<Icon
name="cash-outline"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
/>
</View>
<Text style={[styles.loan, { color: currentTheme.text }]}>Loan</Text>
</View>
<View style={styles.button}>
<View
style={[styles.circle, { backgroundColor: currentTheme.circle }]}
>
<Icon
name="cloud-upload-outline"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
/>
</View>
<Text style={[styles.topup, { color: currentTheme.text }]}>
Topup
</Text>
</View>
</View>
<View style={styles.Ttext}>
<Text style={[styles.Transact, { color: currentTheme.text }]}>
Transaction
</Text>
<Text style={[styles.sell, { color: "blue" }]}>Sell All</Text>
</View>
<View style={styles.transactions}>
<View style={styles.transaction}>
<View
style={[
styles.transactionIconContainer,
{ backgroundColor: currentTheme.circle },
]}
>
<Icon
name="logo-apple"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
style={styles.transactionIcon}
/>
</View>
<View style={styles.transactionDetail}>
<Text
style={[styles.transactionText, { color: currentTheme.text }]}
>
Apple Store
</Text>
<Text style={styles.categoryText}>Entertainment</Text>
</View>
<Text style={[styles.amount, { color: currentTheme.text }]}>
- $5.99
</Text>
</View>
<View style={styles.transaction}>
<View
style={[
styles.transactionIconContainer,
{ backgroundColor: currentTheme.circle },
]}
>
<Image
style={styles.spotify}
source={require("../Images/spotify.png")}
/>
</View>
<View style={styles.transactionDetail}>
<Text
style={[styles.transactionText, { color: currentTheme.text }]}
>
Spotify
</Text>
<Text style={styles.categoryText}>Music</Text>
</View>
<Text style={[styles.amount, { color: currentTheme.text }]}>
- $12.99
</Text>
</View>
<View style={styles.transaction}>
<View
style={[
styles.transactionIconContainer,
{ backgroundColor: currentTheme.circle },
]}
>
<Icon
name="download-outline"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
style={styles.transactionIcon}
/>
</View>
<View style={styles.transactionDetail}>
<Text
style={[styles.transactionText, { color: currentTheme.text }]}
>
Money Transfer
</Text>
<Text style={styles.categoryText}>Transactions</Text>
</View>
<Text style={[styles.amount, { color: "blue" }]}>$300</Text>
</View>
<View style={styles.transaction}>
<View
style={[
styles.transactionIconContainer,
{ backgroundColor: currentTheme.circle },
]}
>
<Icon
name="cart-outline"
size={24}
color={currentTheme.mode === "dark" ? "white" : "black"}
style={styles.transactionIcon}
/>
</View>
<View style={styles.transactionDetail}>
<Text
style={[styles.transactionText, { color: currentTheme.text }]}
>
Grocery
</Text>
</View>
<Text style={[styles.amount, { color: currentTheme.text }]}>
- $88
</Text>
</View>
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 7,
},
top: {
flexDirection: "row",
alignItems: "center",
marginBottom: 20,
},
userimage: {
width: 50,
height: 50,
borderRadius: 25,
},
welcomeContainer: {
marginLeft: 10,
flex: 1,
},
welcomeText: {
fontSize: 17,
},
username: {
fontSize: 20,
fontWeight: "bold",
},
searchContainer: {
width: 35,
height: 35,
borderRadius: 30,
justifyContent: "center",
alignItems: "center",
},
search: {
width: 20,
height: 20,
},
card: {
padding: 5,
marginBottom: 20,
},
buttons: {
flexDirection: "row",
justifyContent: "space-between",
marginBottom: 20,
},
button: {
alignItems: "center",
},
circle: {
width: 50,
height: 50,
borderRadius: 50,
justifyContent: "center",
alignItems: "center",
marginBottom: 5,
},
sent: {
fontSize: 14,
},
receive: {
fontSize: 14,
},
loan: {
fontSize: 14,
},
topup: {
fontSize: 14,
},
Ttext: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginBottom: 10,
},
Transact: {
fontSize: 18,
fontWeight: "bold",
},
sell: {
color: "blue",
},
transactions: {
flex: 1,
},
transaction: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
padding: 10,
},
transactionIconContainer: {
width: 40,
height: 40,
borderRadius: 50,
justifyContent: "center",
alignItems: "center",
},
transactionDetail: {
flex: 1,
marginLeft: 10,
},
transactionText: {
fontSize: 16,
fontWeight: "bold",
},
categoryText: {
fontSize: 14,
color: "grey",
},
amount: {
fontSize: 18,
fontWeight: "bold",
},
});

export default HomeScreen;
 