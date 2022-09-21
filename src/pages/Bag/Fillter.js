import React from "react";
import * as RN from 'react-native';
import * as UI from 'react-native-ui-lib';

const Fillter = () => {
  const initialValue ={
    a:false,
    b:false,
    c:false
  }
  const [showDialog, setShowDialog] = React.useState(false)
  const [disabledValue, setDisabledValue]  = React.useState(initialValue)
  return (
    <>
      <UI.View style={styles.container}>
        <UI.TouchableOpacity onPress={()=>{setShowDialog(!showDialog)}}>
          <RN.Image
            source={require('../../../assets/filter.png')}
            style={{width:20,height:20}}
          />
        </UI.TouchableOpacity>
        <UI.Dialog
          useSafeArea
          top={true}
          panDirection={UI.Dialog.directions.DOWN}
          visible={showDialog}
          containerStyle={styles.dialog}
          ignoreBackgroundPress={false}
        >
          <UI.TouchableOpacity style={styles.cleanFillter} onPress={()=>{setDisabledValue(initialValue)}}>
            <UI.Text>cleanFillter</UI.Text>
          </UI.TouchableOpacity>
          <UI.View style={styles.dialogContent}>
            <UI.RadioButton
              selected={disabledValue.a}
              onPress={()=>setDisabledValue({...disabledValue, a:!disabledValue.a})}
              label="a"
              contentOnLeft
              containerStyle={styles.contentOnLeft}
            />
          </UI.View>
          <UI.View style={styles.dialogContent}>
            <UI.RadioButton
              selected={disabledValue.b}
              onPress={()=>setDisabledValue({...disabledValue, b:!disabledValue.b})}
              label="b"
              contentOnLeft
              containerStyle={styles.contentOnLeft}
            />
          </UI.View>
          <UI.View style={styles.dialogContent}>
            <UI.RadioButton
              selected={disabledValue.c}
              onPress={()=>setDisabledValue({...disabledValue, c:!disabledValue.c})}
              label="c"
              contentOnLeft
              containerStyle={styles.contentOnLeft}
            />
          </UI.View>
          <UI.TouchableOpacity style={styles.confirmButton} onPress={()=>{setShowDialog(false)}}>
            <UI.Text>確認</UI.Text>
          </UI.TouchableOpacity>
        </UI.Dialog>
      </UI.View>
    </>
  );
};
const width = RN.Dimensions.get('window').width
const styles = RN.StyleSheet.create({
  container: {
    padding: 12,
    margin: 4,
    flexDirection:'row-reverse'
    
  },
  dialog: {
    backgroundColor: '#ffffff',
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  dialogContent: {
    width: (width/2 -40),
    padding: 12
  },
  confirmButton: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 12,
    width:'100%'
  },
  cleanFillter: {
    flexDirection:'row-reverse',
    padding: 12,
    width:'100%'
  }
});

export default Fillter ;