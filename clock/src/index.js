import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class Clock extends React.Component{
  state = {
    date: new Date()
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount(){
    clearInterval(this.intervalID)
  }
  render(){
    return (
      <>
      <div className='clock'>
        <h1>HI, dear user</h1>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
      </>
    )
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
