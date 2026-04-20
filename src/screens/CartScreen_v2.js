import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import Svg, { Path, Circle } from 'react-native-svg';

const CartIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="#999" />
    <Path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="#999" />
    <Path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const FoodIcon = () => (
  <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <Path d="M3 13H21C21 11.1435 20.2625 9.36301 18.9497 8.05025C17.637 6.7375 15.8565 6 14 6H10C8.14348 6 6.36301 6.7375 5.05025 8.05025C3.7375 9.36301 3 11.1435 3 13Z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 2V6" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M2 17H22" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ShopIcon = () => (
  <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <Path d="M3 9L12 3L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M9 22V12H15V22" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const MarketIcon = () => (
  <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <Path d="M3 3H21V11H3V3Z" stroke="#038537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M3 11L4 21H20L21 11" stroke="#038537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M9 11V15" stroke="#038537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M15 11V15" stroke="#038537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const CartScreen_v2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.emptyCard}>
          <View style={styles.iconCircle}>
            <CartIcon />
          </View>
          <View style={styles.emptyTextContainer}>
            <Text style={styles.emptyTitle}>Need Anything ?</Text>
            <Text style={styles.emptySubtitle}>Your cart is currently empty</Text>
          </View>
        </View>

        <View style={styles.categories}>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFF0F5' }]}>
             <View style={styles.catIconContainer}>
               <FoodIcon />
             </View>
             <Text style={[styles.catLabel, { marginTop: 8 }]}>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFFBE6', marginLeft: 12 }]}>
             <View style={styles.catIconContainer}>
               <ShopIcon />
             </View>
             <Text style={[styles.catLabel, { marginTop: 8 }]}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#F0FFF4', marginLeft: 12 }]}>
             <View style={styles.catIconContainer}>
               <MarketIcon />
             </View>
             <Text style={[styles.catLabel, { marginTop: 8 }]}>Local Market</Text>
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
  content: { flex: 1, paddingHorizontal: 16 },
  emptyCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 20, padding: 20, marginTop: 20 },
  iconCircle: { width: 64, height: 64, justifyContent: 'center', alignItems: 'center' },
  mainIcon: { width: 48, height: 48, resizeMode: 'contain' },
  emptyTextContainer: { flex: 1, marginLeft: 20 },
  emptyTitle: { fontFamily: 'Geist_700Bold', fontSize: 24, color: '#1A1A1A', marginBottom: 4 },
  emptySubtitle: { fontFamily: 'Geist_400Regular', fontSize: 14, color: '#666' },
  categories: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 60 },
  categoryCard: { flex: 1, height: 100, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  catIconContainer: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  catIcon: { width: 40, height: 40, resizeMode: 'contain' },
  catLabel: { fontFamily: 'Geist_400Regular', fontSize: 14, color: '#1A1A1A' }
});

export default CartScreen_v2;
