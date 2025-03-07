import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.container1}>
      <View>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.transactionItem} onPress={() => navigation.navigate("TransactionDetails", { transaction: item })}>
            <Text style={styles.item}>{item.description} - ${item.amount}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddTransaction", { addTransaction })}
      >
        <Text style={styles.addButtonText}>+ Add Transaction</Text>
      </TouchableOpacity>

      </View>
      
      <TouchableOpacity style={styles.addButton}  title="Logout" onPress={() => navigation.replace("SignIn")}>
      <Text style={styles.addButtonText}>Logout</Text>

      </TouchableOpacity>
      </View>
      
    </View>

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  container1:{
    flex:1,
    justifyContent:'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color:'#FF7C4E'
  },
  transactionItem: {
    padding: 15,
    backgroundColor: "FFF",
    borderColor:'#FF7C4E',
    borderWidth:3,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#FF7C4E",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  item:{
    fontSize:18
  }
});

export default Dashboard;
