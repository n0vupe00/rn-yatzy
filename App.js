
import Header from './Header';
import Footer from './Footer';
import styles from './Tyyli';
import {  Text, View } from 'react-native';
import Gameboard from './Gameboard';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    GemunuLibre: require('./assets/fonts/GemunuLibre.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  } 


  return (
    <View style={styles.container}>
      <Header />
      <Gameboard/>
      <Footer />
    </View>
  );
}

