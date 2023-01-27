import React from "react";

export const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <h4>About the project</h4>
                    <hr />
                    <p>This project is made using React Redux and Context API. This is a solemn project made by Vaibhav Shrivastava under Nagarro Training.
                        This project is hosted on Github Pages to and has been pointed towards personal domain.
                        This project has also been hosted using surge for learning purpose. 
                        Technologies learned by building this project - <br /><br />
                        <ol>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Context Api</li>
                        </ol>
                    </p>
                </div>
                
            <div className="col-4">
                <center>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pvn-motivational-instagram-quote-cards1-1660322639.jpg?crop=1xw:1xh;center,top&resize=980:*" height="550px" width="350px" className="quote-img"/>
                </center>
            </div>
            </div>
        </div>
    )
}