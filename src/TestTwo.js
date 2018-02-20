import React from 'react';
export default class TestTwo extends React.Component {
    constructor(props){
      super();
    }

    

    render() {
      return (
        <div>
          <h1>我是子组件，收到父组件的参数为：{this.props.num}</h1>
          <button onClick={()=>{this.props.add()}}>点击改变父组件的props的值</button>
        </div>
      )
    }
}