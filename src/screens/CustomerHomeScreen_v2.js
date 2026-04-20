import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

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

const WarningIcon = () => (
  <Svg width="64" height="64" viewBox="0 0 24 24" fill="none">
    <Path d="M12 8V12" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 16H12.01" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M10.29 3.86L1.82 18C1.64537 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81442 19.9904C1.98734 20.2937 2.23611 20.5468 2.5359 20.7243C2.83569 20.9018 3.1764 20.9972 3.524 21H20.476C20.8236 20.9972 21.1643 20.9018 21.4641 20.7243C21.7639 20.5468 22.0127 20.2937 22.1856 19.9904C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32313 12.9812 3.15449C12.6817 2.98585 12.3437 2.89746 12 2.89746C11.6563 2.89746 11.3183 2.98585 11.0188 3.15449C10.7193 3.32313 10.4683 3.56611 10.29 3.86V3.86Z" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const CustomerHomeScreen_v2 = ({ onToggle }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <PinIcon />
          <Text style={styles.locationText}>No 8, Arowoara Warewa</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={onToggle}>
          <GridIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <WarningIcon />
        <Text style={styles.message}>Not yet available in your location</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  locationText: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingBottom: 100, // Offset for bottom nav to keep it truly centered
  },
  message: {
    fontFamily: 'Geist_400Regular',
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 32,
  },
});

export default CustomerHomeScreen_v2;
