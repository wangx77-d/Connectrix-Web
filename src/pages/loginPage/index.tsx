import React from 'react';
import {
    Box,
    Flex,
    Input,
    Button,
    Text,
    Link,
    Group,
    Image,
} from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { PasswordInput } from '@/components/ui/password-input';
import { useNavigate } from 'react-router-dom';

import { loginWithGoogle } from '@/apis/user';

import navLogo from '../../assets/navLogo.svg';
import googleIcon from '../../assets/googleIcon.svg';
import fbIcon from '../../assets/fbIcon.svg';
import nsIcon from '../../assets/nsIcon.png';
import psIcon from '../../assets/psIcon.svg';
import xbIcon from '../../assets/xbIcon.svg';
import stIcon from '../../assets/stIcon.png';

import '@/styles/login.css';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log('sign in');
        // Perform sign-in logic here if needed
        navigate('/profile'); // Route to "/profile"
    };

    const handleAuthClick = (
        e: React.MouseEvent<HTMLImageElement>
    ) => {
        const target = e.target as HTMLImageElement;
        if (target.alt === 'google') {
            console.log('e?.target?.alt');
            const res = loginWithGoogle();
            console.log(res);
        }
    };

    return (
        <div className="login-modal-overlay">
            <Box w="full" p={6}>
                <Flex direction="column" align="center" mt={8}>
                    <img src={navLogo} alt="Logo" />
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
                        <Link
                            href="#"
                            className="login-modal-link"
                            fontSize="sm"
                        >
                            Forgot password?
                        </Link>
                        <Text color="gray.400" fontSize="sm" mt={2}>
                            OR
                        </Text>
                        <Group gap={4} mt={2}>
                            <Image
                                src={googleIcon}
                                alt="google"
                                boxSize="30px"
                                borderRadius="full"
                                fit="cover"
                                className="auth-link"
                                onClick={handleAuthClick}
                            />
                            <Image
                                src={fbIcon}
                                alt="facebook"
                                boxSize="30px"
                                borderRadius="full"
                                fit="cover"
                                className="auth-link"
                            />
                            <Image
                                src={nsIcon}
                                alt="nintendo"
                                boxSize="30px"
                                fit="cover"
                                className="auth-link"
                            />
                            <Image
                                src={psIcon}
                                alt="playstation"
                                boxSize="30px"
                                borderRadius="full"
                                fit="cover"
                                className="auth-link"
                            />
                            <Image
                                src={xbIcon}
                                alt="xbox"
                                boxSize="30px"
                                borderRadius="full"
                                fit="cover"
                                className="auth-link"
                            />
                            <Image
                                src={stIcon}
                                alt="steam"
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
