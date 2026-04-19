import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const VerifyEmailScreen = ({ onBack, onConfirm }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Verify Email Address</Text>
        <Text style={styles.subtitle}>
          We have sent verification code to your email address now
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.confirmButton, otp.some(d => d === '') && styles.disabledButton]} 
            onPress={onConfirm}
            disabled={otp.some(d => d === '')}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendText}>Resend (00:05)</Text>
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
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 28,
    color: '#1A1A1A',
    fontWeight: '300',
    lineHeight: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Geist_700Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 40,
    gap: 12,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Geist_700Bold',
    color: '#1A1A1A',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#038537',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  resendButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    color: '#666666',
    fontSize: 15,
    fontFamily: 'Geist_400Regular',
  },
});

export default VerifyEmailScreen;
