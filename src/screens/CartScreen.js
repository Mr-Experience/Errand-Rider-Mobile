import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const MinusIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <Path d="M5 12H19" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const PlusIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <Path d="M12 5V19M5 12H19" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const CartItem = ({ name, price, quantity, onIncrement, onDecrement, image }) => (
  <View style={styles.itemCard}>
    <Image source={image || require('../../ui_element/food_card.jpg')} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>N{price}</Text>
    </View>
    <View style={styles.quantitySelector}>
      <TouchableOpacity onPress={onDecrement} style={styles.quantityBtn}>
        <MinusIcon />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={onIncrement} style={[styles.quantityBtn, { marginLeft: 10 }]}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  </View>
);

const CartScreen = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Fried Rice', price: 1200, quantity: 1, image: require('../../assets/fried_rice.png') },
    { id: 2, name: 'Jollof Rice', price: 1500, quantity: 1, image: require('../../assets/jollof_rice.png') },
    { id: 3, name: 'Grilled Chicken', price: 2500, quantity: 1, image: require('../../assets/grilled_chicken.png') },
    { id: 4, name: 'Plantain Portion', price: 800, quantity: 2, image: require('../../ui_element/food_card.jpg') },
    { id: 5, name: 'Cold Drink', price: 500, quantity: 1, image: require('../../assets/soda.png') },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFees = 1200;
  const total = subtotal + deliveryFees;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
            onIncrement={() => updateQuantity(item.id, 1)}
            onDecrement={() => updateQuantity(item.id, -1)}
          />
        ))}
        {/* Extra space for the footer */}
        <View style={{ height: 260 }} />
      </ScrollView>

      <View style={styles.floatingFooter}>
        <View style={styles.footerContent}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>N{subtotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fees</Text>
            <Text style={styles.summaryValue}>N{deliveryFees}</Text>
          </View>
          <View style={styles.dashedDivider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>N{total}</Text>
          </View>

          <TouchableOpacity 
            style={styles.proceedButton}
            onPress={() => alert('Proceeding to checkout...')}
          >
            <Text style={styles.proceedText}>Proceed</Text>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Geist_700Bold',
    fontSize: 32,
    color: '#1A1A1A',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  itemImage: {
    width: 72,
    height: 72,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  itemPrice: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    padding: 6,
  },
  quantityText: {
    fontFamily: 'Geist_700Bold',
    fontSize: 18,
    color: '#1A1A1A',
    minWidth: 15,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  quantityBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  floatingFooter: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 100, // Space for the bottom navigation
    // Unified shadow for the whole bottom area
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  footerContent: {
    backgroundColor: '#ffffff',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
  dashedDivider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    borderStyle: 'dashed',
    marginVertical: 12,
  },
  totalLabel: {
    fontFamily: 'Geist_400Regular',
    fontSize: 18,
    color: '#1A1A1A',
  },
  totalValue: {
    fontFamily: 'Geist_700Bold',
    fontSize: 18,
    color: '#2E7D32',
  },
  proceedButton: {
    backgroundColor: '#038537',
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  proceedText: {
    fontFamily: 'Geist_700Bold',
    fontSize: 16,
    color: '#ffffff',
  },
});

export default CartScreen;
