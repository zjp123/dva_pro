
import {propmissHome} from './service'

const model = {
    namespace: 'home',
    state: {
      home:'home',
      
    },
    effects:{
      *propmissHome(action, {put,call}){
        return yield call(propmissHome)
      },
    }

  }

export default model