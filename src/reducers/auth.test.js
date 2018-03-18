import authReducer from './auth';

it('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

it('should set uid for login', () => {
  const user = {
    uid: '123abc'
  };
  const action = {
    type: 'LOGIN',
    user,
  };
  const state = authReducer({}, action);
  expect(state).toEqual({user: user});
});

it('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
