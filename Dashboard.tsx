import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hai, Cimberly</Text>
          <Text style={styles.subText}>apa yang akan kamu beli hari ini ?</Text>
        </View>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/women/75.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Cari Produk yang ingin anda beli"
      />

      {/* Categories */}
      <View style={styles.categoryRow}>
        <CategoryItem icon="🍔" label="makanan" />
        <CategoryItem icon="🍳" label="alat dapur" />
        <CategoryItem icon="🛁" label="alat mandi" />
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Section: Terdekat */}
        <Text style={styles.sectionTitle}>Terdekat dengan anda</Text>
        <View style={styles.productRow}>
          <ProductItem
            image="https://cdn.pixabay.com/photo/2020/01/28/18/40/nasi-goreng-4806683_1280.jpg"
            title="Nasi goreng"
            price="15.000 Rp"
          />
          <ProductItem
            image="https://cdn.pixabay.com/photo/2016/11/19/14/00/clothes-1839935_1280.jpg"
            title="Kemeja"
            price="100.000 Rp 3/pcs"
          />
        </View>

        {/* Section: Produk Lainnya */}
        <Text style={styles.sectionTitleBlue}>Jangan Lupa Produk Lainnya</Text>
        <View style={styles.productRow}>
          <ProductItem
            image="https://cdn.pixabay.com/photo/2017/05/12/08/29/shampoo-2308754_1280.jpg"
            title="Shampoo"
            price="30.000"
          />
          <ProductItem
            image="https://cdn.pixabay.com/photo/2020/12/21/13/32/chocolate-5847441_1280.jpg"
            title="Cokelat"
            price="15.000 Rp"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="#0047AB" />
        <Ionicons name="cart" size={28} color="#A0A0A0" />
        <Ionicons name="person" size={28} color="#A0A0A0" />
      </View>
    </View>
  );
};

// Components
const CategoryItem = ({ icon, label }: { icon: string; label: string }) => (
  <View style={styles.categoryItem}>
    <Text style={styles.emoji}>{icon}</Text>
    <Text style={styles.categoryText}>{label}</Text>
  </View>
);

const ProductItem = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) => (
  <View style={styles.productItem}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <Text>{title}</Text>
    <Text style={{ fontWeight: 'bold' }}>{price}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  subText: { color: 'white' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  searchBar: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  categoryRow: { flexDirection: 'row', justifyContent: 'space-around' },
  categoryItem: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    width: 90,
  },
  emoji: { fontSize: 30 },
  categoryText: { marginTop: 6, fontSize: 14 },
  sectionTitle: { marginTop: 20, marginBottom: 10, fontWeight: 'bold' },
  sectionTitleBlue: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#0047AB',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
});

export default Dashboard;
