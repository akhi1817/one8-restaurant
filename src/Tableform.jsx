import React, { useState } from 'react';
import Axios from 'axios';

const Tableform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState('');
    const [message, setMessage] = useState('');


    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [peopleError, setPeopleError] = useState('');
    const [messageError, setMessageError] = useState('');


    const saveForm = async (e) => {
       
        if (formValidaion()){

        
        const data = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            people: people,
            message: message,
        };

        // console.log('Submitted Data:', data);

        try {
            const response = await Axios.post('https://one8-restaurent-app.vercel.app/booking-table', data);
            console.log('Response:', response.data);
            alert("Table booked successfully!");
            setName('');
            setEmail('');
            setPhone('');
            setDate('');
            setTime('');
            setPeople('');
            setMessage('');
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
        }
    e.preventDefault();
    };

        const formValidaion=()=>{
            let error=true;
            // name
            if(name===""){
                setNameError("please write your name");
                error=false;
            }
            else{
                setNameError('');
            }
            // email
            if(email===""){
                setEmailError("please write your gmail properly");
                error=false;
            }
            else{
                setEmailError('');
            }
            // phone
            if(phone===""){
                setPhoneError("please write your phone number properly");
                error=false;
            }
            else{
                setPhoneError('');
            }
            // date
            if(date===""){
                setDateError("please write date properly");
                error=false;
            }
            else{
                setDateError('');
            }
            // time
            if(phone===""){
                setTimeError("please write your time of booking properly");
                error=false;
            }
            else{
                setTimeError('');
            }
            // number of people
            if(phone===""){
                setPeopleError("please write proper number of people for booking");
                error=false;
            }
            else{
                setPeopleError('');
            }
            if(phone===""){
                setMessageError("write any message if you want to convey otherwise write 'No message'");
                error=false;
            }
            else{
                setMessageError('');
            }
            return error;
        }

    return (
    <>
           
        <div className='container-fluid p-5 mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <h4 data-aos="fade-up" className='text-secondary text-center'>Book A Table</h4>
                    <h1 data-aos="fade-up" className='text-dark text-center'>Book Your <span className='text-success'>Stay With Us</span></h1>
                    <hr />
                    <div className='row mt-5'>
                        <div data-aos="flip-up" className='col-md-6 d-flex justify-content-center align-items-center'>
                            <img src='images/reservation.jpg' className='img-fluid' style={{ width: '50%', height: '100%' }} alt='reservation'/>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <div data-aos="fade-left" className='p-4 form-control text-center bg-light'>
                                <form onSubmit={saveForm}>
                                    <div className='d-flex flex-wrap mb-3'>
                                        <div className='col-md-12 col-lg-4 px-3 mt-3'>
                                            <input type='text' className='form-control' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                                                {
                                                nameError && <p className='text-danger fw-bold'>{nameError}</p>
                                                }
                                        </div>
                                        <div className='col-md-12 col-lg-4 px-3  mt-3'>
                                            <input type='email' className='form-control' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                {
                                                emailError && <p className='text-danger fw-bold'>{emailError}</p>
                                                }
                                        </div>
                                        <div className='col-md-12 col-lg-4 px-3  mt-3'>
                                            <input type='number' className='form-control' placeholder='Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                {
                                                phoneError && <p className='text-danger fw-bold'>{phoneError}</p>
                                                }
                                        </div>
                                    </div>
                                    <div className='d-flex flex-wrap mb-3'>
                                        <div className='col-md-12 col-lg-4 px-3  mt-3'>
                                            <input type='date' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} />
                                                {
                                                dateError && <p className='text-danger fw-bold'>{dateError}</p>
                                                }
                                        </div>
                                        <div className='col-md-12 col-lg-4 px-3  mt-3'>
                                            <input type='time' className='form-control' value={time} onChange={(e) => setTime(e.target.value)} />
                                                {
                                                timeError && <p className='text-danger fw-bold'>{timeError}</p>
                                                }
                                        </div>
                                        <div className='col-md-12 col-lg-4 px-3  mt-3'>
                                            <input type='number' className='form-control' placeholder='Number of People' value={people} onChange={(e) => setPeople(e.target.value)} />
                                                {
                                                peopleError && <p className='text-danger fw-bold'>{peopleError}</p>
                                                }
                                        </div>
                                    </div>
                                    <div className='mb-3 px-3  mt-3'>
                                        <textarea rows='6' cols='20' className='form-control' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                            {
                                            messageError && <p className='text-danger fw-bold'>{messageError}</p>
                                            }
                                    </div>
                                        <button className='btn btn-success text-light px-4 my-3 rounded-pill'>Book a Table</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                                    
    </>
    );
};

export default Tableform;

