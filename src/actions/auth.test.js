import { firebase, googleAuthProvider } from '../firebase/firebase';
import { login, startLogin, logout, startLogout } from './auth';

it('should setup login action object', () => {
  const user = {
    uid: '123abc'
  };
  const action = login(user);

  expect(action).toEqual({
    type: 'LOGIN',
    uid: user.uid,
    user,
  });
});

it('should call signInWithPopup with googleAuthProvider', () => {
  const firebase = {
    auth: () => {
      return {
        signInWithPopup: jest.fn()
      }
    },
  };
  startLogin()();

  expect(firebase.auth().signInWithPopup).not.toHaveBeenLastCalledWith(googleAuthProvider);
});

it('should setup login action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT',
  });
});


it('should call signOut', () => {
  const firebase = {
    auth: () => {
      return {
        signOut: jest.fn()
      }
    },
  };

  startLogout()();

  expect(firebase.auth().signOut).not.toHaveBeenLastCalled;
});

