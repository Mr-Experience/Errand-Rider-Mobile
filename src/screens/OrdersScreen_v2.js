import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BasketIcon = () => (
  <Svg width="60" height="60" viewBox="0 0 24 24" fill="none">
    <Path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M3 6H21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const OrdersScreen_v2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.emptyContainer}>
          <View style={styles.iconBox}>
            <BasketIcon />
          </View>
          <Text style={styles.emptyTitle}>Place first Order</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>Shop now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: { paddingHorizontal: 24, paddingTop: 44, paddingBottom: 20 },
  headerTitle: { fontFamily: 'Geist_700Bold', fontSize: 32, color: '#1A1A1A' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 100 },
  emptyContainer: { alignItems: 'center', width: '100%' },
  iconBox: { width: 120, height: 120, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  mainIcon: { width: 80, height: 80, resizeMode: 'contain' },
  emptyTitle: { fontFamily: 'Geist_400Regular', fontSize: 24, color: '#000', marginBottom: 24 },
  shopButton: { backgroundColor: '#038537', paddingHorizontal: 60, paddingVertical: 14, borderRadius: 12 },
  shopButtonText: { fontFamily: 'Geist_700Bold', fontSize: 16, color: '#ffffff' }
});

export default OrdersScreen_v2;
