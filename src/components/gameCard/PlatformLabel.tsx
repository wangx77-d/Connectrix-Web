import React from 'react';
import { Badge } from '@chakra-ui/react';
import { SiPlaystation } from 'react-icons/si';
import { FaSteam, FaXbox } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';

type PlatformLabelProps = {
  platform: 'PlayStation' | 'Steam' | 'Nintendo' | 'Xbox' | 'PC';
};

const PlatformLabel: React.FC<PlatformLabelProps> = ({
  platform,
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
      px={2}
      py={1}
      borderRadius="md"
      mb={2}
      variant="solid"
    >
      {icon}
      {platform}
    </Badge>
  );
};

export default PlatformLabel;
