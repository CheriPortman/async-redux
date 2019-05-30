start with app.js. hook it up. 
***
quotes/Quote.js
```js
import React, PropTypes;

function Quote({ text }) {
  return (
    <section> 
      <p>{text}
    </section>
  )
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
}

export default Quote;
```
***

service/futuramaApi.js
```js
export const getQuotes = () => {
  return fetch()
    .then(res =>([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw'couldn't fetch quotes''
    })
}
// ...see notes
```
store.js
```js
import { createStore, applyMiccleware, compose } from 'redux';

export default createStore(
  reducer, 
  compose(
      applyMiddleware(),
      window.__REDUC......
  )
);

```
***
reducers/index.js
```js
import { comvineReducers } from 'redux';

```
*** reducers/quotesReducer.js

```js
const initialState = {
  list: [],
  loading: false,
  error: null
};
export default function reucer(state - [], action) {
  return state;
}
```


***actions/quotesActions.js

```js

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const fetchQuotes = () => dispatch => {
  return getQuotes()
    .then(quotes => {
      dispatch({
          type: FETCH_QUOTES,
          payload: quotes
      })
    })
}
```
***test this thing : quotesActions.test.js
    ***need a mock function, or test will be undefined
```js

jest.mock('./services/futuramaApi.js')

describe('quotes actions)
  it('fetches a lits of quotes then dispatches an action, () => {
    const dispatch = jest.fn();  //make sure dispatch function gets called with the appropiate object
    return fetchQuotes()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_qUOTES,
          payload: []
        })
      })
  })
```
*** services/__mocks__
```js
export const getQuotes =() => {
  return Promise.resolve([])
}
```
***update quotesREducer.js
```js
export default....
switch(action.type) {
  case: FETCH_QuUOTES:
    return { ...state, list: action.payload }
}
```
***to index.js
```js
import render, app, Provider (react-redux)
build render
```

***
messed around with index.js in reducers

*** containers/quotes/QuoteChallenge.js  
***see ryan's notes
```js
import REact, { PureCompoenet } from 'react'
import { connect } from 'react-redux'

// class QuoteChallenge extends PureComponenet {
  // static propTypes = {
//      quote: PropTypes.string,
    // fetch: PropTypes.func.isRequired
  // }
  // render() {
    // 
//   }
// }

const mapStateTpProps = state => ({
    // quotes: getQuote(state, 0)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToPrps,
  mapDispatchToProps
)();

```
*** selectors/quoteSelector.js
```js
//these come from reducer
export const getQuotes = state => state.quotes.list;
export const getQuotesLoading = state.quotes.loading;
export const getQuotesError = state => state.quotes.error;
export const getQuote = (state, index) => getQuotes()
```

back to QuoteChallenge.js - fill it out as above in comments, use Ryan's notes/example demo

***
I get lost here.....

in QuoteChallenge: need componentDidMount() { this.props.fetch(); }, since the component doesn't do the fetching - this is a container's job. See Ryan's notes. 
