import I18n from 'react-native-i18n';
import en from './locals/en';

I18n.defaultLocale = 'en';
I18n.locale = 'en';
I18n.fallbacks = true;

I18n.translations = {
  en
};

export default I18n;