import { createStore } from "redux";
//첫번째 인자는 data, 두번째 인자는 가해져야하는 action
export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    //데이터의 수가 적기 때문에 아래처럼 return 했지만,
    //실제로는 return {...state,number:state.number+action.size}
    //이런식으로 state를 깊은 복사하고 뒤에 값을 변경 하는 코드를 추가하는 방식으로 작성해야함

    return { number: state.number + action.size };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
//devtools라는것을 활성화 시키기 위해서 createStore의 두번째 인자로 전달
