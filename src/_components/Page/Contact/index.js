import {TextInput, TextArea} from '@/_components/CustomInput';
import SectionWrapper from '@/_components/SectionWrapper';
import Title from '@/_components/Title';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {AppEmitter} from '@/_controllers/EventEmitter';
import {toast} from 'react-toastify';

const Contact = () => {
   const form = useRef();
   const success = () => toast.success('Email successfully sent!');
   const error = () => toast.error('Email not sent!');

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
               error();
            },
         );
   };

   return (
      <SectionWrapper sectionId="contact" className="contact__section py-lg-5 py-4">
         <div className="w-100">
            <Title tClassName="text-center" label="get in touch" title="contact" />

            <div className="row mt-lg-5 mt-4">
               <div className="col-md-7 mx-auto">
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
                     <button type="submit" className="submit">
                        send message
                     </button>
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
      </SectionWrapper>
   );
};

export default Contact;
