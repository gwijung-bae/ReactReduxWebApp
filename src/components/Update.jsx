import React, { Component } from 'react';

export default class Update extends Component{

    state = { // connect(state => 받은값) // 상세보기용
        id:this.props.id,
        title:this.props.title,
        desc:this.props.desc
    }  

    onChangeHandler(e){
        this.setState({
            [e.target.name]:e.target.value      // [e.target.name]는 태그안 체인지한 name태그 값 명을 읽어 온다 name="title"  이면 title이다
        });
    }

    render() {
        return (
            <form onSubmit={function(e){
                    e.preventDefault();             
                    this.props.onSubmit( Number(e.target.id.value), e.target.title.value, e.target.desc.value);
                }.bind(this)}>
                
                <input type="hidden" name ="id" value={this.state.id}></input>    
                <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.onChangeHandler.bind(this)} ></input></p>
                <p><textarea type="text" name="desc" placeholder="description" value={this.state.desc} onChange={this.onChangeHandler.bind(this)} ></textarea></p>
                <p><input type="submit"></input></p>
           </form>  
        )
    }
}