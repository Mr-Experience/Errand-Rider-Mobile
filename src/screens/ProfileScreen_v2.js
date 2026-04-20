import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const ArrowRightIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <Path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const UserIcon = () => (
  <Svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <Path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Circle cx="12" cy="7" r="4" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ProfileOption = ({ icon, label }) => (
  <TouchableOpacity style={styles.optionRow}>
    <View style={styles.optionLeft}>
      <Image source={icon} style={styles.optionIcon} />
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
    <ArrowRightIcon />
  </TouchableOpacity>
);

const ProfileScreen_v2 = () => {
  const options = [
    { label: 'Manage Profile', icon: require('../../assets/3d_icons/user.png') },
    { label: 'Address Management', icon: require('../../assets/3d_icons/location.png') },
    { label: 'Orders & Activity', icon: require('../../assets/3d_icons/orders.png') },
    { label: 'Preference & Settings', icon: require('../../assets/3d_icons/settings.png') },
    { label: 'Promotions', icon: require('../../assets/3d_icons/promo.png') },
    { label: 'Support & Help', icon: require('../../assets/3d_icons/help.png') },
    { label: 'Security', icon: require('../../assets/3d_icons/security.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Avatar Placeholder */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
             <UserIcon />
          </View>
        </View>

        {/* Invite Banner */}
        <TouchableOpacity style={styles.inviteBanner}>
          <View style={styles.inviteContent}>
            <View style={styles.inviteIconCircle}>
              <Image source={require('../../assets/3d_icons/promo.png')} style={styles.bannerIcon} />
            </View>
            <Text style={styles.inviteText}>Invite friends</Text>
          </View>
        </TouchableOpacity>

        {/* Options List */}
        <View style={styles.optionsContainer}>
          {options.map((item, index) => (
            <ProfileOption key={index} label={item.label} icon={item.icon} />
          ))}
        </View>
        <View style={{ height: 100 }} />
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
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Geist_700Bold',
    fontSize: 28,
    color: '#1A1A1A',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  inviteBanner: {
    backgroundColor: '#FFF9F9',
    borderRadius: 16,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  inviteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inviteIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  inviteText: {
    fontFamily: 'Geist_700Bold',
    fontSize: 16,
    color: '#1A1A1A',
  },
  optionsContainer: {
    gap: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  optionIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  optionLabel: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
});

export default ProfileScreen_v2;
