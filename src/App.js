import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

class App extends Component {


  add() {

  }
  render() {
    return (
      <div>
        <div>
         花朵数量:
         <input type="text" ref='fnum'/> 
         花朵名称:
         <input type="text" ref='fname'/>   
         <button onClick={()=>{this.add()}}>增加</button> 
        </div>
        <hr/>
        <ul>
          {
            this.props.flowers.map((item,index)=>{
              return <li key={index}>
              {item.num}-{item.name}
              <button onClick={()=>{this.props.del(item.num)}}>x</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  (state)=>{
     return {
       flowers: state.flowers,
       fruits: state.fruits
     }
  },
  (dispatch)=>{
     return {
        del(num){
           dispatch({"type": "del" , num})
        }
     }
  }
)(App);
