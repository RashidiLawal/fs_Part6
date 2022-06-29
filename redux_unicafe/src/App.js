import { store } from ".";



function App() {
//   const initialState = {
//     good: 0,
//     ok: 0,
//     bad: 0
//  }
 
 
// const counterReducer = (state = initialState, action) => {
//      console.log(action)
//      switch (action.type) {
//          case 'GOOD':
//              return Object.assign({}, state, {good:'1', ok:'0', bad:'0'})
//          case 'OK':
//              return Object.assign({}, state, {good:'0', ok:'4', bad:'0'})
//          case 'BAD':
//              return Object.assign({}, state, {good:'1', ok:'0', bad:'2'})
//          case 'DO_NOTHING':
//              return
//          default:
//              return state
//      }
         
//  }
 
//  const store = createStore(counterReducer)

//  let newState = {}

  
//  newState = store.getState()
   
 
//    store.subscribe(() => {
//      newState = store.getState()
//    })
 
 
// store.dispatch({type: 'GOOD'})
// console.log(store.getState())
// store.dispatch({type: 'OK'})
// console.log(store.getState())
// store.dispatch({type: 'BAD'})
// console.log(store.getState())
// store.dispatch({type: 'DO_NOTHING'})
// store.dispatch({type: 'GOOD'})
// store.dispatch({type: 'OANGE'})
// store.dispatch({type: 'BAD'})
 


 const data = store.getState()


 
  return (
    <div className="App">
            
            <h1>
                {
                    Object.keys(data).map((item, itemIndex)=><p key={`item_${itemIndex}`}>{item}: {data[item]}</p>)
                }
            </h1>
    </div>
  );
}


export default App;
