import {ADD_TODO} from "./actions";

/**
 * ["코딩", "약속"];
 */
const initState = ["초기"];

export function todoApp(prevState = initState, action) {
  // init
  // if(prevState === undefined) {
  //   return []; 
  // }

  if(action.type === ADD_TODO) {
    return [...prevState, action.todo];
  }

  return prevState;
}