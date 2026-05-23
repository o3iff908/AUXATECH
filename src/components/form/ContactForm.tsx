/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactForm = () => {

    const form = useRef<HTMLFormElement>(null);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

        const handleForm: FormEventHandler = (event) => {
        event.preventDefault();
        if (!captchaValue) {
            toast.error("Please verify that you are not a robot");
            return;
        }

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_7iyqngd",
                "template_1lzfusx",
                form.current,
                "Tr9-BMOta1N_YTSoO"
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current?.reset();
                },
                (error) => {
                    console.log(error);
                    toast.error("Failed to send message");
                }
            );
};

    return (
        <>
<form
    ref={form}
    className="contact-form contact-form"
    onSubmit={handleForm}>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control no-arrows" id="phone" name="phone" placeholder="Phone" type="number" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Tell Us About Project *"
                    required
                    autoComplete="off"
                />
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <ReCAPTCHA
                            sitekey="6Le5B_gsAAAAACINlHJqjJb0Z9C9wmTsfQTDJNAg"
                            onChange={(value: string | null) => setCaptchaValue(value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            <i className="fa fa-paper-plane" /> Get in Touch
                        </button>
                    </div>
                </div>

                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>
            </form>
        </>
    );
};

export default ContactForm;