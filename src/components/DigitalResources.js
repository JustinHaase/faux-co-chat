import React from "react";
import ReactDOM from 'react-dom';



const DigitalResources = (props) => {

    return(  
    <div className="digital-resources-container" id="resource">Digital Resources!                     
        <div className="addResource">
            <button className="open-button" onClick={props.open}>Add Resource</button>

            <div className="form-popup" id="myForm">
                <form action="/action_page.php" className="form-container">
                    <h1>Resource Information</h1><br></br>

                    <label for="name"><b>Enter Resource Name</b></label>
                    <input type="text" placeholder="Resource Tutorial" required></input>
                    <label for="url"><b>Enter Resource URL</b></label>
                    <input type="text" placeholder="Example@example.com" required></input>
                    <button type="submit" className="btn create" onClick={props.create}>Create Resource</button>
                    <button type="button" className="btn cancel" onClick={props.close}>Cancel</button>
                    <div className="store"></div>
                </form>
            </div>
        </div>
        <div id='list'></div>
    </div>
    )
}


export default DigitalResources;