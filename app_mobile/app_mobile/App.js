
import { View, StyleSheet } from 'react-native';
import Pagina from './pages/pagina';


export default function App() {
  return (
    <View style={styles.container}>
      <Pagina/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9FE', // roxo clarinho
  }
});
