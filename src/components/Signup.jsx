import React, { useState } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('https://cute-red-spider-hat.cyclic.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleLogin = async () => {
    try {
      const response = await fetch('https://cute-red-spider-hat.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg); 
        setEmail('');
        setPassword(''); 
        localStorage.setItem('token', data.token);

        navigate('/dashboard');
        
      } else {
        const errorData = await response.json();
        console.error(errorData.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {isSignup && (
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
          )}

          <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>

          <Stack direction="row" align="center">
            <span>Sign Up</span>
            <Switch
              onChange={() => setIsSignup(!isSignup)}
              colorScheme="teal"
              size="lg"
              isChecked={isSignup}
            />
            <span>Login</span>
          </Stack>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;




