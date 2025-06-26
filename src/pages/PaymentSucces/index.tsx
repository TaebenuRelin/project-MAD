import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const PaymentSucces = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <View style={styles.circle}>
            <Image
              source={require('../../assets/Check.png')}
              style={styles.icon}
            />
          </View>
        </View>
        <Gap height={18} />
        <Text style={styles.title}>Unggahan Pembayaran Selesai</Text>
        <Gap height={12} />
        <Text style={styles.desc}>
          Pencarian Anda telah dikirim ke nomor telepon dan email anda untuk
          melihat status pembayaran anda
        </Text>
        <Gap height={28} />
        <Button
          text="Buka Pesanan Saya"
          onPress={() => {}}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 36,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  iconWrap: {
    alignItems: 'center',
    marginBottom: 0,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8DBBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#222',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 0,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#222',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
  },
});

export default PaymentSucces;
