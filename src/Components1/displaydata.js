import React, { Component } from 'react';
import axios from 'axios';
export class DisplayData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       post:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>{console.log(Response)
    this.setState({post:Response.data})})
    .catch(error=>{console.log(error)})
}

  render() {
    const {post} =this.state
    return (
      <div>
      {JSON.stringify(post[5])}
      </div>
    )
  }
}

export default DisplayData