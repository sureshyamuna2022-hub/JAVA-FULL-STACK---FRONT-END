import React,{Component} from "react";

class CCStateExample extends Component{
    constructor(){
        super()
        this.state={count:0}
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})

    }
    render(){
        return(
            <>
            <p>{this.state.count}</p>
            <p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </p>
            </>
        )
    }
}
export default CCStateExample