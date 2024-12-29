import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Title } from '../../components/common/Title/Title';
import './Contact.scss';

export const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_rlkkoqx',
                'template_refdwgp',
                {
                    to_name: 'Lembawe9',
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                '_Ho29uaogESbEZPRW'
            )
            .then(
                (result) => {
                    alert('Email sent successfully!');
                    setLoading(false);
                    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
                },
                (error) => {
                    console.error('Error:', error);
                    alert('Failed to send email.');
                    setLoading(false);
                }
            );
    };
    return(
        <section className='contact' id='contact'>
            <Title Title='CONTACT' SpanTitle='ME' Description='Get in touch'/>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
                <div className='form-container d-flex justify-content-center align-items-center gap-2'>
                    <div className="form-inputs d-flex flex-column gap-2">
                        <div title='Full Name' className="input-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>
                            <input 
                                type="text"
                                name="fullName"
                                placeholder="Full Name*" 
                                required 
                                value={formData.fullName} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div title='Email' className="input-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email*" 
                                required 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div title='Phone' className="input-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                            <input 
                                type="phone" 
                                name="phone" 
                                placeholder="Phone*" 
                                required 
                                value={formData.phone} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className='form-inputs d-flex flex-column gap-2'>
                        <input 
                            type="text" 
                            name="subject" 
                            id="email-subject__input" 
                            className="email-subject__input" 
                            placeholder="Email Subject*" 
                            required value={formData.subject} 
                            onChange={handleChange} 
                        />
                        <textarea 
                            name="message" 
                            cols="30" 
                            rows="10" 
                            placeholder="Your Message" 
                            value={formData.message} 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='form-submit d-flex justify-content-center align-items-center'>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </section>
    );
};