import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
    }
     Counter = () =>{
        const {count} = this.state;
        return count === 0 ? <h2>Zero</h2> : count;
    }
    styles={
        fontSize : 10,
        fontWeight: "bold",
    
    };
    render() { 
       let classes ="badge m-2 badge-";
       classes += {this.state.count ===0} ? "warning" : "primary";


        return (
            <div>
            <span style={classes} className="badge badge-warning m-2">{this.Counter()}</span>
            <t></t>
            <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
}
 
export default Counter;