import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Dimensions } from 'react-native';
import Shield from '../../ui_element/Shield.svg';
import Goggle from '../../ui_element/Goggle.svg';
import Email from '../../ui_element/Email.svg';

const { width } = Dimensions.get('window');

const CustomerAccessScreen = ({ onContinue, onBack, onEmailLogin }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handlePhoneChange = (text) => {
    // Only allow numbers and max 10 digits
    const cleaned = text.replace(/[^0-9]/g, '');
    if (cleaned.length <= 10) {
      setPhoneNumber(cleaned);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>‹</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Shield width={24} height={24} />
        <Text style={styles.headerText}>Enter Mobile Number</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.phoneInputWrapper}>
          <Text style={styles.countryCode}>+234</Text>
          <TextInput 
            style={styles.input}
            placeholder="Mobile number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            maxLength={10}
          />
        </View>

        <TouchableOpacity 
          style={[styles.continueButton, phoneNumber.length < 10 && styles.disabledButton]} 
          activeOpacity={0.8}
          onPress={onContinue}
          disabled={phoneNumber.length < 10}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <Goggle width={24} height={24} />
          <Text style={styles.socialButtonText}>Continue with Goggle</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton} 
          activeOpacity={0.7}
          onPress={onEmailLogin}
        >
          <Email width={24} height={24} />
          <Text style={styles.socialButtonText}>Continue with Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you have agree to our{'\n'}terms and conditions
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 52,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 28,
    color: '#1A1A1A',
    fontWeight: '300',
    lineHeight: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
    paddingHorizontal: 4,
    gap: 12,
  },
  headerText: {
    fontFamily: 'Geist_400Regular',
    fontSize: 20,
    color: '#1A1A1A',
  },
  inputContainer: {
    marginBottom: 40,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  countryCode: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
    marginRight: 12,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
  continueButton: {
    backgroundColor: '#038537',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  continueText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  separatorText: {
    marginHorizontal: 16,
    color: '#666666',
    fontFamily: 'Geist_400Regular',
    fontSize: 15,
  },
  socialContainer: {
    gap: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    height: 56,
    borderRadius: 12,
    gap: 12,
  },
  socialButtonText: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
  },
  footerText: {
    textAlign: 'center',
    color: '#666666',
    fontFamily: 'Geist_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default CustomerAccessScreen;
