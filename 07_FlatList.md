# Flat List in React Native

**Note :** 

- Flatlist is used when we have to deal with the large set of data.

- If data is of small size, use scrollview instead.

### Dummy data set : 
```js
const dummy = [
  {
    id: 1,
    name: 'Muskan',
    email: 'muskan0101@gmail.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 2,
    name: 'Rahul',
    email: 'rahul02@gmail.com',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 3,
    name: 'Aditi',
    email: 'aditi03@gmail.com',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
  },
  {
    id: 4,
    name: 'Rohan',
    email: 'rohan04@gmail.com',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
  {
    id: 5,
    name: 'Sneha',
    email: 'sneha05@gmail.com',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    id: 6,
    name: 'Aarav',
    email: 'aarav06@gmail.com',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
  },
  {
    id: 7,
    name: 'Meera',
    email: 'meera07@gmail.com',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 8,
    name: 'Vivaan',
    email: 'vivaan08@gmail.com',
    image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg',
  },
  {
    id: 9,
    name: 'Diya',
    email: 'diya09@gmail.com',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 10,
    name: 'Kabir',
    email: 'kabir10@gmail.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 11,
    name: 'Saanvi',
    email: 'saanvi11@gmail.com',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
  {
    id: 12,
    name: 'Aryan',
    email: 'aryan12@gmail.com',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    id: 13,
    name: 'Tara',
    email: 'tara13@gmail.com',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 14,
    name: 'Arjun',
    email: 'arjun14@gmail.com',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
  },
  {
    id: 15,
    name: 'Priya',
    email: 'priya15@gmail.com',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
  },
  {
    id: 16,
    name: 'Karan',
    email: 'karan16@gmail.com',
    image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg',
  },
  {
    id: 17,
    name: 'Nisha',
    email: 'nisha17@gmail.com',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 18,
    name: 'Ayaan',
    email: 'ayaan18@gmail.com',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 19,
    name: 'Simran',
    email: 'simran19@gmail.com',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
  {
    id: 20,
    name: 'Reyansh',
    email: 'reyansh20@gmail.com',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    id: 21,
    name: 'Ananya',
    email: 'ananya21@gmail.com',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 22,
    name: 'Yash',
    email: 'yash22@gmail.com',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
  },
];
```

### Usage of FlatList :
```jsx
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.constainer}>
      <FlatList
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={{height: 40, width: 40, borderRadius: 50}}
              source={{
                uri: item.image
              }}
            />
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        // horizontal
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  constainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card: {
    height: 100,
    width: 175,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
  },
});
```