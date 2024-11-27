import React from 'react';
import { Badge } from '@chakra-ui/react';
import { SiPlaystation } from 'react-icons/si';
import { FaSteam, FaXbox } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';

type PlatformLabelProps = {
  platform: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

const PlatformLabel: React.FC<PlatformLabelProps> = ({
  platform,
  size = 'md',
}) => {
  let colorPalette;
  let icon;

  switch (platform.toLowerCase()) {
    case 'playstation':
      colorPalette = 'blue';
      icon = <SiPlaystation />;
      break;
    case 'steam':
      colorPalette = 'gray';
      icon = <FaSteam />;
      break;
    case 'nintendo':
      colorPalette = 'red';
      icon = <BsNintendoSwitch />;
      break;
    case 'xbox':
      colorPalette = 'green';
      icon = <FaXbox />;
      break;
    default:
      colorPalette = 'gray';
      icon = <IoGameController />;
  }

  return (
    <Badge
      colorPalette={colorPalette}
      mr={2}
      borderRadius={size}
      size={size}
      variant="solid"
    >
      {icon}
      {platform}
    </Badge>
  );
};

export default PlatformLabel;
