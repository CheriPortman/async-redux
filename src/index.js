import { createStore, applyMiddleware } from 'redux';


//store = redux store
//next = move to next middleware
//action = dispatched action
const logger = store => next => action => {
  console.log('before reducer has changed state', store.getState());
  //go to next middleware
  next(action);

  console.log('after reducer has changed state', store.getState());
};

const logger2 = store => next => action => {
  console.log('before l2', store.getState());
  next(action);
  console.log('after l2', store.getState());
};




function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI': 
      return 'hi';
    default: 
      return state;
  }
}

const store = createStore(
  reducer,
  //applyMiddleware is like app.use
  applyMiddleware(logger, logger2)
);

store.dispatch({
  type: 'HI'
});


// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App';

// render(
//   <App />,
//   document.getElementById('root')
// );
