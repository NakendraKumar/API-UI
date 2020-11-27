export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.tokens.access.token) {
    return { Authorization: 'Bearer ' + user.tokens.access.token };
  } else {
    return {};
  }
}
