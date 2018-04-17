import React, { Component } from 'react'


class Project extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.summary}</p>

            
            </div>




        )


    }


}



export default Project