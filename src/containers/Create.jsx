import Create from '../components/Create';
import {connect} from 'react-redux';

export default connect(null, 
    function(dispatch){
            return{
                onSubmit:function(title, desc){
                        dispatch({type:'CREATE_PROCESS', title, desc});  // action 값 변수 (변수:값변수 같은은 그냥 적으면됨)
                }
            }
    })(Create);