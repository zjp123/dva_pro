import { routerRedux } from 'dva/router';
import { login } from '../service';
// import $$ from './node_modules/cmn-utils';

export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {},
    userIno:{
      cardid : 0,
      udata:[]
    }
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('/sign/login') !== -1) {
          // $$.removeStore('user');
        }
      });
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      try {
        const { status, message, data } = yield call(login, payload);
        if (true) {
          // $$.setStore('user', data);
          // yield put(routerRedux.replace('/'));
          yield put({
            type: 'loginSuccess'
          });
        } else {
          yield put({
            type: 'loginError',
            payload: { message }
          });
        }
      } catch (e) {
        console.log(e)
        yield put({
          type: 'loginError'
        });
      }
    },
    *logout(_, { put }) {}
  },

  reducers: {
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loggedIn: true,
        loading:true,
        message: '',
        user: payload
      };
    },
    loginError(state, { payload }) {
      return {
        ...state,
        loggedIn: false,
        message: payload.message
      };
    },
    setUserInfo(state, payload={}){
      const data = {
        cardid : 1,
        udata:[{accname: 'gg'}, {acccode: 'uu'}]
      }
      const data2 = {
        ...state,
        loggedIn: true,

        userIno:{
          ...data,
        }
      }
      console.log(data2, 'model')

      return data2
    }
  }
};
