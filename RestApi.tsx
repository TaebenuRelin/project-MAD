import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';

const RestApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => {
        console.log('API response:', res.data.data);
        setUsers(res.data.data);
      })
      .catch(err => {
        console.log('API Error:', err);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {users.map(user => (
        <View key={user.id} style={styles.card}>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
          <View>
            <Text style={styles.name}>
              {user.first_name} {user.last_name}
            </Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
});

export default RestApi;
