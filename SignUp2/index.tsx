import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';

const SignUp2 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.page}>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/Account.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            label=""
            placeholder="Cimberly Kim"
            style={styles.input}
            secureTextEntry={false}
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            label=""
            placeholder="S222@student.unklab.ac.id"
            style={styles.input}
            secureTextEntry={false}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            label=""
            placeholder="********"
            secureTextEntry
            style={styles.input}
          />
          <Button
            text="Selanjutnya"
            onPress={() => navigation.replace('Menu')}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    paddingBottom: 8,
    backgroundColor: 'white',
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    top: 32,
    zIndex: 2,
  },
  backText: {
    fontSize: 28,
    color: '#222',
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  title: {
    fontSize: 32,
    color: '#111',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  formWrapper: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#222',
    marginBottom: 4,
    marginTop: 10,
    textAlign: 'left',
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 24,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
