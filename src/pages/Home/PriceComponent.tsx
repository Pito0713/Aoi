import React from "react";
import * as RN from 'react-native';

interface Props {
  name?: string
}

const PriceComponent = ({name}:Props) => {
  return (
    <RN.View style={styles.container}>
      <RN.Text>{name}</RN.Text>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    margin: 4,
    borderRadius: 10,
    height: 100,
  }
});

export default PriceComponent ;