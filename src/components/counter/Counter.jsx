import React, { Component } from 'react';
import './counter.css';


class Counter extends Component{

  constructor(){
    super();
    this.state ={
      counter:0
    };
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }

  render()
  {
    const style={fontSize:"30px", textAlign: "center"};
    return(
      <div className="mainCounter">
        <CounterButton by={1} operation="+" incrementMethod={this.increment}/>
        <CounterButton by={5} operation="+" incrementMethod={this.increment}/>
        <CounterButton by={10} operation="+" incrementMethod={this.increment}/>
        <CounterButton by={1} operation="-" decrementMethod={this.decrement}/>
        <div style={style} className='count'>
        <span>{this.state.counter}</span>
        </div>
        <br />
        <div className="buttonDiv">
          <button className="reset" onClick={this.reset}> Reset</button>
        </div>
      </div>
      
    );
  }

  decrement(by)
  {
    this.setState(
      (prevState) => {
      return {counter: prevState.counter - by}
    });
  }

  increment(by)
   {
    console.log(`Increment from parent by ${by}`);
    this.setState(
      (prevState) => {
      return {counter: prevState.counter + by}
    });
  }

  reset(){
    this.setState({
      counter: 0
    });
  }

}



class CounterButton extends Component{

  constructor(){
    super();
    this.action=this.action.bind(this);
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  }

  render()
  {
    
    return (
      <div className='mainDiv'>
        <div className='buttonDiv'>
          <button onClick={this.action} className='button'>{this.props.operation}{this.props.by}</button>
        </div>
        <br />
       
    </div>
    );
  }

  action(){
    console.log("operation: " + this.props.operation);
    if(this.props.operation === "+")
      this.increment();
    else
      this.decrement();
  }

  increment()
  {
    this.props.incrementMethod(this.props.by);
  }
  
  decrement()
  {
    this.props.decrementMethod(this.props.by);
  }

}

CounterButton.defaultProps = {
  by:1
}

export default Counter;
  