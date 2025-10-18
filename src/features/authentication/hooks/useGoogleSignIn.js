import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { signInWithGoogle } from '../authService';

export default function useGoogleSignIn() {
  const [googleError, setGoogleError] = useState(null);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setGoogleError(null);
    setIsGoogleLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(`Google sign-In error: ${error.code || error.message}`);
      setGoogleError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return { googleError, isGoogleLoading, handleGoogleSignIn };
}
