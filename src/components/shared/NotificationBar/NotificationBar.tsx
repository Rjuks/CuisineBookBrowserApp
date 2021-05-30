import React from 'react';
import styled, { keyframes } from 'styled-components';

import { UserNotificationProps } from '../../../store/features/user/userTypes';
import { Text } from '../Text/Text';

interface NotificationBarProps {
  notificationData: UserNotificationProps;
}

export const NotificationBar = ({ notificationData }: NotificationBarProps) => {
  return (
    <StyledNotificationBar color={notificationData.type}>
      <Text as="h3" textAlign="left" fontSize="TEXT_BIG" fontWeight={700}>
        {notificationData.title}
      </Text>
      <p>{notificationData.message}</p>
    </StyledNotificationBar>
  );
};

const handleColorType = (type: string) => {
  switch (type) {
    case 'success':
      return '#28a745';
    case 'danger':
      return '#dc3545';
    case 'info':
      return '#03a9f3';
    default:
      return '#fff';
  }
};

const handleColorTypeBorder = (type: string) => {
  switch (type) {
    case 'success':
      return '#19692c';
    case 'danger':
      return '#a71d2a';
    case 'info':
      return '#0562c7';
    default:
      return '#fff';
  }
};

const NotificationBarSlide = keyframes`
    0% { transform: translateX(-100%); }
    30% { transform: translateX(0); }
    60% { opacity: 1; }
    100% { opacity: 0; }
`;

const StyledNotificationBar = styled.div`
  display: block;
  position: fixed;
  top: 60px;
  left: 0;
  padding: 8px 15px;
  background-color: ${({ color }) => handleColorType(color || 'info')};
  border-left: 8px solid
    ${({ color }) => handleColorTypeBorder(color || 'info')};
  color: #fff;
  box-shadow: 1px 3px 4px rgb(0 0 0 / 20%);
  word-wrap: break-word;
  z-index: 20;
  animation: ${NotificationBarSlide} 4s;

  h3 {
    color: #fff;
  }
`;
