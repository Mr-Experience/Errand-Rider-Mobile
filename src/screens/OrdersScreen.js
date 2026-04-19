import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.emptyText}>No orders yet</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 28,
  },
  headerTitle: {
    fontFamily: 'Geist_700Bold',
    fontSize: 26,
    color: '#1A1A1A',
    textAlign: 'left',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#999',
  },
});

export default OrdersScreen;
