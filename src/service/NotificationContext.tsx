import React, { useEffect } from 'react';
import { UserNotificationProps } from '../store/features/user/userTypes';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  finishUserNotification,
  selectUserNotification
} from '../store/features/user/userSlice';
import { NotificationBar } from '../components/shared/NotificationBar/NotificationBar';

export const NotificationContext: React.FunctionComponent = ({ children }) => {
  const userNotification = useAppSelector(selectUserNotification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userNotification.show) {
      const timer = setTimeout((): void => {
        dispatch(finishUserNotification(false));
      }, 4000);

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
