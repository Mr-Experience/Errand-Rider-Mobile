import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Geist_400Regular, Geist_700Bold } from '@expo-google-fonts/geist';
import { PlayfairDisplay_700Bold_Italic } from '@expo-google-fonts/playfair-display';
import Card3 from './ui_element/card_3.svg';
import Logo from './ui_element/Logo.svg';
import OnboardingScreen from './src/screens/OnboardingScreen';
import CustomerAccessScreen from './src/screens/CustomerAccessScreen';
import RiderAccessScreen from './src/screens/RiderAccessScreen';
import EmailAccessScreen from './src/screens/EmailAccessScreen';
import VerifyMobileScreen from './src/screens/VerifyMobileScreen';
import VerifyEmailScreen from './src/screens/VerifyEmailScreen';
import CustomerHomeScreen from './src/screens/CustomerHomeScreen';

const { width, height } = Dimensions.get('window');

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showCustomerAccess, setShowCustomerAccess] = useState(false);
  const [showRiderAccess, setShowRiderAccess] = useState(false);
  const [showEmailAccess, setShowEmailAccess] = useState(false);
  const [showVerifyMobile, setShowVerifyMobile] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Geist_400Regular,
    Geist_700Bold,
    PlayfairDisplay_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppIsReady(true);
      SplashScreen.hideAsync().catch(() => {});

      // Start 5 second timer to transition to onboarding
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, fontError]);

  if (!appIsReady) {
    return null;
  }

  // Show Home Screen
  if (showHome) {
    return (
      <>
        <CustomerHomeScreen />
        <StatusBar style="dark" />
      </>
    );
  }

  // Show Verify Email Screen
  if (showVerifyEmail) {
    return (
      <>
        <VerifyEmailScreen 
          onBack={() => setShowVerifyEmail(false)}
          onConfirm={() => setShowHome(true)}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  // Show Verify Mobile Screen
  if (showVerifyMobile) {
    return (
      <>
        <VerifyMobileScreen 
          onBack={() => setShowVerifyMobile(false)}
          onConfirm={() => setShowHome(true)}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  // Show Email Access Screen
  if (showEmailAccess) {
    return (
      <>
        <EmailAccessScreen 
          onBack={() => setShowEmailAccess(false)}
          onNext={() => setShowVerifyEmail(true)}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  // Show Rider Access Screen
  if (showRiderAccess) {
    return (
      <>
        <RiderAccessScreen 
          onContinue={() => setShowVerifyMobile(true)} 
          onBack={() => setShowRiderAccess(false)}
          onEmailLogin={() => setShowEmailAccess(true)}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  // Show Customer Access Screen
  if (showCustomerAccess) {
    return (
      <>
        <CustomerAccessScreen 
          onContinue={() => setShowVerifyMobile(true)} 
          onBack={() => setShowCustomerAccess(false)}
          onEmailLogin={() => setShowEmailAccess(true)}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  // Show Onboarding Screen after 5 seconds
  if (showOnboarding) {
    return (
      <>
        <OnboardingScreen 
          onContinue={() => setShowCustomerAccess(true)} 
          onRiderLogin={() => setShowRiderAccess(true)}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  // JS-side Splash Screen
  return (
    <View style={styles.container}>
      {/* Centered Logo and Text */}
      <View style={styles.contentContainer}>
        <Logo width={48} height={48} />
        <Text style={styles.text}>Errand Riders</Text>
      </View>
      
      {/* Decorative element at bottom right */}
      <View style={styles.decorContainer}>
        <Card3 
          width="100%" 
          height="100%"
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#038537',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 20,
  },
  text: {
    fontFamily: 'Geist_700Bold',
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  decorContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: width * 0.7,
    height: width * 0.7,
    opacity: 0.9,
  },
});
