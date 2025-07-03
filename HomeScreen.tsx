// src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Svg, Rect, Path } from 'react-native-svg';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0047AB" />

      {/* Hanya ikon yang bisa diklik */}
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Svg width={100} height={100} viewBox="0 0 64 64" fill="none">
          <Path
            d="M20 24V20C20 15.58 23.58 12 28 12C32.42 12 36 15.58 36 20V24"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <Rect
            x="12"
            y="24"
            width="40"
            height="28"
            rx="4"
            stroke="white"
            strokeWidth="2.5"
          />
        </Svg>
      </TouchableOpacity>

      <Text style={styles.text}>KLABAT STORE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0047AB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default HomeScreen;
