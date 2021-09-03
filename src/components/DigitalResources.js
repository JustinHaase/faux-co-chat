import React from "react";

const DigitalResources = (props) => {

    return(
        
    <div className="digital-resources-container">Digital Resources!                     
        <div className="addResource">
            <button className="open-button" onClick={props.open}>Add Resource</button>

            <div className="form-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1>Enter Resource Information</h1>

                    <label for="name"><b>Enter Resource Name</b></label>
                    <input type="text" placeholder="Resource Tutorial" name="name" required></input>
                    <label for="url"><b>Enter Resource URL</b></label>
                    <input type="text" placeholder="Example@example.com" name="name" required></input>
                    <button type="submit" className="btn create" onClick={props.create}>Create Resource</button>
                    <button type="button" className="btn cancel" onClick={props.close}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default DigitalResources;