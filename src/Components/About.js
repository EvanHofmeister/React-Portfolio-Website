import React, { Component } from 'react';
import resume from '../assets/Resume - Evan Hofmeister.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

      return (
          <section id="about">
              <div className="row">
                  <div className="three columns">
                      <img className="profile-pic" src={profilepic} alt="Profile Pic" />
                  </div>
                  <div className="nine columns main-col">
                      <h2>About Me</h2>

                      <p>
                          I am a data scientist specializing in risk management within the finance industry. With over 6 years of experience, I have honed my skills in developing models related to liquidity and Asset and Liability Management in the retail banking sector. I hold a Master’s degree in Applied Mathematics and a Bachelor’s degree in Mathematical Economics. I am passionate about data, modeling, and problem-solving, and I am constantly seeking to expand my expertise in these areas.
                      </p>

                      <p>
                          As an experienced data analyst with a Master’s degree in Applied Mathematics, I have a proven track record of utilizing predictive analytics, machine learning, and statistical models to drive insights and decision-making in the finance industry. My expertise lies in creating robust models for liquidity and asset and liability management, which have been instrumental in mitigating risks and optimizing financial strategies for retail banks. I am keenly interested in advancing my knowledge in machine learning, modeling, and big data analytics across various fields. I am seeking a data scientist position that offers opportunities for learning and growth in a collaborative team environment.
                      </p>

                      <p>
                          Outside of my professional work, I have a strong interest in machine learning, small electronics, the ocean, and biking. These hobbies not only fuel my curiosity but also keep me engaged with the latest technological advancements and environmental issues.
                      </p>

                      <div className="row">
                          <div className="columns contact-details">
                              <h2>Contact Details</h2>
                              <p className="address">
                                  <span>{name}</span><br />
                                  <span>{phone}</span><br />
                                  <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                              </p>
                          </div>
                          <div className="columns download">
                              <p>
                                  <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      );
  }
}

export default About;
