import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister/cryptocurrency-tracker-app" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Crypto_Dashboard_img.JPG" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Cryptocurrency Market Tracker Dashboard</h3>
                      <p>Application built to track trends in cryptocurrency prices, derivatives, exchanges and indexes.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://final-capstonejx.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/EvanHofmeister/cryptocurrency-tracker-app" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Lidar_Project_img.JPG" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>PicSome WebApp</h3>
                      <p>Created reliefs of the NYC metro from Lidar data using computer vision, machine learning and ArcGis tools</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://pic-somejsx.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/EvanHofmeister" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/EvanHofmeister" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
