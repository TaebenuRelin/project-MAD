import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/molecules/Header';
import Search from '../../components/molecules/Search';
import Product from '../../components/molecules/Product';
import BottomNavigator from '../../components/molecules/BottomNavigator';

const DATA = [
  {
    id: '1',
    name: 'mie goreng',
    price: '20.000 Rp',
    image: require('../../assets/Miegoreng.png'),
  },
  {
    id: '2',
    name: 'Coca-cola',
    price: '5.000 Rp',
    image: require('../../assets/Coca-Cola.png'),
  },
  {
    id: '3',
    name: 'Nivea',
    price: '20.000 Rp',
    image: require('../../assets/Nivea.png'),
  },
  {
    id: '4',
    name: 'Pop corn',
    price: '15.000 Rp',
    image: require('../../assets/Popcorn.png'),
  },
  {
    id: '5',
    name: 'Jeans',
    price: '100.000 Rp 3/pcs',
    image: require('../../assets/Celana.png'),
  },
  {
    id: '6',
    name: 'Alat dapur',
    price: '35.000 Rp',
    image: require('../../assets/Parabot.png'),
  },
];

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 20;
const gap = 12;
const itemWidth = (screenWidth - horizontalPadding * 2 - gap) / 2;

const ListProduk = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Header
          text="Daftar Produk"
          onBack={() => navigation.replace('Menu')}
        />
      </View>
      <Search />
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={[
          styles.listContent,
          {paddingHorizontal: horizontalPadding},
        ]}
        renderItem={({item, index}) => (
          <View
            style={{
              width: itemWidth,
              alignItems: 'center',
              marginRight: index % 2 === 0 ? gap : 0,
              marginBottom: 16,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
              <Product image={item.image} name={item.name} price={item.price} />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <BottomNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrap: {
    backgroundColor: '#004AAD',
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
});

export default ListProduk;
