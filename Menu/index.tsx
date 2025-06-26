import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import HeaderMenu from '../../components/molecules/HeaderMenu';
import Search from '../../components/molecules/Search';
import Category from '../../components/molecules/Category';
import Product from '../../components/molecules/Product';
import Gap from '../../components/atoms/Gap';
import BottomNavigator from '../../components/molecules/BottomNavigator';

const Menu = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.page}>
      <HeaderMenu />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContent}>
          <Search />
          <Category />
          <Gap height={20} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Terdekat dengan anda</Text>
            <View style={styles.productList}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ListProduk')}>
                <Product
                  name="Nasi goreng"
                  price="15.000 Rp"
                  image={require('../../assets/Nasigoreng.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ListProduk')}>
                <Product
                  name="Kemeja"
                  price="100.000 Rp 3/pcs"
                  image={require('../../assets/Pakaian.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Jangan Lupa Produk Lainnya</Text>
            <View style={styles.productList}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ListProduk')}>
                <Product
                  name="Shampoo"
                  price="30.000"
                  image={require('../../assets/Shampoo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ListProduk')}>
                <Product
                  name="Cokelat"
                  price="15.000 Rp"
                  image={require('../../assets/Chocolate.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavigator />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#004AAD',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
