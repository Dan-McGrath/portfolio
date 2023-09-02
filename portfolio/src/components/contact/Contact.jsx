const ContactForm = () => {
  return (
    <>
      <section className="section contact" id="contact">
        <h2 className="title">Contact Me</h2>
        <form action="" method="post" netlify className="form">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="email@hello.com"
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              name="Message"
              id="message"
              rows="1"
              placeholder="Any thoughts?"
            ></textarea>
          </label>
          <input type="submit" value="Message me!" />
        </form>
      </section>
    </>
  );
};

export default ContactForm;
