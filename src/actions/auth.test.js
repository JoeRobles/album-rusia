import { login, logout } from './auth';

it('should setup login action object', () => {
  const uid = '123abc';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

it('should setup login action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
