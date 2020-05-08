

const model = {
    namespace: 'formm',
    state: {
        email: {
            value: '123@gmail.com',
          }
    },
    reducers:{
        form(state , action) {
                console.log(999)
                return {
                  ...state,
                  ...action.payload,
                };
          }
    }

  }

export default model