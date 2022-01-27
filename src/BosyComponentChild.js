import { Component } from "react";

class BodyComponentChild extends Component {
    render(){
      return(
        <>
            <h5 className="card-title">{this.props.name}</h5>
      <p className="card-text">{this.props.add}</p>
        </>
      )
    }
  }

  export default BodyComponentChild;
