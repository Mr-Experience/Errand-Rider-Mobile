import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import Logo from '../../ui_element/Logo.svg';
import MarketIcon from '../../ui_element/3.svg';
import CategoryDetailsScreen from './CategoryDetailsScreen';
import CartScreen from './CartScreen';
import OrdersScreen from './OrdersScreen';
import ProfileScreen from './ProfileScreen';

const { width } = Dimensions.get('window');

const ClocheIcon = ({ color }) => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M12 5C7.58 5 4 8.58 4 13H20C20 8.58 16.42 5 12 5Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 3V5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M2 14H22" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ShopIcon = ({ color }) => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M3 9L4.5 4H19.5L21 9M3 9V20H21V9M3 9H21M9 20V14H15V20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M1 9H23" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
    <Path d="M3 9.5L12 2L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
      fill={active ? '#038537' : 'none'}
      stroke={active ? '#038537' : '#999'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M9 21V15H15V21" fill={active ? 'white' : 'none'} stroke={active ? 'white' : 'none'} strokeWidth="1.2" />
  </Svg>
);

const CartTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
      stroke={active ? '#038537' : '#999'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      fill={active ? '#038537' : 'none'}
    />
    <Path d="M3 6H21" stroke={active ? '#ffffff' : '#999'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"
      stroke={active ? '#ffffff' : '#999'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </Svg>
);

const OrdersTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="18" height="18" rx="3"
      stroke={active ? '#038537' : '#999'} strokeWidth="1.8"
      fill={active ? '#038537' : 'none'}
    />
    <Path d="M8 8H16" stroke={active ? '#ffffff' : '#999'} strokeWidth="1.8" strokeLinecap="round"/>
    <Path d="M8 12H16" stroke={active ? '#ffffff' : '#999'} strokeWidth="1.8" strokeLinecap="round"/>
    <Path d="M8 16H12" stroke={active ? '#ffffff' : '#999'} strokeWidth="1.8" strokeLinecap="round"/>
  </Svg>
);

const ProfileTabIcon = ({ active }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="4"
      stroke={active ? '#038537' : '#999'} strokeWidth="1.8"
      fill={active ? '#038537' : 'none'}
    />
    <Path d="M4 20C4 17.5 7 15 12 15C17 15 20 17.5 20 20"
      stroke={active ? '#038537' : '#999'} strokeWidth="1.8" strokeLinecap="round"
      fill={active ? '#038537' : 'none'}
    />
    {active && (
      <>
        <Circle cx="12" cy="8" r="1.5" fill="white" />
        <Path d="M9 19C9 18 10.3431 17 12 17C13.6569 17 15 18 15 19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </>
    )}
  </Svg>
);

const BannerSVG = () => (
  <View style={styles.bannerBackground}>
    <Svg width="100%" height="85" viewBox="0 0 343 85" fill="none">
      <Rect width="343" height="85" rx="16" fill="#1A1A1A" />
      <Circle cx="300" cy="42" r="30" stroke="#FF5252" strokeWidth="6" strokeDasharray="40 10" />
      <Circle cx="300" cy="42" r="22" stroke="#FFD740" strokeWidth="6" strokeDasharray="30 15" />
      <Circle cx="300" cy="42" r="14" stroke="#64FFDA" strokeWidth="6" strokeDasharray="20 10" />
    </Svg>
    <View style={styles.bannerOverlay}>
      <Text style={styles.bannerTitle}>
        Your next meal{"\n"}
        <Text style={styles.bannerSubtitle}>is just a message away</Text>
      </Text>
      <TouchableOpacity style={styles.tryNowButton}>
        <Text style={styles.tryNowText}>Try it now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Banner2SVG = () => (
  <View style={[styles.bannerBackground, { backgroundColor: '#0D2E4E' }]}>
    <Svg width="100%" height="85" viewBox="0 0 343 85" fill="none">
      <Rect width="343" height="85" rx="16" fill="#0D2E4E" />
      <Circle cx="300" cy="42" r="30" stroke="#64B5F6" strokeWidth="6" strokeDasharray="40 10" />
      <Circle cx="300" cy="42" r="20" stroke="#E040FB" strokeWidth="6" strokeDasharray="25 10" />
      <Circle cx="300" cy="42" r="10" stroke="#80CBC4" strokeWidth="8" strokeDasharray="15 5" />
    </Svg>
    <View style={styles.bannerOverlay}>
      <Text style={styles.bannerTitle}>
        Shop anything{"\n"}
        <Text style={[styles.bannerSubtitle, { color: '#64B5F6' }]}>delivered in minutes</Text>
      </Text>
      <TouchableOpacity style={styles.tryNowButton}>
        <Text style={styles.tryNowText}>Shop now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Banner3SVG = () => (
  <View style={[styles.bannerBackground, { backgroundColor: '#1B3A1F' }]}>
    <Svg width="100%" height="85" viewBox="0 0 343 85" fill="none">
      <Rect width="343" height="85" rx="16" fill="#1B3A1F" />
      <Circle cx="300" cy="42" r="30" stroke="#A5D6A7" strokeWidth="6" strokeDasharray="40 10" />
      <Circle cx="300" cy="42" r="20" stroke="#FFCC02" strokeWidth="6" strokeDasharray="25 10" />
      <Circle cx="300" cy="42" r="10" stroke="#EF9A9A" strokeWidth="8" strokeDasharray="15 5" />
    </Svg>
    <View style={styles.bannerOverlay}>
      <Text style={styles.bannerTitle}>
        Fresh local market{"\n"}
        <Text style={[styles.bannerSubtitle, { color: '#A5D6A7' }]}>straight to your door</Text>
      </Text>
      <TouchableOpacity style={styles.tryNowButton}>
        <Text style={styles.tryNowText}>Explore</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CustomerHomeScreen = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [activeBottomTab, setActiveBottomTab] = useState('home');
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const bannerScrollRef = useRef(null);
  const bannerWidth = width - 32;

  useEffect(() => {
    if (activeBottomTab === 'home' && !activeCategory) {
      const interval = setInterval(() => {
        setActiveBanner(prev => {
          const next = (prev + 1) % 3;
          bannerScrollRef.current?.scrollTo({ x: next * bannerWidth, animated: true });
          return next;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeBottomTab, activeCategory]);

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
      case 'cart': return <CartScreen />;
      case 'orders': return <OrdersScreen />;
      case 'profile': return <ProfileScreen />;
      default: return (
        <>
          {/* Fixed Top Section */}
          <View style={styles.fixedHeader}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.locationContainer}>
                <PinIcon />
                <Text style={styles.locationText}>No 8, Arowoara Warewa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton}>
                <GridIcon />
              </TouchableOpacity>
            </View>

            {/* Welcome Text */}
            <Text style={styles.welcomeText}>What do you need ?</Text>

            {/* Search Bar */}
            <View style={styles.searchBar}>
              <SearchIcon />
              <TextInput 
                style={styles.searchInput}
                placeholder="Search food, groceries and items"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {/* Promo Banner Carousel */}
            <View style={styles.bannerContainer}>
              <ScrollView
                ref={bannerScrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                onMomentumScrollEnd={(e) => {
                  const index = Math.round(e.nativeEvent.contentOffset.x / bannerWidth);
                  setActiveBanner(index);
                }}
                style={{ width: bannerWidth }}
              >
                <View style={{ width: bannerWidth }}><BannerSVG /></View>
                <View style={{ width: bannerWidth }}><Banner2SVG /></View>
                <View style={{ width: bannerWidth }}><Banner3SVG /></View>
              </ScrollView>
            </View>

            {/* Carousel Indicators */}
            <View style={styles.indicators}>
              <View style={[styles.dot, activeBanner === 0 && styles.activeDot]} />
              <View style={[styles.dot, activeBanner === 1 && styles.activeDot]} />
              <View style={[styles.dot, activeBanner === 2 && styles.activeDot]} />
            </View>

            {/* Service Categories */}
            <View style={styles.categories}>
              <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFEBEE' }]} onPress={() => setActiveCategory('Food')}>
                <ClocheIcon color="#F06292" />
                <Text style={styles.categoryLabel}>Food</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFFDE7' }]} onPress={() => setActiveCategory('Shop')}>
                <ShopIcon color="#FBC02D" />
                <Text style={styles.categoryLabel}>Shop</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E0F2F1' }]} onPress={() => setActiveCategory('Local Market')}>
                <MarketIcon width={32} height={32} />
                <Text style={styles.categoryLabel}>Local Market</Text>
              </TouchableOpacity>
            </View>

            {/* Section Filters */}
            <View style={styles.filters}>
              <TouchableOpacity
                style={[styles.filterButton, activeTab === 'explore' && styles.activeFilter]}
                onPress={() => setActiveTab('explore')}
              >
                <Text style={activeTab === 'explore' ? styles.activeFilterText : styles.filterText}>Explore Stores</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.filterButton, activeTab === 'close' && styles.activeFilter]}
                onPress={() => setActiveTab('close')}
              >
                <Text style={activeTab === 'close' ? styles.activeFilterText : styles.filterText}>Close to you</Text>
              </TouchableOpacity>
            </View>

            {/* Explore Stores Cards */}
            {activeTab === 'explore' && (
              <>
                <TouchableOpacity style={styles.cardShadowClip} onPress={() => setActiveCategory('Food')}>
                  <View style={styles.storeCard}>
                    <Image source={require('../../ui_element/Food card.jpg')} style={styles.storeImage} resizeMode="cover" />
                    <View style={styles.storeInfo}>
                      <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>Giant Supermarket</Text>
                        <View style={styles.closedBadge}><Text style={styles.closedText}>Closed</Text></View>
                      </View>
                      <View style={styles.storeMeta}>
                        <View style={styles.metaItem}><PinIcon /><Text style={styles.metaText}>Warewa</Text></View>
                        <View style={[styles.metaItem, { marginLeft: 16 }]}><Text style={styles.metaText}>🚲 10 - 20 mins</Text></View>
                      </View>
                      <TouchableOpacity style={[styles.orderButton, styles.orderButtonDisabled]} disabled>
                        <Text style={styles.orderButtonTextDisabled}>Order now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardShadowClip} onPress={() => setActiveCategory('Food')}>
                  <View style={styles.storeCard}>
                    <Image source={require('../../ui_element/Food card.jpg')} style={styles.storeImage} resizeMode="cover" />
                    <View style={styles.storeInfo}>
                      <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>Mama's Kitchen</Text>
                        <View style={[styles.closedBadge, { backgroundColor: '#E8F5E9' }]}><Text style={[styles.closedText, { color: '#038537' }]}>Open</Text></View>
                      </View>
                      <View style={styles.storeMeta}>
                        <View style={styles.metaItem}><PinIcon /><Text style={styles.metaText}>Berger</Text></View>
                        <View style={[styles.metaItem, { marginLeft: 16 }]}><Text style={styles.metaText}>🚲 5 - 15 mins</Text></View>
                      </View>
                      <TouchableOpacity style={styles.orderButton}><Text style={styles.orderButtonText}>Order now</Text></TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cardShadowClip, { marginBottom: 100 }]} onPress={() => setActiveCategory('Food')}>
                  <View style={styles.storeCard}>
                    <Image source={require('../../ui_element/Food card.jpg')} style={styles.storeImage} resizeMode="cover" />
                    <View style={styles.storeInfo}>
                      <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>FreshMart Store</Text>
                        <View style={[styles.closedBadge, { backgroundColor: '#E8F5E9' }]}><Text style={[styles.closedText, { color: '#038537' }]}>Open</Text></View>
                      </View>
                      <View style={styles.storeMeta}>
                        <View style={styles.metaItem}><PinIcon /><Text style={styles.metaText}>Ojodu</Text></View>
                        <View style={[styles.metaItem, { marginLeft: 16 }]}><Text style={styles.metaText}>🚲 15 - 25 mins</Text></View>
                      </View>
                      <TouchableOpacity style={styles.orderButton}><Text style={styles.orderButtonText}>Order now</Text></TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}

            {/* Close to You Cards */}
            {activeTab === 'close' && (
              <>
                <TouchableOpacity style={styles.cardShadowClip} onPress={() => setActiveCategory('Food')}>
                  <View style={styles.storeCard}>
                    <Image source={require('../../ui_element/Food card.jpg')} style={styles.storeImage} resizeMode="cover" />
                    <View style={styles.storeInfo}>
                      <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>Nearby Bites</Text>
                        <View style={[styles.closedBadge, { backgroundColor: '#E8F5E9' }]}><Text style={[styles.closedText, { color: '#038537' }]}>Open</Text></View>
                      </View>
                      <View style={styles.storeMeta}>
                        <View style={styles.metaItem}><PinIcon /><Text style={styles.metaText}>0.3 km away</Text></View>
                        <View style={[styles.metaItem, { marginLeft: 16 }]}><Text style={styles.metaText}>🚲 3 - 8 mins</Text></View>
                      </View>
                      <TouchableOpacity style={styles.orderButton}><Text style={styles.orderButtonText}>Order now</Text></TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardShadowClip} onPress={() => setActiveCategory('Shop')}>
                  <View style={styles.storeCard}>
                    <Image source={require('../../ui_element/Food card.jpg')} style={styles.storeImage} resizeMode="cover" />
                    <View style={styles.storeInfo}>
                      <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>Corner Store</Text>
                        <View style={[styles.closedBadge, { backgroundColor: '#E8F5E9' }]}><Text style={[styles.closedText, { color: '#038537' }]}>Open</Text></View>
                      </View>
                      <View style={styles.storeMeta}>
                        <View style={styles.metaItem}><PinIcon /><Text style={styles.metaText}>0.5 km away</Text></View>
                        <View style={[styles.metaItem, { marginLeft: 16 }]}><Text style={styles.metaText}>🚲 5 - 10 mins</Text></View>
                      </View>
                      <TouchableOpacity style={styles.orderButton}><Text style={styles.orderButtonText}>Order now</Text></TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cardShadowClip, { marginBottom: 100 }]} onPress={() => setActiveCategory('Local Market')}>
                  <View style={styles.storeCard}>
                    <Image source={require('../../ui_element/Food card.jpg')} style={styles.storeImage} resizeMode="cover" />
                    <View style={styles.storeInfo}>
                      <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>Quick Mart</Text>
                        <View style={styles.closedBadge}><Text style={styles.closedText}>Closed</Text></View>
                      </View>
                      <View style={styles.storeMeta}>
                        <View style={styles.metaItem}><PinIcon /><Text style={styles.metaText}>0.8 km away</Text></View>
                        <View style={[styles.metaItem, { marginLeft: 16 }]}><Text style={styles.metaText}>🚲 8 - 12 mins</Text></View>
                      </View>
                      <TouchableOpacity style={[styles.orderButton, styles.orderButtonDisabled]} disabled>
                        <Text style={styles.orderButtonTextDisabled}>Order now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}
            
            {/* Footer */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Errand Rider</Text>
            </View>

          </ScrollView>
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderContent()}

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('home')}>
          <HomeTabIcon active={activeBottomTab === 'home'} />
          <Text style={[styles.tabLabel, activeBottomTab === 'home' && { color: '#038537' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('cart')}>
          <CartTabIcon active={activeBottomTab === 'cart'} />
          <Text style={[styles.tabLabel, activeBottomTab === 'cart' && { color: '#038537' }]}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('orders')}>
          <OrdersTabIcon active={activeBottomTab === 'orders'} />
          <Text style={[styles.tabLabel, activeBottomTab === 'orders' && { color: '#038537' }]}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveBottomTab('profile')}>
          <ProfileTabIcon active={activeBottomTab === 'profile'} />
          <Text style={[styles.tabLabel, activeBottomTab === 'profile' && { color: '#038537' }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fixedHeader: {
    backgroundColor: '#ffffff',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: {
    fontFamily: 'Geist_400Regular',
    fontSize: 17,
    color: '#333',
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'Geist_700Bold',
    fontSize: 28,
    color: '#1A1A1A',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 16,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Geist_400Regular',
    fontSize: 14,
    color: '#1A1A1A',
  },
  bannerContainer: {
    marginHorizontal: 16,
    height: 85,
  },
  bannerBackground: {
    width: '100%',
    height: 85,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#FFB300',
  },
  tryNowButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  tryNowText: {
    color: '#000',
    fontSize: 10,
    fontWeight: '700',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
    marginBottom: 24,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E0E0E0',
  },
  activeDot: {
    backgroundColor: '#038537',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  categoryCard: {
    width: (width - 48) / 3,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  categoryLabel: {
    fontFamily: 'Geist_400Regular',
    fontSize: 17,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  filters: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  activeFilter: {
    backgroundColor: '#038537',
  },
  filterText: {
    color: '#666',
    fontSize: 14,
  },
  activeFilterText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  cardShadowClip: {
    marginHorizontal: 16,
    marginBottom: 16,
    // Clip shadow on top and sides, allow only bottom shadow
    overflow: 'visible',
    paddingBottom: 6,
    // Clip top using negative margin + overflow hidden trick
    paddingTop: 0,
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
    padding: 16,
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
  closedBadge: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  closedText: {
    color: '#E53935',
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
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingBottom: 20,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  tabIconActive: {
    width: 20,
    height: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  tabLabel: {
    fontSize: 14,
    color: '#999',
  },
  footerContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  footerText: {
    textAlign: 'center',
    color: '#DEDEDE',
    fontSize: 48,
    fontFamily: 'PlayfairDisplay_700Bold_Italic',
    letterSpacing: 0.5,
  }
});

export default CustomerHomeScreen;
