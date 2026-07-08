import React,{Component} from "react";
class PropsClassComponent extends Component{
    render(){
      return(
        <>
        <h2>Props - ClassComponent</h2>
        <p>Name : {this.props.name}</p>
        <p>Education : {this.props.education}</p>
        </>
      )  
    }


}
export default PropsClassComponent