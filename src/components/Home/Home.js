import React, { Component } from 'react'
import JobHistory from './../JobHistory/JobHistory'
import Projects from './../Projects/Projects'
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props)
        console.log('Home.constructor()', props)
      }
    
      componentWillMount() {
        console.log('Home.componentWillMount()')
        }f
      componentDidMount() {
        console.log('Home.componentDidMount()')
      }
       
    render() {
        console.log('Home.render()')
        return (
            <div>
                
                    <header>
                        <h1> Tyler Thomas</h1>
                        
                    </header>
                    <div class="container"> 
                        <img src="./2017UtesGame.jpeg"/>
                    <div>
                        <p>My name is Tyler Thomas. I am a Utah native who loves being here. <br />I grew up in Lehi and graduated from Lone Peak High School in 2009. <br />After high school I served an LDS mission in Spokane Washington. 
                            While there I spent a lot of my time in Northern Idaho and Montana. <br />After my mission I continued school at UVU while working full time for Alpine School District. 
                            <br />I was a head custodian at an elementary school for several years and I really enjoyed that.<br /> <br />
                            
                            When I left employment at Alpine School District I moved to Las Vegas to do an internship for Hirschi Masonry.<br /> 
                            During that time, I worked in the estimating office doing cost estimations and takeoffs. <br />I originally thought I would head back to Vegas after I finished my degree in Construction Management.
                            However, the atmosphere was not something that I enjoyed. <br />During my final year of college, I was offered a job working for a commercial general contractor named Kier Construction.<br /> I have been working at Kier
                            for about a year and a half at this point. <br /><br />
                            
                            My title is a Project Engineer and my duties involve working with the subcontractors to ensure the correct products are used in construction. <br />I also
                            work with the architect to iron out any plan discrepancies. <br />I also handle any changes in scope and address cost ramifications with the subcontractors and the developers.<br /> I enjoy the work, but I think
                            I would enjoy a career in web development more. <br />In April of 2018 I begin an after-hours web-development boot camp through Helio Training. It has been a great atmosphere for me to develop my tech skills. <br />I am married with 2 young kids and a Pug. 

                             </p>

                        <ul>
                            <h2>Tech Skills/Interests</h2>
                            <li>HTML/CSS</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Javascript/JSON</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>RESTful APIs</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>

                        </ul>

                    </div>
                    </div>
             <footer>
                 Tyler Thomas | Web Developer | Warrenpeace productions &copy;
             </footer>
                </div>
        )
    }
}

export default Home