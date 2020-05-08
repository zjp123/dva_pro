import propmissTest from '../service/server'


const model = {
    namespace: 'count',
    state: {
      zjp:'ctt',
      testData:[],
    },
    reducers: {
      add  (state) {console.log(state,'kkkkk'); return Object.assign({},state, {zjp: state.zjp + 'pppp'}) },
      minus(count) { return count - 1 },
    },
    effects:{
      *propmissTest(action, {put,call}){
        return yield call(propmissTest)
      },
      async propmissTest2(action, {put,call}){
        const res = await Promise.all([propmissTest(), propmissTest()]);
        console.log(res);
        return res;
      }
    }
  }

export default model