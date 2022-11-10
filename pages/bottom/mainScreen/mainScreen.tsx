import {ScrollView, Text, View} from 'react-native';
import Board from '../../../components/board';
import styles from './style';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <Board />
        <Board />
        <Board />
        <Board />
      </ScrollView>
    </View>
  );
}
