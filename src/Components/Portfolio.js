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
                  <a href="https://github.com/EvanHofmeister/cryptocurrency-tracker-app" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Crypto_Dashboard_Thumb_Crop.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Cryptocurrency Market Tracker Dashboard</h3>
                      <p>Application built to track trends in cryptocurrency prices, derivatives, exchanges, and indexes.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://ehcryptocurrencytracker.netlify.app/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/EvanHofmeister/cryptocurrency-tracker-app" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>

                <div className="article-wrapper">
                  <article className="col-12 col-12-xsmall work-item">
                    <a href="https://github.com/EvanHofmeister/PySpark-NLP-Article-Classification-Model/blob/main/PySpark-NLP-Article-Classification-Model.ipynb" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Pyspark_NLP_Notebook_crop.png" alt="final-capstone" /></a>
                    <div className="art-description">
                      <div className="text-wrapper">
                        <h3>NLP Article Classification Models With PySpark</h3>
                        <p>Comparison between performance of Logistic Regression, Naive Bayes, Decision Trees and Random Forest models for multi-classification of text based articles using PySpark.</p>
                      </div>
                      <ul className="actions">
                        <div className="actions-wrapper">
                          <li><a href="https://github.com/EvanHofmeister/PySpark-NLP-Article-Classification-Model/blob/main/PySpark-NLP-Article-Classification-Model.ipynb" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                          <li><a href="https://github.com/EvanHofmeister/PySpark-NLP-Article-Classification-Model/blob/main/PySpark-NLP-Article-Classification-Model.ipynb" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-python-plain technology"></i>
                          <i className="devicon-jupyter-plain-wordmark technology"></i>
                        </div>
                      </ul>
                    </div>
                  </article>
                </div>

                <div className="article-wrapper">
                  <article className="col-12 col-12-xsmall work-item">
                    <a href="https://github.com/EvanHofmeister" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Yield_Curve_standard_size.png" alt="final-capstone" /></a>
                    <div className="art-description">
                      <div className="text-wrapper">
                        <h3>FRED and US Treasury Economic Data Dashboard</h3>
                        <p>Dashboard built to fetch economic data from the Federal Reserve and US Treasury Department Rest APIs. Data is plotted using the Plotly.js and D3.js libraries (Historic Yield Curve shown to the left). </p>
                      </div>
                      <ul className="actions">
                        <div className="actions-wrapper">
                          <li><a href="https://github.com/EvanHofmeister" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                          <li><a href="https://github.com/EvanHofmeister" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-javascript-plain technology"></i>
                          <i className="devicon-react-plain-wordmark technology"></i>
                        </div>
                      </ul>
                    </div>
                  </article>
                </div>

              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Lidar_Project_img.JPG" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Lidar ArcGis using Big Data</h3>
                      <p>Created reliefs of the NYC metro from Lidar data using computer vision, machine learning, and ArcGis tools.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://dashboard.heroku.com/apps" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
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
