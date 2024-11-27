import React from 'react';
import { Status as ItemStatus } from '@/types/item';
import { Status } from '@/components/ui/status';

type StatusLabel = {
  status: ItemStatus;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
};

const StatusLabel: React.FC<StatusLabel> = ({
  status,
  size = 'md',
  style,
}) => {
  let value: StatusValue;

  switch (status) {
    case ItemStatus.SOLD:
      value = 'warning';
      break;
    case ItemStatus.ACTIVE:
      value = 'success';
      break;
    default:
      value = 'info';
      break;
  }

  return (
    <Status
      value={value}
      px={2}
      py={1}
      borderRadius={size}
      size={size}
      style={style}
    >
      {status.toString()}
    </Status>
  );
};

export default StatusLabel;
