import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import MarketIcon from '../../ui_element/3.svg';
import CategoryDetailsScreen from './CategoryDetailsScreen';
import CartScreen from './CartScreen';
import OrdersScreen from './OrdersScreen';
import ProfileScreen from './ProfileScreen';
import CustomerHomeScreen_v2 from './CustomerHomeScreen_v2';
import CartScreen_v2 from './CartScreen_v2';
import OrdersScreen_v2 from './OrdersScreen_v2';
import ProfileScreen_v2 from './ProfileScreen_v2';

const { width } = Dimensions.get('window');

const ClocheIcon = ({ color }) => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M12 5C7.58 5 4 8.58 4 13H20C20 8.58 16.42 5 12 5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 3V5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M2 14H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ShopIcon = ({ color }) => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M3 9L4.5 4H19.5L21 9M3 9V20H21V9M3 9H21M9 20V14H15V20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M1 9H23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const SearchIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <Circle cx="11" cy="11" r="7" stroke="#666" strokeWidth="2"/>
    <Path d="M20 20L16 16" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
  </Svg>
);

const PinIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <Path d="M12 21C12 21 20 13 20 8C20 3.58 16.42 0 12 0C7.58 0 4 3.58 4 8C4 13 12 21 12 21Z" fill="#038537" />
    <Circle cx="12" cy="8" r="3" fill="white" />
  </Svg>
);

const GridIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="7" height="7" rx="1" fill="#666" />
    <Rect x="14" y="3" width="7" height="7" rx="1" fill="#666" />
    <Rect x="3" y="14" width="7" height="7" rx="1" fill="#666" />
    <Rect x="14" y="14" width="7" height="7" rx="1" fill="#666" />
  </Svg>
);

const HomeTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9Z"
      stroke={active ? '#038537' : '#999'}
      strokeWidth="2"
      fill={active ? '#038537' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CartTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill={active ? '#038537' : '#999'} />
    <Path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill={active ? '#038537' : '#999'} />
    <Path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
      stroke={active ? '#038537' : '#999'}
      strokeWidth="2"
      fill={active ? '#038537' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const OrdersTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect x="4" y="4" width="16" height="16" rx="2" stroke={active ? '#038537' : '#999'} strokeWidth="2" fill={active ? '#038537' : 'none'} />
    <Path d="M9 9H15" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M9 13H15" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M9 17H12" stroke={active ? 'white' : '#999'} strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

const ProfileTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke={active ? '#038537' : '#999'}
      strokeWidth="2"
      fill={active ? '#038537' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="7" r="4" stroke={active ? '#038537' : '#999'} strokeWidth="2" fill={active ? '#038537' : 'none'} />
  </Svg>
);

const BannerSVG = () => (
  <View style={styles.bannerBackground}>
    <Svg width="100%" height="85" viewBox="0 0 343 85" fill="none">
      <Rect width="343" height="85" rx="16" fill="#1A1A1A" />
      <Circle cx="300" cy="42" r="30" stroke="#FF5252" strokeWidth="6" strokeDasharray="40 10" />
    </Svg>
    <View style={styles.bannerOverlay}>
      <Text style={styles.bannerTitle}>Your next meal is just a message away</Text>
      <TouchableOpacity style={styles.tryNowButton}><Text style={styles.tryNowText}>Try it now</Text></TouchableOpacity>
    </View>
  </View>
);

const CustomerHomeScreen = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [activeBottomTab, setActiveBottomTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isV2, setIsV2] = useState(false);

  if (activeCategory) {
    return (
      <CategoryDetailsScreen
        category={activeCategory}
        onBack={() => setActiveCategory(null)}
      />
    );
  }

  const renderContent = () => {
    switch (activeBottomTab) {
      case 'cart': return isV2 ? <CartScreen_v2 /> : <CartScreen />;
      case 'orders': return isV2 ? <OrdersScreen_v2 /> : <OrdersScreen />;
      case 'profile': return isV2 ? <ProfileScreen_v2 /> : <ProfileScreen />;
      default: 
        if (isV2) {
          return <CustomerHomeScreen_v2 onToggle={() => setIsV2(false)} />;
        }
        return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.locationContainer}>
                <PinIcon />
                <Text style={styles.locationText}>No 8, Arowoara Warewa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => setIsV2(true)}><GridIcon /></TouchableOpacity>
            </View>
            <Text style={styles.welcomeText}>What do you need ?</Text>
            <View style={styles.searchBar}>
              <SearchIcon />
              <TextInput style={styles.searchInput} placeholder="Search food, groceries and items" placeholderTextColor="#999" />
            </View>
          </View>

          <View style={styles.scrollContent}>
            <BannerSVG />
            <View style={styles.categories}>
              <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFEBEE' }]} onPress={() => setActiveCategory('Food')}>
                <ClocheIcon color="#F06292" />
                <Text style={[styles.categoryLabel, { marginTop: 8 }]}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFFDE7' }]} onPress={() => setActiveCategory('Shop')}>
                <ShopIcon color="#FBC02D" />
                <Text style={[styles.categoryLabel, { marginTop: 8 }]}>Shop</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E0F2F1' }]} onPress={() => setActiveCategory('Local Market')}>
                <MarketIcon width={32} height={32} />
                <Text style={[styles.categoryLabel, { marginTop: 8 }]}>Local Market</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.filters}>
              <TouchableOpacity style={[styles.filterButton, activeTab === 'explore' && styles.activeFilter]} onPress={() => setActiveTab('explore')}>
                <Text style={activeTab === 'explore' ? styles.activeFilterText : styles.filterText}>Explore Stores</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterButton, activeTab === 'close' && styles.activeFilter]} onPress={() => setActiveTab('close')}>
                <Text style={activeTab === 'close' ? styles.activeFilterText : styles.filterText}>Close to you</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.storeCard}>
              <Image source={require('../../ui_element/food_card.jpg')} style={styles.storeImage} resizeMode="cover" />
              <View style={styles.storeInfo}>
                <Text style={styles.storeName}>Giant Supermarket</Text>
                <Text style={styles.metaText}>Warewa • 🚲 10-20 mins</Text>
                <TouchableOpacity style={styles.orderButton}><Text style={styles.orderButtonText}>Order now</Text></TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ height: 100 }} />
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderContent()}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('home')}><HomeTabIcon active={activeBottomTab === 'home'} /><Text style={[styles.tabLabel, activeBottomTab === 'home' && { color: '#038537' }]}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('cart')}><CartTabIcon active={activeBottomTab === 'cart'} /><Text style={[styles.tabLabel, activeBottomTab === 'cart' && { color: '#038537' }]}>Cart</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('orders')}><OrdersTabIcon active={activeBottomTab === 'orders'} /><Text style={[styles.tabLabel, activeBottomTab === 'orders' && { color: '#038537' }]}>Orders</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('profile')}><ProfileTabIcon active={activeBottomTab === 'profile'} /><Text style={[styles.tabLabel, activeBottomTab === 'profile' && { color: '#038537' }]}>Profile</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  headerContainer: { backgroundColor: '#ffffff', paddingBottom: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginTop: 20, marginBottom: 20 },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  locationText: { fontFamily: 'Geist_400Regular', fontSize: 16, color: '#333', marginLeft: 8 },
  menuButton: { width: 40, height: 40, backgroundColor: '#F5F5F5', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  welcomeText: { fontFamily: 'Geist_700Bold', fontSize: 26, color: '#1A1A1A', paddingHorizontal: 16, marginBottom: 16 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 12, marginHorizontal: 16, paddingHorizontal: 12, height: 44 },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: 'Geist_400Regular', fontSize: 14, color: '#1A1A1A' },
  scrollContent: { paddingHorizontal: 16, paddingTop: 16 },
  bannerBackground: { width: '100%', height: 85, borderRadius: 16, overflow: 'hidden', position: 'relative', backgroundColor: '#1A1A1A' },
  bannerOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 12, justifyContent: 'center' },
  bannerTitle: { color: '#ffffff', fontSize: 14, fontWeight: '700', width: '60%' },
  tryNowButton: { backgroundColor: '#ffffff', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, alignSelf: 'flex-end', position: 'absolute', bottom: 12, right: 12 },
  tryNowText: { color: '#000', fontSize: 10, fontWeight: '700' },
  categories: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, marginBottom: 32 },
  categoryCard: { width: (width - 48) / 3, height: 100, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  categoryLabel: { fontFamily: 'Geist_400Regular', fontSize: 16, color: '#1A1A1A' },
  filters: { flexDirection: 'row', marginBottom: 20 },
  filterButton: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#F5F5F5', marginRight: 12 },
  activeFilter: { backgroundColor: '#038537' },
  filterText: { color: '#666', fontSize: 14 },
  activeFilterText: { color: '#ffffff', fontSize: 14, fontWeight: '600' },
  storeCard: { backgroundColor: '#ffffff', borderRadius: 12, borderWidth: 1, borderColor: '#F0F0F0', overflow: 'hidden', marginBottom: 16 },
  storeImage: { width: '100%', height: 120 },
  storeInfo: { padding: 16 },
  storeName: { fontFamily: 'Geist_700Bold', fontSize: 18, color: '#1A1A1A', marginBottom: 4 },
  metaText: { fontSize: 14, color: '#666', marginBottom: 12 },
  orderButton: { backgroundColor: '#F0F9F3', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, alignSelf: 'flex-start' },
  orderButtonText: { color: '#038537', fontWeight: '700' },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabLabel: { fontSize: 14, color: '#999', marginTop: 4 }
});

export default CustomerHomeScreen;
