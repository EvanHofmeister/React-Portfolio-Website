import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.title}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span>{work.location}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

          <div className="three columns header-col">
              <h1><span>Coursework</span></h1>
          </div>

          <div className="nine columns main-col">
              <p>
                  Data-driven Optimization (Machine Learning, Deep Learning, Dynamic Programing, Reinforcement Learning), Statistical Learning, Industrial and Systems Engineering, Credit Risk Management, Financial Ethics,Stochastic Calculus, Financial Data Science, Financial Software Development and Integration with C++, Machine Learning for Finance, Simulation and Monte Carlo Methods, Asset Allocation and Portfolio Management, Optimization Methods in Finance, Investment Science, Options and Other Derivatives
              </p>
          </div>
      </div>




      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <section id="four" className="skills">
            <div className="languages skills show-on-scroll">
                <i className="devicon-python-plain-wordmark colored technology"></i>
                <i className="devicon-rstudio-plain colored technology"></i>
                <i className="devicon-heroku-plain-wordmark technology"></i>
                <i className="devicon-git-plain-wordmark colored technology"></i>
                <i className="devicon-latex-original technology"></i>
                <i className="devicon-javascript-plain colored technology"></i>
                <i className="devicon-postgresql-plain-wordmark  technology"></i>
                <i className="devicon-react-plain-wordmark colored technology"></i>
                <i className="devicon-docker-plain-wordmark technology"></i>
                <i className="devicon-mysql-plain-wordmark colored technology"></i>
                <i className="devicon-github-original technology"></i>
                <i className="devicon-amazonwebservices-plain-wordmark colored technology"></i>
                <i className="devicon-apache-plain-wordmark colored technology"></i>
                <i className="devicon-googlecloud-plain-wordmark colored technology"></i>
                <i className="devicon-bash-plain colored technology"></i>
                <i className="devicon-arduino-plain-wordmark colored technology"></i>


            </div>
          </section>
				</div>
			</div>
   </section>
    );
  }
}

export default Resume;
