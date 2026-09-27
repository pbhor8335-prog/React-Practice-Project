import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">

            <h1>Contact Us</h1>

            <p className="contact-intro">
                Have any questions? Feel free to contact us.
            </p>

            <div className="contact-container">

                <div className="contact-card">
                    <h2>Email</h2>
                    <p>studentportal@gmail.com</p>
                </div>

                <div className="contact-card">
                    <h2>Phone</h2>
                    <p>9876543210</p>
                </div>

                <div className="contact-card">
                    <h2>Location</h2>
                    <p>Pune, Maharashtra</p>
                </div>

            </div>

        </div>
    );
}

export default Contact;