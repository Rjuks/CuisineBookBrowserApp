import React, { useEffect } from 'react';
import { UserNotificationProps } from '../store/features/user/userTypes';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  updateUserNotification,
  selectUserNotification
} from '../store/features/user/userSlice';
import { NotificationBar } from '../components/shared/NotificationBar/NotificationBar';

export const NotificationContext: React.FunctionComponent = ({ children }) => {
  const userNotification = useAppSelector(selectUserNotification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userNotification.show) {
      const timer = setTimeout((): void => {
        dispatch(
          updateUserNotification({
            show: false,
            message: '',
            title: '',
            type: 'info'
          })
        );
      }, 3900);

      return (): void => clearTimeout(timer);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return (): void => {};
  }, [userNotification.show]);

  return (
    <>
      {userNotification.show && (
        <NotificationBar notificationData={userNotification} />
      )}
      {children}
    </>
  );
};
