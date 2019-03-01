// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const ContactForm = () => (
  <div>
    <div className="media-box">
      <h2>Contact Us</h2>
    </div>
    <div className="divider-xs" />
    <Formik
      initialValues={{
        yourname: "",
        youremail: "",
        yoursubject: "",
        message: ""
      }}
      validate={values => {
        let errors = {};
        if (!values.yourname) {
          errors.yourname = "Tell us Your Name, Please!";
        }
        if (!values.yoursubject) {
          errors.yoursubject = "Regarding What???";
        }
        if (!values.message) {
          errors.message = "You Wanna Say something!!! Right";
        }
        if (!values.youremail) {
          errors.youremail = "Oh!Email is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.youremail)
        ) {
          errors.youremail = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form id="form-contact" noValidate>
          <div className="comment-form row">
            <div className="col-md-8">
              <div className="form-group">
                <label className="contact-label" htmlFor="InputName">
                  Name:<span className="required">*</span>
                </label>
                <Field
                  type="text"
                  id="InputName"
                  className="form-control"
                  name="yourname"
                  placeholder="Your Name"
                />
                <ErrorMessage className="required" name="yourname" component="div" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <label className="contact-label" htmlFor="InputEmail">
                  Email:<span className="required">*</span>
                </label>
                <Field
                  type="email"
                  id="InputEmail"
                  name="youremail"
                  className="form-control"
                  placeholder="Your Email"
                />
                <ErrorMessage className="required" name="youremail" component="div" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <label className="contact-label" htmlFor="InputName">
                  Subject:<span className="required">*</span>
                </label>
                <Field
                  type="text"
                  id="InputName"
                  className="form-control"
                  name="yoursubject"
                  placeholder="Subject"
                />
                <ErrorMessage className="required" name="yoursubject" component="div" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <span className="icon icon-bubbles-2" />
                <label className="contact-label" htmlFor="InputComment">
                  Message:<span className="required">*</span>
                </label>
                <Field
                  component="textarea"
                  className="form-control"
                  name="message"
                  id="InputComment"
                />
                <ErrorMessage className="required" name="message" component="div" />
              </div>
              <div className="divider-sm" />
              <button
                className="btn contact-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Send Message
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
