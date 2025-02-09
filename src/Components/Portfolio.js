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
                  <a href="https://github.com/EvanHofmeister/PySpark-NLP-Article-Classification-Model/blob/main/PySpark-NLP-Article-Classification-Model.ipynb"
                     className="image fit thumb" target="_blank" rel="noopener noreferrer"><img
                      src="images/thumbs/Pyspark_NLP_Notebook_crop.png" alt="final-capstone"/></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>NLP Article Classification Models With PySpark</h3>
                      <p>Comparison between performance of Logistic Regression, Naive Bayes, Decision Trees and Random
                        Forest models for multi-classification of text based articles using PySpark.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <div className="buttons">
                          <li><a
                              href="https://github.com/EvanHofmeister/PySpark-NLP-Article-Classification-Model/blob/main/PySpark-NLP-Article-Classification-Model.ipynb"
                              className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a>
                          </li>
                          <li><a
                              href="https://github.com/EvanHofmeister/PySpark-NLP-Article-Classification-Model/blob/main/PySpark-NLP-Article-Classification-Model.ipynb"
                              className="button project-button brands" target="_blank" rel="noopener noreferrer"><i
                              className="fa fa-github icon"></i>View Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-python-plain technology"></i>
                          <i className="devicon-jupyter-plain-wordmark technology"></i>
                        </div>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister/animal-model-rfid-tracking/blob/main/README.md"
                     className="image fit thumb" target="_blank" rel="noopener noreferrer"><img
                      src="images/thumbs/RFID_Animal_Research_Thumbnail.png"/></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>RFID Tracking for Animal Modeling Research</h3>
                      <p>A prototype Arduino-based RFID system to track the activity of research animals, including eating and movement, in real-time. Cost-effective, scalable, and designed to simplify data collection in behavioral research.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <div className="buttons">
                          <li><a href="https://github.com/EvanHofmeister/animal-model-rfid-tracking/blob/main/README.md"
                                 className="button project-button" target="_blank" rel="noopener noreferrer">View
                            Demo</a></li>
                          <li><a href="https://github.com/EvanHofmeister/animal-model-rfid-tracking/blob/main/README.md"
                                 className="button project-button brands" target="_blank" rel="noopener noreferrer"><i
                              className="fa fa-github icon"></i>View Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-arduino-plain technology"></i>
                          <i className="devicon-c-plain technology"></i>
                        </div>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister" className="image fit thumb" target="_blank"
                     rel="noopener noreferrer"><img src="images/thumbs/Yield_Curve_standard_size.png"
                                                    alt="final-capstone"/></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>FRED and US Treasury Economic Data Dashboard</h3>
                      <p>Dashboard built to fetch economic data from the Federal Reserve and US Treasury Department Rest
                        APIs. Data is plotted using the Plotly.js and D3.js libraries (Yield Curve shown to the
                        left). </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <div className="buttons">
                          <li><a href="https://react-econ-dataviz.netlify.app/" className="button project-button"
                                 target="_blank" rel="noopener noreferrer">View Demo</a></li>
                          <li><a href="https://react-econ-dataviz.netlify.app/" className="button project-button brands"
                                 target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View
                            Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-javascript-plain technology"></i>
                          <i className="devicon-react-plain technology"></i>
                        </div>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister" className="image fit thumb" target="_blank"
                     rel="noopener noreferrer"><img src="images/thumbs/Lidar_Relief_Thumbnail.png" alt="pic-some"/></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Lidar ArcGis using Big Data</h3>
                      <p>Created reliefs of the NYC metro from Lidar data using computer vision, machine learning, and
                        ArcGis tools.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <div className="buttons">
                          <li><a href="https://ehgeoinformatics.netlify.app/" className="button project-button"
                                 target="_blank" rel="noopener noreferrer">View Demo</a></li>
                          <li><a href="https://ehgeoinformatics.netlify.app/" className="button project-button brands"
                                 target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View
                            Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-python-plain technology"></i>
                          <i className="devicon-googlecloud-plain-wordmark technology"></i>
                          <i className="devicon-react-plain technology"></i>
                        </div>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister" className="image fit thumb" target="_blank"
                     rel="noopener noreferrer"><img src="images/thumbs/Housing_Wealth_Pipeline_crop.png" alt="pic-some"/></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Data Engineering - Housing Wealth Pipeline</h3>
                      <p>Google Cloud Services based data Pipeline to estimate aggregate US housing wealth from Zillow Automated Valuation Model data (AVM) and American Community Survey (ACS) Census data.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <div className="buttons">
                          <li><a href="https://github.com/EvanHofmeister/Housing-Wealth-Pipeline" className="button project-button"
                                 target="_blank" rel="noopener noreferrer">View Demo</a></li>
                          <li><a href="https://lookerstudio.google.com/reporting/94676c29-0680-4b5f-b5cf-7398334a1cb8" className="button project-button brands"
                                 target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View
                            Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-python-plain technology"></i>
                          <i className="devicon-amazonwebservices-plain-wordmark technology"></i>
                          <i className="devicon-terraform-plain-wordmark technology"></i>
                        </div>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/EvanHofmeister/cryptocurrency-tracker-app" className="image fit thumb"
                     target="_blank" rel="noopener noreferrer"><img src="images/thumbs/Crypto_Dashboard_Thumb_Crop.png"
                                                                    alt="final-capstone"/></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Cryptocurrency Market Tracker Dashboard</h3>
                      <p>Application built to track trends in cryptocurrency prices, derivatives, exchanges, and
                        indexes.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <div className="buttons">
                          <li><a href="https://ehcryptocurrencytracker.netlify.app/" className="button project-button"
                                 target="_blank" rel="noopener noreferrer">View Demo</a></li>
                          <li><a href="https://github.com/EvanHofmeister/cryptocurrency-tracker-app"
                                 className="button project-button brands" target="_blank" rel="noopener noreferrer"><i
                              className="fa fa-github icon"></i>View Source</a></li>
                        </div>
                        <div className="languages">
                          <i className="devicon-javascript-plain technology"></i>
                          <i className="devicon-react-plain technology"></i>
                        </div>
                      </div>
                    </ul>
                  </div>
                </article>

                <ul className="actions">
                  <li className="wide-button"><a href="https://github.com/EvanHofmeister"
                                                 className="button portfolio-button" target="_blank"
                                                 rel="noopener noreferrer">Full Portfolio</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
