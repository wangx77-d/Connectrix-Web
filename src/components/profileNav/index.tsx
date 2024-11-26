import React, { useState } from 'react';
import '@/styles/nav.css';
import { Box, Flex, Text, Input, IconButton, HStack } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { LoginForm } from './loginForm';
// import { Icon } from '@chakra-ui/react';
// import { IoNotificationsCircle } from 'react-icons/io5';

type chileListProps = {
    contentComponent: React.ReactNode;
};

const ProfileSection: React.FC<chileListProps> = ({ contentComponent }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Avatar clicked', e);
        setShowMenu(!showMenu);
    };

    const handleClose = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="nav-profile">
                <Box>
                    <Flex justify="center" align="center" gap={4}>
                        <Input
                            className="nav-search"
                            placeholder="Search anything..."
                            variant="outline"
                            size="md"
                            bg="#1f1f1f"
                            color="white"
                        />
                        <Avatar
                            size="md"
                            src="/src/assets/notification.svg"
                            onClick={handleAvatarClick}
                        />
                        <Avatar size="lg" onClick={handleAvatarClick} />
                    </Flex>
                    {contentComponent}
                </Box>
            </div>

            <LoginForm isOpen={showMenu} onClose={handleClose} />
        </>
    );
};

export default ProfileSection;
