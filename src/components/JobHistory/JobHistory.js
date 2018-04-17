import React, { Component } from 'react'
import './JobHistory.css';
import Job from './job'


class JobHistory extends Component {
    state = {
        job1: {
            title: 'Project Engineer',
            company: 'Kier Construction',
            time: 'Jan 2017 - Present',
            description: 'Currently employed with Kier Construction in the role of a Project Engineer. I coordinate all products that are used on the building to ensure they meet the quality standards as defined by the architect. Am responsible for coordinating issues with drawings with architect/engineers and subcontractors to find a solution. If there are costs associated I put together a change order to present to the developer, this involves working with the subcontractor to come collect price estimates. Required to manage submittal process in such a way that we maintain the required schedule. Maintain all as-buits, specifications, and plan changes. '
        },
        job2: {
            title: 'Estimator',
            company: 'Hirschi Masonry',
            time: 'April 2015 - August 2015',
            description: 'Worked as an estimator. I did manpower and material takeoffs to determine cost of projects for general contractors. Would submit the bid for review and would sit with general contractors to try and get the bid awarded to our team. Would then handle the submittals and assist the project manager with project coordinating material and manpower. If there was a scope change on the job I was tasked with putting together a change order to cover the required work. I also would coordinate with the general contractor regarding project Requests for Information. '
        },
        job3: {
            title: 'Head Custodian',
            company: 'Alpine School District',
            time: 'April 2013 - April 2015',
            description: 'Responsible for general maintenance of the school and grounds. This included all mechanical, plumbing, and electrial systems. The school I worked at was extremely challenging as it was almost 100 years old and required much more maintenance than the newer buildings. I coordinated with district and 3rd party vendors for repairs to the HVAC, Plumbing, etc. I ran a crew of 5 to 7 part time janitors, including payroll budgets and material ordering. '
        }
    }



    render() {
        console.log('JobHistory.render()')
        return (
            <div>
                <Job title={this.state.job1.title} company={this.state.job1.company} time={this.state.job1.time} description={this.state.job1.description} />
                <Job title={this.state.job2.title} company={this.state.job2.company} time={this.state.job1.time} time={this.state.job2.time} description={this.state.job2.description} />
                <Job title={this.state.job3.title} company={this.state.job3.company} time={this.state.job3.time} description={this.state.job3.description} />

                <footer>
                    Tyler Thomas | Web Developer | Warrenpeace productions &copy;
             </footer>
            </div>
        )
    }
}

export default JobHistory