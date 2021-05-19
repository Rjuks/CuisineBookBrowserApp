export interface UserCredentials {
  username: string;
  password: string;
  email?: string;
  id?: string;
}

export interface UserNotificationProps {
  show: boolean;
  message: string;
  title: string;
  type: 'success' | 'danger' | 'info';
}

export interface UserStoreState {
  isLoggedIn: boolean;
  userNotification: UserNotificationProps;
}
