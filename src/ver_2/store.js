import { createStore } from "redux";
export default createStore(function (state, action) {
  if (state === undefined) {
    return {
      ...state,
      contents: [
        { id: "42534", name: "식탁", price: 1000, sale: 30 },
        { id: "2345", name: "물뿌리개", price: 2000, sale: 20 },
        { id: "23456", name: "숟가락", price: 4000, sale: 10 },
        { id: "6745", name: "거울", price: 4430, sale: 10 },
        { id: "3245", name: "팔찌", price: 8348, sale: 50 },
        { id: "4356", name: "그릇", price: 8000, sale: 30 },
      ],
      sum: 0,
      customerDB: [
        {
          backNum: 1111,
          name: "yeajin",
          wholeNum: "010-8830-1111",
          point: 92834,
        },
        {
          backNum: 2222,
          name: "suzy",
          wholeNum: "010-8830-2222",
          point: 8345,
        },
        {
          backNum: 3333,
          name: "miyeon",
          wholeNum: "010-8830-3333",
          point: 765,
        },
      ],
      selected_customer: null,
      final_sum: 0,
      cardPay: 0,
      cashPay: 0,
      category: [
        {
          bigCate: "패션의류/잡화",
          midCate: ["신발", "냄비프라이펜", "주방조리도구"],
        },
        { bigCate: "뷰티", midCate: ["블러셔", "브러쉬", "립"] },
        { bigCate: "유아동", midCate: ["공", "애기", "미끄럼틀"] },
        { bigCate: "주방용품", midCate: ["국자", "숟가락", "젓가락"] },
        { bigCate: "문구/오피스", midCate: ["연필", "볼펜", "지우개"] },
      ],
      registerItems: [],
    };
  }

  if (action.type === "CONTENT_UPDATE") {
    return { ...state, contents: action.contents };
  }
  if (action.type === "SUMING") {
    return { ...state, sum: action.sum };
  }
  if (action.type === "CUSTOMER") {
    return { ...state, selected_customer: action.selected_customer };
  }
  if (action.type === "APPLY_POINT") {
    return { ...state, final_sum: action.final_sum };
  }
  if (action.type === "PAYMENT") {
    return { ...state, cardPay: action.cardPay, cashPay: action.cashPay };
  }
  if (action.type === "REGISTER") {
    var _registerItems = [...state.registerItems, action.item];
    return { ...state, registerItems: _registerItems };
  }
  if (action.type === "ADD_BIG") {
    var _category = [...state.category, action.item];
    return { ...state, category: _category };
  }
  if (action.type === "ADD_MID") {
    var _category2 = [...state.category];
    _category2[action.i] = action.item_2;
    return { ...state, category: _category2 };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
