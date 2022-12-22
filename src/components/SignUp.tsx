import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';

import { setUser } from '../redux/slice';

const SignUp = () => {
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => console.log(user))
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
