import React from 'react';
import { Badge } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';

import { FaQuestionCircle } from 'react-icons/fa';
import { ItemCategory } from '@/types/item';

type CategoryLabelType = {
  category: ItemCategory;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
};

const CategoryLabel: React.FC<CategoryLabelType> = ({
  category,
  size = 'md',
  style,
}) => {
  let colorPalette;
  let icon;
  let text;

  switch (category) {
    case ItemCategory.GOODS:
      colorPalette = 'cyan';
      icon = <HiStar />;
      text = 'In-Game Goods';
      break;
    case ItemCategory.TUTORIAL:
      colorPalette = 'yellow';
      icon = '';
      text = 'Tutorial';
      break;
    default:
      colorPalette = 'gray';
      icon = <FaQuestionCircle />;
      text = 'Others';
      break;
  }

  return (
    <Badge
      colorPalette={colorPalette}
      px={2}
      py={1}
      size={size}
      borderRadius={size}
      style={style}
    >
      {icon}
      {text}
    </Badge>
  );
};

export default CategoryLabel;
