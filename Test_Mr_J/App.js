import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bottomtab from './asosiy/Bottomtab';
import { Provider } from 'react-redux';
import { store } from './store';
import typer from './type';
import Test from './components/Test';

export default function App() {
  console.log(typer);
  return (
    <Provider store={store}>
      {typer==0? <Bottomtab/>:<Test/>}
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
