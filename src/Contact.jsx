import Axios from 'axios';
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameerror, setNameerror] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [subjecterror, setSubjecterror] = useState('');
    const [messageerror, setMessageerror] = useState('');


    

    const saveForm = async (e) => {
        
    if (formValidation()){

     
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };


   
        // console.log('Submitted Data:', data);

        try {
            const response = await Axios.post('https://one8-restaurent-app.vercel.app/contact', data);
            console.log('Response:', response.data);
            alert("Congratulations, submitted successfully!");
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    }
    e.preventDefault();
    };

    const formValidation=()=>{
        let error=true;
        // name
        if(name===""){
            setNameerror("please enter your name");
            error=false;
        }
        else{
            setNameerror('');
        }
        // email
        if(email===""){
            setEmailerror("please write your gmail properly");
            error=false;
        }
        else{
            setEmailerror('');
        }
        // subject
        if(subject===""){
            setSubjecterror("Please write your subject Otherwise write No subject");
            error=false;
        }
        else{
            setSubjecterror('');
        }
        // message
        if(message===""){
            setMessageerror("please write your message Otherwise write no message");
            error=false;
        }
        else{
            setMessageerror('');
        }
        return error;

    }


    return (
        <>
           
        <div className="container-fluid p-5 mt-5 bg-light">
            <div className="row">
                <h4 data-aos="fade-up" className="bg-light text-secondary text-center">Contact Us</h4>
                <h1 data-aos="fade-up" className="bg-light text-dark text-center">Need Help? <span className="text-success">Contact Us</span></h1>
                <hr />
                <div data-aos="zoom-in-right" className="col-md-12 mt-5 p-5 form-control text-center">
                    <form onSubmit={saveForm}>
                        <div className="row">
                            <div className="col-md-6 px-3 mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    {
                                    nameerror ? <p className="text-danger fw-bold">{nameerror}</p> : null
                                    }
                            </div>
                            <div className="col-md-6 px-3 mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {
                                    emailerror ? <p className="text-danger fw-bold">{emailerror}</p> : null
                                    }
                            </div>
                         </div>
                        <div className="row">
                            <div className="col-md-12 px-3 mb-3">
                                <input type="text" className="form-control" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                    {
                                    subjecterror ? <p className="text-danger fw-bold">{subjecterror}</p> : null
                                    }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 px-3 mb-3">
                                <textarea rows="5" className="form-control" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                {
                                messageerror ? <p className="text-danger fw-bold">{messageerror}</p> : null
                                }
                            </div>
                        </div>
                        <div className="col-md-12 mt-3 px-3 text-center">
                            <button className="btn btn-success   px-3 my-3 rounded-pill">Send Message</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-12 mt-5 d-flex flex-wrap px-3 justify-content-center">
                    <div className="col-md-5 mx-2">
                        <div  data-aos="flip-right" className="card shadow-lg rounded bg-danger text-white px-5 my-3">
                            <h3>Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div  data-aos="flip-right" className="card shadow-lg rounded bg-danger text-white px-5 my-3">
                            <h3>Call Us</h3>
                            <p>+91 8199819283</p>
                        </div>
                    </div>
                    <div  className="col-md-5 mx-2">
                        <div data-aos="flip-left" className="card shadow-lg rounded bg-danger text-white px-5 my-3">
                            <h3>Email Us</h3>
                            <p>resturent18@gmail.com</p>
                        </div>
                        <div data-aos="flip-left" className="card shadow-lg rounded bg-danger text-white px-5 my-3">
                            <h3>Opening Hours</h3>
                            <p><strong>Mon-Sat:</strong> 11AM -11PM;<strong> Sunday:</strong> Closed</p>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" className="col-md-12 text-center w-100 mt-5">
                    <iframe className="shadow-lg w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2611274981937!2d73.79657607417174!3d18.607321066520633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8fcecbc785f%3A0x8dfbc933fb1df678!2sGeetai%20Aangan!5e0!3m2!1sen!2sin!4v1724911087632!5m2!1sen!2sin" style={{ height: "450px", border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                </div>
            </div>
        </div>

        </>
    );
};

export default Contact;
