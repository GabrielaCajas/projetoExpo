import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProfileIcon from '../components/ProfileIcon';
import Login from '../components/Login';


export default function Pagina() {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileIcon />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9FE', // roxo clarinho
  }
});