import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import Svg, {Path} from 'react-native-svg';

const Payment = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F7F7F7'}}>
      <View style={styles.headerWrap}>
        <Header text="KLABAT STORE" onBack={() => {}} />
        <View style={styles.logoSvgWrap}>
          <Svg width={32} height={32} viewBox="0 0 84 87" fill="none">
            <Path
              d="M10.5 21.75L21 7.25H63L73.5 21.75M10.5 21.75V72.5C10.5 74.4228 11.2375 76.2669 12.5503 77.6265C13.863 78.9862 15.6435 79.75 17.5 79.75H66.5C68.3565 79.75 70.137 78.9862 71.4497 77.6265C72.7625 76.2669 73.5 74.4228 73.5 72.5V21.75M10.5 21.75H73.5M56 36.25C56 40.0956 54.525 43.7838 51.8995 46.503C49.274 49.2223 45.713 50.75 42 50.75C38.287 50.75 34.726 49.2223 32.1005 46.503C29.475 43.7838 28 40.0956 28 36.25"
              stroke="#F3F3F3"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.rectangle}>
          <View style={{flex: 1}}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>Rp 103.000</Text>
            <Text style={styles.orderId}>Order ID#22211345</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.bayarDalam}>Bayar dalam</Text>
            <Text style={styles.timer}>00:43:20</Text>
          </View>
        </View>
        <Gap height={24} />
        <View style={[styles.rectangle, styles.manualTransferRect]}>
          <Text style={styles.sectionTitle}>Manual Transfer</Text>
          <View style={styles.bankRow}>
            <Image
              source={require('../../assets/BRI.png')}
              style={styles.bankLogo}
            />
            <View style={{marginLeft: 14}}>
              <Text style={styles.bankName}>Bank BRI</Text>
              <Text style={styles.bankStore}>Klabat Store</Text>
            </View>
          </View>
          <View style={styles.rekBox}>
            <Text style={styles.rekNum}>0099234513480</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/copy.png')}
                style={styles.copyIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={24} />
        <View style={[styles.rectangle, styles.uploadRectangle]}>
          <Text style={styles.sectionTitle}>Upload Bukti Pembayaran</Text>
          <View style={styles.uploadBox}>
            <Image
              source={require('../../assets/file.png')}
              style={styles.uploadIcon}
            />
            <Text style={styles.uploadText}>Upload Here</Text>
            <Text style={styles.uploadDesc}>
              Max 5mb{Platform.OS === 'web' ? '\n' : '\n'}format : jpg, png, img
            </Text>
          </View>
        </View>
        <Gap height={24} />
        <TouchableOpacity style={styles.rectangle}>
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>Detail Transaksi</Text>
            <Image
              source={require('../../assets/chevronright.png')}
              style={styles.chevron}
            />
          </View>
        </TouchableOpacity>
        <Gap height={32} />
      </ScrollView>
      <View style={styles.bottomBtnWrap}>
        <Button
          text="saya sudah transfer"
          onPress={() => navigation.replace('PaymentSucces')}
          style={styles.payBtn}
        />
      </View>
    </View>
  );
};

const RECT_RADIUS = 16;
const RECT_SHADOW = {
  shadowColor: '#000',
  shadowOpacity: 0.07,
  shadowRadius: 8,
  shadowOffset: {width: 0, height: 2},
  elevation: 3,
};

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: '#004AAD',
    paddingTop: Platform.OS === 'ios' ? 48 : 24,
    paddingBottom: 16,
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  logoSvgWrap: {
    position: 'absolute',
    right: 24,
    top: Platform.OS === 'ios' ? 54 : 30,
    zIndex: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
  },
  rectangle: {
    backgroundColor: '#fff',
    borderRadius: RECT_RADIUS,
    padding: 20,
    marginBottom: 0,
    ...RECT_SHADOW,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: 70,
  },
  uploadRectangle: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F3F3F3',
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  totalLabel: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  totalValue: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
    marginTop: 2,
  },
  orderId: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },
  bayarDalam: {
    fontSize: 12,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginBottom: 2,
  },
  timer: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    marginTop: 0,
    color: '#222',
  },
  bankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 10,
    width: '100%',
  },
  bankLogo: {
    width: 56,
    height: 34,
    resizeMode: 'contain',
  },
  bankName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
  },
  bankStore: {
    fontSize: 13,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },
  rekBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
    width: '100%',
  },
  rekNum: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#222',
    flex: 1,
  },
  copyIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  uploadBox: {
    backgroundColor: '#F3F3F3',
    borderRadius: RECT_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
    marginHorizontal: 20,
    marginBottom: 0,
  },
  uploadIcon: {
    width: 54,
    height: 54,
    marginBottom: 10,
    tintColor: '#888',
    resizeMode: 'contain',
  },
  uploadText: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginBottom: 2,
  },
  uploadDesc: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 2,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  detailText: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  chevron: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bottomBtnWrap: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 32 : 18,
    paddingTop: 0,
  },
  payBtn: {
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 8,
  },
  manualTransferRect: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 0,
  },
});

export default Payment;
