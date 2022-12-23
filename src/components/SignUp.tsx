import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';

import { setUser } from '../redux/slice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
