import React from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Link,
  Group,
  IconButton,
  Icon,
  Image,
  createIcon,
} from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { PasswordInput } from '@/components/ui/password-input';
import { useNavigate } from 'react-router-dom';

import { FaGoogle } from 'react-icons/fa';

import '@/styles/login.css';

const GoogleIcon = createIcon({
  displayName: 'GoogleIcon',
  path: (
    <>
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </>
  ),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('sign in');
    // Perform sign-in logic here if needed
    navigate('/profile'); // Route to "/profile"
  };

  return (
    <div className="login-modal-overlay">
      <Box w="full" p={6}>
        <Flex direction="column" align="center" mt={8}>
          <img src="/src/assets/navLogo.svg" alt="Logo" />
          <Text textStyle="xl" fontWeight="bold">
            Sign in
          </Text>
        </Flex>
        <Box
          color="#ffffff"
          bg="#1f1f1f"
          borderRadius="2xl"
          boxShadow="md"
          w="full"
          p={6}
          mt={6}
        >
          <Flex direction="column" align="center" gap={2}>
            <Field label="Email">
              <Input
                placeholder="me@example.com"
                variant="subtle"
                className="login-modal-input"
                borderRadius="xl"
              />
            </Field>
            <Field label="Password">
              <PasswordInput
                placeholder="password"
                variant="subtle"
                className="login-modal-input"
                borderRadius="xl"
              />
            </Field>
            <Button
              className="login-modal-button"
              mt={4}
              onClick={handleSignIn}
            >
              Sign in
            </Button>
            <Link href="#" className="login-modal-link" fontSize="sm">
              Forgot password?
            </Link>
            <Text color="gray.400" fontSize="sm" mt={2}>
              OR
            </Text>
            <Group gap={4} mt={2}>
              <Image
                src="/src/assets/googleIcon.svg"
                alt="Google"
                boxSize="30px"
                borderRadius="full"
                fit="cover"
                className="auth-link"
              />
              <Image
                src="/src/assets/fbIcon.svg"
                alt="Facebook"
                boxSize="30px"
                borderRadius="full"
                fit="cover"
                className="auth-link"
              />
              <Image
                src="/src/assets/nsIcon.png"
                alt="Nintendo"
                boxSize="30px"
                fit="cover"
                className="auth-link"
              />
              <Image
                src="/src/assets/psIcon.svg"
                alt="Playstation"
                boxSize="30px"
                borderRadius="full"
                fit="cover"
                className="auth-link"
              />
              <Image
                src="/src/assets/xbIcon.svg"
                alt="Xbox"
                boxSize="30px"
                borderRadius="full"
                fit="cover"
                className="auth-link"
              />
              <Image
                src="/src/assets/stIcon.png"
                alt="Steam"
                boxSize="30px"
                borderRadius="full"
                fit="cover"
                className="auth-link"
              />
            </Group>
            <Text color="gray.400" fontSize="sm" mt={2}>
              Don’t have an account?{' '}
              <Link
                href="#"
                className="login-modal-link"
                fontSize="sm"
              >
                Sign up
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
