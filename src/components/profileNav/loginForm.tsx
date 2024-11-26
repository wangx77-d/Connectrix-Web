import { Modal } from 'antd';
import React, { useRef } from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { CloseOutlined } from '@ant-design/icons';

import '@/styles/loginForm.css';

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginForm: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            closable={false}
            centered
            style={{
                background: 'transparent',
                boxShadow: 'none',
                border: 'none',
            }}
            modalRender={() => (
                <div className="login-modal-overlay">
                    <Box className="login-modal" position="relative">
                        <button className="login-modal-close" onClick={onClose}>
                            <CloseOutlined />
                        </button>
                        <h2 className="login-modal-header">Add an account</h2>
                        <Flex direction="column" align="center">
                            <Input
                                className="login-modal-input"
                                placeholder="Username or email address"
                                type="text"
                            />
                            <Input
                                className="login-modal-input"
                                placeholder="Password"
                                type="password"
                            />
                            <Button
                                className="login-modal-button"
                                mt={4}
                                onClick={() => alert('Sign in clicked')}
                            >
                                Sign in
                            </Button>
                            <a href="#" className="login-modal-link">
                                Forgot password?
                            </a>
                        </Flex>
                    </Box>
                </div>
            )}
        ></Modal>
    );
};
