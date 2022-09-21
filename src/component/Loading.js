import * as React from 'react';
import * as RN from 'react-native';

const LoadingView = ({ visible }) => {
  return (
    <RN.Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <RN.View style={{
        ...RN.StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        <RN.View style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 30,
          borderRadius: 15,
        }}>
          <RN.ActivityIndicator color='#000000' />
        </RN.View>
      </RN.View>
    </RN.Modal>
  );
};


export { LoadingView };