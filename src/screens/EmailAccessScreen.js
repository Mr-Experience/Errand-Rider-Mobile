import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const EmailAccessScreen = ({ onBack, onNext }) => {
  const [email, setEmail] = useState('');

  const validateEmail = (text) => {
    return text.includes('@') && text.includes('.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your gmail</Text>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity 
          style={[styles.nextButton, !validateEmail(email) && styles.disabledButton]} 
          activeOpacity={0.8}
          onPress={onNext}
          disabled={!validateEmail(email)}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
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
    fontFamily: 'Geist_400Regular',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 32,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 24,
  },
  input: {
    fontFamily: 'Geist_400Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
  nextButton: {
    backgroundColor: '#038537',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  nextText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EmailAccessScreen;
