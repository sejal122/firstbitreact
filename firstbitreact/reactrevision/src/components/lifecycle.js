import React, { PureComponent } from 'react'

class Lifecycle extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name:"sejal"
        }
    }
static getDerivedStateFromProps(props,state){
    return {name:props.name}
}
    render() {
        return (
            <div>
                <h1>hi i am {this.state.name}</h1>
            </div>
        )
    }
}

export default Lifecycle