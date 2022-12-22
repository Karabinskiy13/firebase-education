import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';

import { setUser } from '../redux/slice';

const Login = () => {
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
  };
  return <Form title="sign in" handleClick={handleLogin} />;
};

export default Login;
