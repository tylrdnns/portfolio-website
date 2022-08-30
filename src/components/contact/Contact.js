// import ContactForm from "./ContactForm";
import Footer from "../footer/Footer";

const Contact = () => {
  document.title = "Contact | Tyler Dennis";
  function sendEmai() {
    window.open(
      "mailto:tylrdnns@gmail.com?subject=Hello&body=Greetings"
    );
  }
  return (
    <article className="contact-main">
      <section>
        <h2 className="title-font pink-text h2-tag">Contact Me</h2>
        <br></br>
        <p className="white-text p-tag">
          If you are interested to hire me I am always open to new opportunities
          and interesting projects! Feel free to contact me if you have any
          other requests or questions regarding web development.
        </p>
        <section>
          <button className="sendemail-btn" onClick={sendEmai}>
            Send Email
          </button>
        </section>
      </section>
      <Footer />
    </article>
  );
};

export default Contact;
