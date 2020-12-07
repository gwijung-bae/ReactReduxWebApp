
import {createStore} from 'redux';

let initState = {
    mode:'WELCOME',
    welcome_content:{
        title:'WEB',
        desc:'Hello, WEB'
    },
    selected_contents_id:1,
    contents:[
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}
    ]
}

function reducer(state=initState, action){
   
    if(action.type === 'WELCOME'){
        return {...state, mode:'WELCOME'};
    }
    if(action.type === 'READ'){
        return {...state, mode:'READ', selected_contents_id:action.id};
    }
    if(action.type === 'CREATE'){
        return {...state, mode:'CREATE'};
    }
    
    if(action.type === 'UPDATE'){
        return {...state, mode:'UPDATE'};
    }
    if(action.type === 'DELETE'){
        return {...state, mode:'DELETE'};
    }

    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());