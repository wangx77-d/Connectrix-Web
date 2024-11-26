import React, { useState } from 'react';
import '@/styles/nav.css';
import { HStack } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { LoginForm } from './loginForm';
// import { Icon } from '@chakra-ui/react';
// import { IoNotificationsCircle } from 'react-icons/io5';

const ProfileSection: React.FC = () => {
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
                <HStack gap="4">
                    <Avatar
                        size="md"
                        src="/src/assets/notification.svg"
                        onClick={handleAvatarClick}
                    />
                    <Avatar size="lg" onClick={handleAvatarClick} />
                </HStack>
            </div>

            <LoginForm isOpen={showMenu} onClose={handleClose} />
        </>
    );
};

export default ProfileSection;
