
import {createStore} from 'redux';


let initState = {
    mode:'READ',
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

function reducer(state, action){
    if(state === undefined){
        return initState;
    }

    if(action.type === 'CHANGE_MODE'){
        return {...state, mode:action.mode};
    }

    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());