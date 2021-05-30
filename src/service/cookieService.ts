export function setCookie(cname: string, cvalue: string, cexpires: string) {
  const d = new Date();
  // d.setTime(d.getTime() + xdays * 24 * 60 * 60 * 1000);
  // const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${cexpires};path=/`;
}

export function getCookie(cname: string) {
  // const ca = document.cookie.split('=');
  // return ca[1];
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
