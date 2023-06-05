import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
//__import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    //__emailjs.sendForm('service_5vuauza', 'template_fdnnl56', form.current, 'EmSdUNQzQuxkUqGWx')
    e.target.reset()
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Hit my line</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>duesenagbotarako@gmail.com</h5>
            <a
              href="mailto:duesenagbotarako@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Me A message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option__icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a
              href="https://linkedin.com/in/duesenberry55"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>Leave me a message</h5>
            <a
              href="https://wa.me/+237620636527"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="full name" required />
          <input
            type="email"
            name="email"
            placeholder="your email"
            required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send 
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
