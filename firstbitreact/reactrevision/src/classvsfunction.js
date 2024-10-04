import React, { PureComponent } from 'react'

class Classvsfunction extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            color:"red"
        }
    }
    componentDidMount(){
       setTimeout(()=>{
        this.setState({color:"blue"})
       },1000)
    }

    render() {
        return (
            <div>
                <h1>hello from class component! I am {this.props.name}</h1>
                <h5>I am learning { this.props.topic}</h5>
                <p>My fav color is {this.state.color}</p>
            </div>
        )
    }
}

export default Classvsfunction;
// function component


