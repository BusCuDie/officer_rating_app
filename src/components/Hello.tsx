import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import i18n from '@locales';
const Hello = ({}) => {
  const [locale, setLocale] = useState('en');
  const onPress = (locale: string) => {
    // setLocale(prev => {
      console.log(locale);
      setLocale(locale)
    //   return prev === 'en' ? 'vn' : prev;
    // });
    i18n.locale = locale;
  };
  return (
    <View>
      <Text>{i18n.t('test.Hello')}</Text>
      <TouchableOpacity onPress={()=>onPress('en')}>
        <Text>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>onPress('vn')}>
        <Text>VN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Hello;
