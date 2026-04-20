import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FilterIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <Path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered': return '#038537';
    case 'On its way': return '#2196F3';
    case 'Pending': return '#FFC107';
    default: return '#888';
  }
};

const OrderCard = ({ status, date, transactionId, cost }) => (
  <View style={styles.card}>
    <Image source={require('../../ui_element/food_card.jpg')} style={styles.cardHeaderImage} />
    <View style={styles.cardContent}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Order Status</Text>
        <Text style={[styles.value, { color: getStatusColor(status) }]}>{status}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Order Date</Text>
        <Text style={styles.value}>{date}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Transaction ID</Text>
        <Text style={styles.value}>{transactionId}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Total Cost</Text>
        <Text style={styles.value}>N{cost.toLocaleString()}</Text>
      </View>
    </View>
  </View>
);

const OrdersScreen = () => {
  const orders = [
    { status: 'On its way', date: '10 Sept 2026', transactionId: '26vGDSHSS', cost: 10000 },
    { status: 'Delivered', date: '08 Sept 2026', transactionId: '27xYHJKLL', cost: 3500 },
    { status: 'Pending', date: '07 Sept 2026', transactionId: '28pZZXCVB', cost: 12500 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
        <TouchableOpacity style={styles.filterButton}>
          <FilterIcon />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Geist_700Bold',
    fontSize: 32,
    color: '#1A1A1A',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#038537',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 8,
  },
  filterText: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 120, // Increased to clear bottom navigation
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
  },
  cardHeaderImage: {
    width: '100%',
    height: 60,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Geist_400Regular',
    fontSize: 15,
    color: '#888',
  },
  value: {
    fontFamily: 'Geist_400Regular',
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
  },
});

export default OrdersScreen;
