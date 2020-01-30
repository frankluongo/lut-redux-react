//
// This File and Repo just contains example code for making a Redux Store
//

// const greeting = () => ({ welcomeMsg: 'hello' });

const defaultState = {
  welcome: 'Hi',
  otherState: 'Some Stuff'
}

// This is called a "Reducer" because it merges the previous state with the new state
const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_ME':
      return {
        ...state,
        welcome: action.result
      }
    case 'GREET_WORLD':
      return {
        ...state,
        welcome: 'Hello World'
      }
    default:
      return state;
  }
};


const store = createStore(greeting)
// Actions in Redux are objects, they describe the thing to do
// Dispatchers do the things

// API Example
const result = 'something coming back from an API';

store.dispatch({
  type: 'GREET_ME',
  // This can be used in our reducer as action.result
  result
});
console.log(store.getState())
