import './index.scss'
import { useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
const Mail = ()=>{
    const [letterClass, setLetterClass]=useState('text-animate');
    const refForm = useRef()
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs
        .sendForm(
            'service_on79lfo',
            'template_7gnqdc3',
            refForm.current,
            'pOGU2I3xFAVTSX6dU'
        )
        .then(
            ()=>{
                alert('Successfully')
                window.location.reload('false')
            },
            ()=>{
                alert('Failed')
            }
        )
    }
    return(
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}/>
                    </h1>
                    {/* <p>
                    This Contact Us page does two things well: it asks for only the 
                    information that is necessary (email address) and it displays a video 
                    that explains exactly how contacting the IMPACT team works. This is a
                    helpful experience for the user especially if they are expecting a quick 
                    response.
                    </p> */}
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Sublect' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}
export default Mail