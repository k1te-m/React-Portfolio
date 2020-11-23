import React from "react";

function Contact() {
  return (
    <div className="container" id="contactMe">
      <div className="row">
        <div className="col-12">
          <h2 className="border-bottom pb-3 pt-3">Contact</h2>
          <form id="contactBox">
            <div className="form-row">
              <div className="form-group col-12">
                <label for="name">Name</label>
                <input className="form-control" id="name" placeholder="Name" />
              </div>
              <div className="form-group col-12">
                <label for="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group col-12">
                <label for="textArea">Message</label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-lg btn-warning mb-5"
                id="subButton"
                data-target="#messageModal"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="modal" tabindex="-1" id="messageModal" role="dialog">
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
