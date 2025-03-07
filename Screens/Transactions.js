import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Trancactions = ({ route }) => {
    const { transaction } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Transaction Details</Text>
        <View>
        <Text style={styles.description}>Description: {transaction.description}</Text>
        <Text style={styles.description}>Amount: ${transaction.amount}</Text>
        <Text style={styles.description}>Type: {transaction.type}</Text>
        <Text style={styles.description}>Location: {transaction.location}</Text>
        <Text style={styles.description}>Type: {transaction.category}</Text>
        </View>
        

      </View>
    );
  };

export default Trancactions;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start', alignItems:'center', margin:20},
    title: { fontSize: 24, marginBottom: 10 },
    description:{
        fontSize:18,
    }
  });
