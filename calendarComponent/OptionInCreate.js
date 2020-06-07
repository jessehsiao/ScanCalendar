import React from 'react';
import {View, StyleSheet, Modal, Platform } from 'react-native';



// = ({ isModalVisible, children }) =>
export class OptionInCreate extends React.Component {
  
  render() {
    const { isCreateModalVisible, children } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={isCreateModalVisible} 
        onRequestClose={() => null}
      >
        <View
          style={[
            styles.container,//點開task 背景模糊
            {
              ...Platform.select({
                android: {
                  // paddingTop: shouldMove ? 240 : null,
                },
              }),
            },
          ]}
        >
          <View style={styles.cardMain}>{children}</View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    cardMain: {
      position: 'absolute',//task視窗跳出後的樣式
      top: 450,
      width: 327,
      borderRadius: 20,
      backgroundColor: '#ffffff',
      alignSelf: 'center',//跳出在中間
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(255,179,246,0.4)',
    },
  });