import Nav from '../components/Nav';
import {connect} from 'react-redux';

export default connect(               
    function(state){                   // [첫번째 인자] : store(state) ->  connect(state) 통해  -> Component Nav(this.props.data)    
        return {data:state.contents}   // store의 state 값을  ->  connect 통해  -> Component Nav 값을 넘김 받을때는 this.props.data 받음
    },
    function(dispatch){                // [두번째 인자] : Component Nav(onClick)) -> connect(dispatch) 통해  ->  store(reducer(action))    
        return {
            onClick:function(id){
                dispatch({type:'READ', id:id});
            }
        }
    } 
)(Nav);