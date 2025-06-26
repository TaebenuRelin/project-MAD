import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/molecules/Header';
import ProductListItem from '../ProductListItem';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/molecules/TextInput';
import BottomNavigator from '../../components/molecules/BottomNavigator';

const products = [
  {
    image: require('../../assets/vector.png'),
    name: 'Shampoo',
    quantity: 3,
    price: 90000,
  },
  {
    image: require('../../assets/vector.png'),
    name: 'Indomie Goreng',
    quantity: 1,
    price: 3000,
  },
];

const paymentMethods = [
  {label: 'Transfer Manual', value: 'transfer'},
  {label: 'COD', value: 'cod'},
  {label: 'E-Wallet', value: 'ewallet'},
];

const Checkout = ({navigation}: {navigation: any}) => {
  const [selectedPayment, setSelectedPayment] = useState('transfer');

  const subtotal = products.reduce((sum, p) => sum + p.price, 0);
  const ongkir = 10000;
  const total = subtotal + ongkir;

  return (
    <View style={{flex: 1, backgroundColor: '#222'}}>
      <View style={styles.headerWrap}>
        <Text style={styles.haiText}>Hai Cimberly</Text>
        <Header
          text="Daftar Pesanan"
          onBack={() => navigation.replace('ListProduk')}
        />
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.listWrap}>
          {products.map((item, idx) => (
            <ProductListItem key={idx} {...item} />
          ))}
        </View>
        <View style={styles.line} />
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>
            Rp. {subtotal.toLocaleString('id-ID')}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Ongkir</Text>
          <Text style={styles.value}>Rp. {ongkir.toLocaleString('id-ID')}</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.labelBold}>Total Bayar</Text>
          <Text style={styles.valueBold}>
            RP. {total.toLocaleString('id-ID')}
          </Text>
        </View>
        <Gap height={18} />
        <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
        {paymentMethods.map(m => (
          <TouchableOpacity
            key={m.value}
            style={styles.radioRow}
            onPress={() => setSelectedPayment(m.value)}>
            <View
              style={[
                styles.radioOuter,
                selectedPayment === m.value && styles.radioOuterActive,
              ]}>
              {selectedPayment === m.value && (
                <View style={styles.radioInner} />
              )}
            </View>
            <Text style={styles.radioLabel}>{m.label}</Text>
          </TouchableOpacity>
        ))}
        <Gap height={18} />
        <Text style={styles.sectionTitle}>Informasi Pengiriman</Text>
        <TextInput
          label="Nama Penerima"
          placeholder="Nama Penerima"
          style={styles.input}
        />
        <Gap height={10} />
        <TextInput label="No Hp" placeholder="No Hp" style={styles.input} />
        <Gap height={10} />
        <TextInput
          label="Alamat Pengirim"
          placeholder="Alamat Pengirim"
          style={styles.input}
        />
        <Gap height={24} />
        <Button
          text="Lanjut Ke Pembayaran"
          onPress={() => navigation.navigate('Payment')}
          style={styles.payBtn}
        />
      </ScrollView>
      <BottomNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: '#004AAD',
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  haiText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 18,
  },
  listWrap: {
    marginTop: 18,
    marginBottom: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    marginVertical: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  value: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  labelBold: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  valueBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-SemiBold',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
    marginTop: 8,
    color: '#222',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#222',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  radioOuterActive: {
    borderColor: '#004AAD',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#004AAD',
  },
  radioLabel: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    marginBottom: 0,
  },
  payBtn: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Checkout;
