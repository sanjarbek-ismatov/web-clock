import React from "react";
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
export default Clock;