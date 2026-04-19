import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Illustration from '../../assets/images/onboarding_illustration.svg';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ onContinue, onRiderLogin }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Illustration width={width * 0.9} height={width * 0.9} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>
          Everything You Need,{'\n'}Right to Your Door
        </Text>
        
        <Text style={styles.subtitle}>
          Shop, send packages, and get what you need without stepping out. Fast and reliable
        </Text>
        
        <TouchableOpacity 
          style={styles.continueButton} 
          activeOpacity={0.8}
          onPress={onContinue}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.riderLoginContainer} 
          activeOpacity={0.7}
          onPress={onRiderLogin}
        >
          <Text style={styles.riderLoginText}>Login as a rider  →</Text>
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
  illustrationContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Geist_700Bold',
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
  },
  subtitle: {
    fontFamily: 'Geist_400Regular',
    fontSize: 17,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  continueButton: {
    width: '100%',
    backgroundColor: '#038537',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  continueText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  riderLoginContainer: {
    paddingVertical: 10,
  },
  riderLoginText: {
    fontFamily: 'Geist_400Regular',
    color: '#666666',
    fontSize: 17,
  },
});

export default OnboardingScreen;

