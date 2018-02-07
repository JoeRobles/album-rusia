import authReducer from './auth';

it('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

it('should set uid for login', () => {
  const uid = '123abc';
  const action = {
    type: 'LOGIN',
    uid,
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

it('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
