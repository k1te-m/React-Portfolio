import React, { useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";


function Contact() {
  const [messageObject, setMessageObject] = useState({
    name: "",
    email: "",
    message: ""
  })

  function handleInputChange(event) {
    const { name, value } = event.target
    setMessageObject({...messageObject, [name]: value})
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (messageObject.name && messageObject.email && messageObject.message) {
      console.log(messageObject);
      API.sendMessage({
        name: messageObject.name,
        email: messageObject.email,
        message: messageObject.message
      })
        .then((res) => {
          setMessageObject({
            ...messageObject,
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container" id="contactMe">
      <div className="row">
        <div className="col-12">
          <h2 className="border-bottom pb-3 pt-3">Contact</h2>
          <form id="contactBox">
            <div className="form-row">
              <Input 
                onChange={handleInputChange}
                name="name"
                placeholder="Jane Smith"
                value={messageObject.name}
              />
              <Input 
                onChange={handleInputChange}
                name="email"
                placeholder="jsmith@example.com"
                value={messageObject.email}
              />
              <TextArea 
                onChange={handleInputChange}
                name="message"
                placeholder="Enter your message here!"
                value={messageObject.message}
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </div>
          </form>

          <div className="modal" tabIndex="-1" id="messageModal" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Thank You</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Your message has been received...</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
