import {Layout, TextArea, TextInput, Title} from '@/_components';
import {AppEmitter} from '@/_controllers/EventEmitter';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';
import React, {useRef} from 'react';

const Contact = () => {
   const form = useRef();
   const success = () => toast.success('Email successfully sent!');
   const errorMessage = () => toast.error('Email not sent!');

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`form?.current=====>`, form?.current);

      emailjs
         .sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form?.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
         })
         .then(
            (data) => {
               console.log('SUCCESS!');
               AppEmitter.emit('email_success', data);
               success();
            },
            (error) => {
               console.log('FAILED...', error.text);
               errorMessage();
            },
         );
   };

   return (
      <Layout title="Contact" className="contact__section py-lg-5 py-4">
         <div className="w-100">
            <Title tClassName="text-center" label="get in touch" title="contact" />

            <div className="row mt-lg-5 mt-4">
               <div className="col-lg-7 mx-auto">
                  <form ref={form} onSubmit={handleSubmit} className="w-100">
                     <TextInput
                        name="user_name"
                        type="text"
                        label="Name"
                        className="mb-4 border-0 w-100 position-relative"
                        // value=""
                        // valError={titleError}
                        required
                     />
                     <TextInput
                        name="user_email"
                        type="email"
                        label="Email Address"
                        className="mb-4 border-0 w-100 position-relative"
                        // value=""
                        // valError={titleError}
                        required
                     />
                     <TextArea
                        type="text"
                        className="my-4 border-0 w-100"
                        // value=""
                        name="message"
                        label="Message"
                        textarea
                        rows={5}
                        required
                     />
                     <div className="d-flex justify-content-center">
                        <button type="submit" className="submit">
                           send message
                        </button>
                     </div>
                  </form>
               </div>
               {/* <div className="col-md-5">
                  <h5 className="">Reach out</h5>
                  <ul className="">
                     <li className=""></li>
                  </ul>
               </div> */}
            </div>
         </div>
      </Layout>
   );
};

export default Contact;
