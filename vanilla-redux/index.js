import { createStore } from "redux";

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");

const toggleSwitch = () => {
  return { type: TOGGLE_SWITCH };
};

const increase = (diff) => {
  return {
    type: INCREASE,
    diff,
  };
};

const decrease = () => {
  return { type: DECREASE };
};

const initState = {
  toggle: false,
  counter: 0,
};

divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};

increaseBtn.onClick = () => {
  console.log("Hi");
  store.dispatch(increase(1));
};

decreaseBtn.onClick = () => {
  store.dispatch(decrease());
};

function reducer(prevState = initState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...prevState,
        toggle: !prevState.toggle,
      };

    case INCREASE:
      return {
        ...prevState,
        counter: prevState.counter + action.diff,
      };

    case DECREASE:
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };

    default:
      return prevState;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  console.log(store);

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();
store.subscribe(render);
