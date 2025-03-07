import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddTransaction = ({ route }) => {
  const navigation = useNavigation();
  const [transaction, setTransaction] = useState({
    date: "",
    amount: "",
    description: "",
    location: "",
    type: "",
    category: "",
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; 
    setTransaction((prev) => ({ ...prev, date: today }));
  }, []);

  const handleInputChange = (field, value) => {
    setTransaction({ ...transaction, [field]: value });
  };

  const validateAndSubmit = () => {
    const { date, amount, description, location, type, category } = transaction;

    if (!date || !amount || !description || !location || !type || !category) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    if (route.params?.addTransaction) {
      route.params.addTransaction(transaction);
    }

    Alert.alert("Success", "Transaction added successfully!");
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        onChangeText={(value) => handleInputChange("date", value)}
        value={transaction.date}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange("amount", value)}
        value={transaction.amount}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(value) => handleInputChange("description", value)}
        value={transaction.description}
      />

      <TextInput
        style={styles.input}
        placeholder="Location"
        onChangeText={(value) => handleInputChange("location", value)}
        value={transaction.location}
      />

      <TextInput
        style={styles.input}
        placeholder="Transaction Type (Credit/Debit/Refund)"
        onChangeText={(value) => handleInputChange("type", value)}
        value={transaction.type}
      />

      <TextInput
        style={styles.input}
        placeholder="Category (Shopping/Travel/Utility)"
        onChangeText={(value) => handleInputChange("category", value)}
        value={transaction.category}
      />

      <TouchableOpacity style={styles.button} onPress={validateAndSubmit}>
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FF7C4E",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddTransaction;
