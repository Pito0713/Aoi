import React from "react";
import * as RN from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as UI from 'react-native-ui-lib';

const SignInPage = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation();

  // redux
  const reduxAccount = useSelector(state => state.account)
  const reduxRememberInfo = useSelector(state => state.rememberInfo)

  const [account, setAccount] = React.useState('')
  // const [password, setPassWord] = React.useState('')
  const [rememberInfo, setRememberInfo] = React.useState(reduxRememberInfo)
  const [actionSheet, setActionSheet] = React.useState(false)
  const [languageChange, setlanguageChange] = React.useState('zhHans')
  const [token, setToken] = React.useState('1')

  const dispatchToken = () => {
    if(!['',null,undefined].includes(token)) dispatch({ type: 'SET_TOKEN', payload: true,})
  }
  const dispatchAccount = (values) => {
    if(!['',null,undefined].includes(values)) dispatch({type: 'SET_ACCOUNT', payload: values,})
  }
  const dispatchPassWord = (values) => {
    if(!['',null,undefined].includes(values)) dispatch({type: 'SET_PASSWORD', payload: values,})
  }
  const dispatchRememberInfo = () => {
    dispatch({type: 'SET_REMEMBERINFO', payload: rememberInfo,})
  }
  const dispatchLanguageChange = () => {
    dispatch({type: 'SET_LANGUAGE', payload: languageChange,})
  }

  const dispatchfunction =(values)=>{
    dispatchPassWord(values?.password)
    dispatchAccount(values?.account)
    dispatchToken()
    dispatchRememberInfo()
  }

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      account: reduxRememberInfo ? reduxAccount : "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.account) {
        errors.account = '*'+t("Account is required");
      }
      if (!values.password) {
        errors.password = '*'+t("Password is required");
      }
      return errors;
    },
    onSubmit: async (values) => {
      dispatchfunction(values)
    },
  });

  // init
  React.useEffect(()=>{
    if(reduxRememberInfo) setAccount(reduxAccount)
  },[])

  // render
  React.useEffect(()=>{
    dispatchLanguageChange()
  },[languageChange])
  
  return (
    <>
      <UI.View useSafeArea={true}>
        <UI.Button
          style={styles.ButtonContainer}
          key={1}
          label={t('language')}
          backgroundColor={'transparent'}
          color='#000000'
          onPress={() => setActionSheet(true)}
        />
      </UI.View>
      
      <UI.View useSafeArea={true} style={styles.container}>
        {/* <UI.Text style={{fontSize: 30}}>{t('Log in')}</UI.Text> */}
        <UI.View style={styles.logInContainer}>
          <UI.View style={styles.border}>
            <UI.Text style={{ marginBottom: 15}}>{t('account')}</UI.Text>
            <UI.View style={styles.InputContainer}>
              <RN.TextInput
                placeholder={t('please enter account')}
                textAlign='left'
                placeholderTextColor="gray"
                value={formik.values.account}
                onChangeText={formik.handleChange("account")}
                style={{ margin: 10, fontSize: 15}}
              />
            </UI.View>
            <UI.Text style={styles.errorText}>
              {formik.errors.account}
            </UI.Text>
          </UI.View>
          <UI.View style={styles.border}>
          <UI.Text style={{ marginBottom: 15}}>{t('password')}</UI.Text>
            <UI.View style={styles.InputContainer}>
              <RN.TextInput
                placeholder={t('please enter password')}
                placeholderTextColor="gray"
                textAlign='left'
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                secureTextEntry={true}
                style={{ margin: 10, fontSize: 15}}
              />
            </UI.View>
            <UI.Text style={styles.errorText}>
              {formik.errors.password}
            </UI.Text>
          </UI.View>
        </UI.View>
        <UI.TouchableOpacity>
          <UI.Text onPress={() => formik.submitForm()} style={{fontSize: 18,margin:20}}>{t('Log in')}</UI.Text>
        </UI.TouchableOpacity>
        <UI.View style={styles.rememberInfoContainer}>
          <UI.TouchableOpacity onPress={() => setRememberInfo(!rememberInfo)} style={{flexDirection: 'row'}} >
            <UI.Checkbox value={rememberInfo} size={15} onValueChange={() => setRememberInfo(!rememberInfo)}/>
            <UI.Text style={{marginLeft: 8}}>{t('remember account')}</UI.Text>
          </UI.TouchableOpacity>
        </UI.View>
        <UI.ActionSheet
          title={t('language')}
          cancelButtonIndex={3}
          destructiveButtonIndex={0}
          useNativeIOS={false}
          options={[
            {label: t('Traditional Chinese'), onPress: () => setlanguageChange('zhHant')},
            {label: t('Simplified'), onPress: () => setlanguageChange('zhHans')},
            {label: t('English'), onPress: () => setlanguageChange('en')},
          ]}
          visible={actionSheet}
          onDismiss={() => setActionSheet(false)}
        />
      </UI.View>
    </>
  );
};
const height = RN.Dimensions.get('window').height
const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height/10,
    alignItems: 'center'
  },
  logInContainer: {
    paddingTop: height/14,
    width: '100%',
    alignItems: 'center'
  },
  border: {
    width: '80%',
    justifyContent: 'center',
    margin: 20
  },
  InputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  rememberInfoContainer: {
    paddingTop: 5,
    width: '80%',
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row'
  },
  ButtonContainer: {
    justifyContent: 'flex-end',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    padding: 5
  },
});

export default SignInPage ;
