import React from 'react';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Space } from 'antd';
import {
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
} from '@ant-design/icons';

import '@/styles/footer.css';

const Footer: React.FC = () => {
    return (
        <Box className="footer-container">
            <Flex
                direction="column"
                align="center"
                maxW="1200px"
                mx="auto"
                textAlign="center"
            >
                {/* Links Section */}
                <Flex wrap="wrap" justify="center" mb={4}>
                    <ChakraLink href="#" className="footer-text">
                        Company Profile
                    </ChakraLink>
                    <Text mx={1}>|</Text>
                    <ChakraLink href="#" className="footer-text">
                        About Us
                    </ChakraLink>
                    <Text mx={1}>|</Text>
                    <ChakraLink href="#" className="footer-text">
                        Privacy Policy
                    </ChakraLink>
                </Flex>

                {/* Contact Section */}
                <Text fontSize="sm" mb={4} className="footer-text">
                    Business Cooperation Email:
                    <ChakraLink
                        href="mailto:info@connectrix-studio.com"
                        className="footer-link"
                    >
                        info@connectrix-studio.com
                    </ChakraLink>
                </Text>

                {/* Copyright Section */}
                <Text fontSize="sm" mb={6} className="footer-text">
                    Copyright 2024 connectrix-studio.com Corporation, All Rights
                    Reserved
                </Text>

                {/* Social Media Section */}
                <Space size="large">
                    <ChakraLink
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterOutlined className="social-icon" />
                    </ChakraLink>
                    <ChakraLink
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookOutlined className="social-icon" />
                    </ChakraLink>
                    <ChakraLink
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramOutlined className="social-icon" />
                    </ChakraLink>
                </Space>
            </Flex>
        </Box>
    );
};

export default Footer;
