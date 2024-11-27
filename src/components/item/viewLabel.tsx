import React from 'react';
import { Badge } from '@chakra-ui/react';
import { BiPurchaseTag } from 'react-icons/bi';

type ViewsLabelType = {
  view: number;
  style?: React.CSSProperties;
};

const ViewsLabel: React.FC<ViewsLabelType> = ({ view, style }) => {
  return (
    <Badge
      colorPalette="yellow"
      px={2}
      py={1}
      size="sm"
      borderRadius="sm"
      style={style}
      variant="solid"
    >
      <BiPurchaseTag />
      {view}
    </Badge>
  );
};

export default ViewsLabel;
