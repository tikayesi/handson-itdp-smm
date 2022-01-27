import { Component } from "react";
import BodyComponentChild from "./BosyComponentChild";

class BodyComponent extends Component {
    render(){
      console.log(this.props);
      return(
        <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
        <BodyComponentChild name={this.props.nameFromParent} add={this.props.address}/>
    </div>
  </div>
      )
    }
  }

  export default BodyComponent;