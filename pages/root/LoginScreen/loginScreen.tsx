import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image source={require('../../../assets/Login.png')} />
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.bottomBoxLabel}>Email</Text>
        <TextInput style={styles.bottomBoxInput} />
        <Text style={styles.bottomBoxLabel}>Password</Text>
        <TextInput style={styles.bottomBoxInput} />
        <TouchableOpacity style={styles.bottomBoxBtn}>
          <Text style={styles.bottomBoxBtnText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.bottomBoxSubView}>
          <Text style={styles.bottomBoxSubText}>동전 모아가 처음이라면?</Text>
          <Text style={styles.bottomBoxSubText}>회원가입</Text>
        </View>
      </View>
    </View>
  );
}
