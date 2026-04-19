import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, PanResponder, Animated, Dimensions } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');

const BackArrow = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M15 18L9 12L15 6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const PinIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <Path d="M12 21C12 21 20 13 20 8C20 3.58 16.42 0 12 0C7.58 0 4 3.58 4 8C4 13 12 21 12 21Z" fill="#038537" />
    <Circle cx="12" cy="8" r="3" fill="white" />
  </Svg>
);

const categoryData = {
  Food: [
    { name: "Mama's Kitchen", location: "Berger", time: "5 - 15 mins", status: "open" },
    { name: "Giant Supermarket", location: "Warewa", time: "10 - 20 mins", status: "closed" },
    { name: "FreshMart Store", location: "Ojodu", time: "15 - 25 mins", status: "open" },
    { name: "Taste of Lagos", location: "Ketu", time: "20 - 30 mins", status: "open" },
  ],
  Shop: [
    { name: "QuickShop Express", location: "Berger", time: "5 - 10 mins", status: "open" },
    { name: "MegaMart", location: "Agege", time: "10 - 20 mins", status: "closed" },
    { name: "ShopRite Warewa", location: "Warewa", time: "15 - 25 mins", status: "open" },
    { name: "Value Mall", location: "Ikeja", time: "25 - 35 mins", status: "open" },
  ],
  'Local Market': [
    { name: "Arowola Market", location: "Warewa", time: "3 - 8 mins", status: "open" },
    { name: "Mile 12 Market", location: "Mile 12", time: "20 - 30 mins", status: "open" },
    { name: "Mushin Market", location: "Mushin", time: "30 - 45 mins", status: "closed" },
    { name: "Kuto Market", location: "Abeokuta", time: "60 - 90 mins", status: "closed" },
  ],
};

const CategoryDetailsScreen = ({ category, onBack }) => {
  const stores = categoryData[category] || [];
  const panX = useState(new Animated.Value(0))[0];

  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Detect horizontal swipe from left to right
        return Math.abs(gestureState.dx) > 20 && gestureState.dx > Math.abs(gestureState.dy);
      },
      onPanResponderMove: Animated.event([null, { dx: panX }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > width * 0.3) {
          // Swipe far enough to go back
          Animated.timing(panX, {
            toValue: width,
            duration: 200,
            useNativeDriver: false,
          }).start(() => onBack());
        } else {
          // Snap back
          Animated.spring(panX, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  )[0];

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        style={[styles.container, { transform: [{ translateX: panX }] }]} 
        {...panResponder.panHandlers}
      >
        {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category}</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Store Cards */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {stores.map((store, index) => (
          <View key={index} style={styles.cardShadowClip}>
            <View style={styles.storeCard}>
              <Image
                source={require('../../ui_element/Food card.jpg')}
                style={styles.storeImage}
                resizeMode="cover"
              />
              <View style={styles.storeInfo}>
                <View style={styles.storeHeader}>
                  <Text style={styles.storeName}>{store.name}</Text>
                  {store.status === 'open' ? (
                    <View style={[styles.statusBadge, { backgroundColor: '#E8F5E9' }]}>
                      <Text style={[styles.statusText, { color: '#038537' }]}>Open</Text>
                    </View>
                  ) : (
                    <View style={[styles.statusBadge, { backgroundColor: '#FFEBEE' }]}>
                      <Text style={[styles.statusText, { color: '#E53935' }]}>Closed</Text>
                    </View>
                  )}
                </View>

                <View style={styles.storeMeta}>
                  <View style={styles.metaItem}>
                    <PinIcon />
                    <Text style={styles.metaText}>{store.location}</Text>
                  </View>
                  <View style={[styles.metaItem, { marginLeft: 16 }]}>
                    <Text style={styles.metaText}>🚲 {store.time}</Text>
                  </View>
                </View>

                {store.status === 'open' ? (
                  <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Order now</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={[styles.orderButton, styles.orderButtonDisabled]} disabled>
                    <Text style={styles.orderButtonTextDisabled}>Order now</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
        </ScrollView>
      </Animated.View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Geist_700Bold',
    fontSize: 20,
    color: '#1A1A1A',
    textAlign: 'center',
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
    paddingTop: 10,
  },
  cardShadowClip: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  storeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  storeImage: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  storeInfo: {
    padding: 18,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  storeName: {
    fontFamily: 'Geist_700Bold',
    fontSize: 19,
    color: '#1A1A1A',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  storeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
  },
  orderButton: {
    width: 110,
    height: 40,
    backgroundColor: '#F0F9F3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderButtonDisabled: {
    backgroundColor: '#F5F5F5',
  },
  orderButtonText: {
    fontSize: 14,
    color: '#038537',
    fontWeight: '700',
  },
  orderButtonTextDisabled: {
    fontSize: 14,
    color: '#AAAAAA',
    fontWeight: '600',
  },
});

export default CategoryDetailsScreen;
