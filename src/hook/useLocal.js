import React, {useContext} from 'react';

// Components
import {AuthContext} from '../context/context';
import en from '../components/helper/En'
import mm from '../components/helper/Mm';

export const useLocal = () => {
  const {lang} = useContext(AuthContext);
  if (lang === 'en') {
    return en;
  } else {
    return mm;
  }
};
