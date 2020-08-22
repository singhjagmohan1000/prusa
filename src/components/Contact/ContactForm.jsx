// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {URL} from "../../constants"
import axios from "axios";
import Recaptcha from "react-recaptcha";
export class  ContactForm extends React.Component {
    constructor(props) {
    super(props)
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = {
            isVerified: false
        }
}
    componentDidMount() {
        const script = document.createElement("script");
        script.src =
            "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    }
    verifyCallback(response){
    if(response){
        this.setState({
            isVerified: true
        })
    }
    }
    render() {
        return (
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

onSubmit={(values, {setSubmitting, setStatus}) => {
    if(this.state.isVerified){
    setTimeout(() => {
        axios.post(`${URL}contact`, {data: values})
            .then((res) => {
                if (res.status === 200)
                    setStatus({success: "Thanks for contacting Us, we will reach out to you soon!"})
                else
                    setStatus({failed: "We are unable to get your message at the moment, please call us on (408)272 5200!"})
            }).catch((err) => {
            console.log(err)
            setStatus({failed: "We are unable to get your message at the moment, please call us on (408)272 5200!"})
        });
        setSubmitting(false);

    }, 400);
}else{
        alert("Please verify recaptcha")

    }}

}
>
{({isSubmitting, status}) => (
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
                    <ErrorMessage className="required" name="yourname" component="div"/>
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
                    <ErrorMessage className="required" name="youremail" component="div"/>
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
                    <ErrorMessage className="required" name="yoursubject" component="div"/>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <span className="icon icon-bubbles-2"/>
                    <label className="contact-label" htmlFor="InputComment">
                        Message:<span className="required">*</span>
                    </label>
                    <Field
                        component="textarea"
                        className="form-control"
                        name="message"
                        id="InputComment"
                    />
                    <ErrorMessage className="required" name="message" component="div"/>
                </div>
                <div className="divider-sm"/>
                <Recaptcha
                    sitekey="6LcESOoUAAAAAANf63iYrcuFT4UqujNzW5Gi9f3q"
                    render="explicit"
                    verifyCallback={(response) => { this.verifyCallback(response)}}
                    onloadCallback={() => { console.log("done loading!"); }}
                />
                <br></br>
                <button
                    className="btn contact-btn"
                    type="submit"
                    // disabled={isSubmitting}
                >
                    Send Message
                </button>
                <div>{status ? status.success ?
                    <div className="alert alert-success col-md-4" role="alert">{status.success}</div>
                    : <div className="alert alert-danger col-md-4" role="alert">{status.failed}</div> : ''}</div>

            </div>
        </div>
    </Form>
)}
</Formik>
</div>
        )}
};
