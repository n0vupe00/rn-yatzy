
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/Tyyli';
import {  Text, View } from 'react-native';
import Gameboard from './components/Gameboard';
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

