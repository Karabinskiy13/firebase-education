import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useAuth = () => {
  const { email, token, id } = useSelector((state: RootState) => state.userReducer);
  return {
    isAuth: !!email,
    email,
    token,
    id
  };
};

export default useAuth;
