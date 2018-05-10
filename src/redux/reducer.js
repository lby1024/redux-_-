

// 这就是reducer处理函数，参数是状态和新的action

const state_init = {
    number: 0
}

export function counter (state = state_init , payload) {
    if(mutations.hasOwnProperty(payload.type)){
        return mutations[payload.type](state , payload);
    }
   return state;
}

const mutations = {
    add (state, payload) {
        return {number: state.number+1}
    },
    minus (state, payload) {
        return {number: state.number-1}
    }
}

export const actions = {
    add (payload) {
        return {type: 'add'}
    },
    minus (payload) {
        return {type: 'minus'}
    },
    addAync (payload) {
        return dispatch => {
            setTimeout(() => dispatch({type: 'add'}), 1000)
        }
    }
}


export function addGun(){
  return { type: 'add' }
}
export function removeGun(){
  return { type: 'minus' }
}
// 延迟添加，拖两天再给
export function addGunAsync(){
  // thunk插件的作用，这里可以返回函数，
  return dispatch => {
    setTimeout(() => {
      // 异步结束后，手动执行dispatch
      dispatch(addGun());
    }, 2000);
  };

}