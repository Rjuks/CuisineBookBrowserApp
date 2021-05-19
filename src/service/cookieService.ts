export function setCookie(cname: string, cvalue: string, xdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + xdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

export function getCookie(cname: string) {
  const ca = document.cookie.split('=');
  return ca[1];
}
