import React, { useEffect, useState } from 'react';


// export class ClockToggle extends React.Component {
//   // render () {
//     return (
//       <button 
//         type="button"
//         className="clock-toggle" 
//         onClick={this.props.toggleClock}
//       >
//         Toggle Clock
//       </button>
//     )
//   // }
// } 

 export const ClockToggle = (props) => {
      return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={props.toggleClock}
      >
        Toggle Clock
      </button>
    )
}

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }
  
  const Clock = (props) => {

    const[time, setTime] = useState(new Date())

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    const timezone = time
      .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
      .replace(/[^A-Z]/g, "") // Strip out all but capitals
      .slice(3); // Eliminate initial GMT
    const tick = () => {
      setTime(new Date());
    };

  useEffect(()=>{ 
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      console.log("Clearing Clock interval!");
      clearInterval(interval);
    };
    
  },[])
  
  // componentDidMount(){

  //   this.interval = setInterval(tick, 1000);
  // }
  
  
  // componentWillUnmount() {
  //   console.log("Clearing Clock interval!")
  //   clearInterval(this.interval);
  // }
  

 
  // tick = () => {
  //   this.setState({ time: new Date() });
  // }

  // render() {


    return (
      <section className="clock-section">
        <h1>Clock</h1>
        <div className='clock'>
          <p className="time">
            <span>
              Time:
            </span>
            <span>
              {`${hours}:${minutes}:${seconds} ${timezone}`}
            </span>
          </p>
          <p className="date">
            <span>
              Date: 
            </span>
            <span>
              {time.toDateString()}
            </span>
          </p>
        </div>
      </section>
    );
  }

export default Clock;
