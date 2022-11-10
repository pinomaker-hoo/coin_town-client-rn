import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import constant from '../common/constant';

export default function Board(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.topBoxText}>
          크리스마스 선물 포장 아르바이트 구인
        </Text>
      </View>
      <View style={styles.middleBox}>
        <Text style={styles.middleBoxText}>#10/6</Text>
        <Text style={styles.middleBoxText}>#70,000원</Text>
        <Text style={styles.middleBoxText}>#강남역</Text>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.imgBox}>
          <Image source={require('../assets/carrot.png')} style={styles.img} />
        </View>
        <Text style={styles.bottomBoxText}>당근마켓</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: constant.width * 0.9,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#DDDDDD',
    marginBottom: 30,
  },
  topBox: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  middleBox: {
    flex: 0.6,
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
  },
  bottomBox: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
  },
  topBoxText: {
    fontSize: 15,
  },
  imgBox: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  bottomBoxText: {
    fontSize: 24,
    marginLeft: 10,
  },
  middleBoxText: {
    fontSize: 12,
    color: '#6F6F6F',
    marginRight: 10,
  },
});
