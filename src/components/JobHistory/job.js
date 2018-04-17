import React, { Component } from 'react'



class Job extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.company}</h2>
                <h4>{this.props.time}</h4>
                <p>{this.props.description}</p>


            </div>



        
        )


    }
    

}













export default Job