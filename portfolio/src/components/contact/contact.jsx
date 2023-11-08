import { useRef,useState }from 'react'
import emailjs from '@emailjs/browser';
import "./contact.scss"

const Contact = () => {
 
  const form=useRef();
 
  const [done,setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ymb1138', 'template_zu5znk6', form.current, '0-6wI-QFH0HTqPxNs')
      .then((result) => {
        console.log(result.text);
         setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='contact'>
    
        <div className='textContainer'>
<h1>Let's work together</h1>
<div className='item'>
<h2>Mail</h2>
<span>marium.younus@outlook.com</span></div>
<div className='item'>
<h2>Address</h2>
<span>WD187HL</span>
</div>
<div className='item'>
<h2>Phone</h2>
<span>07960688311</span>
</div>

       
        </div>
        <div className='formContainer'>
        <form 
            ref={form}
            onSubmit={sendEmail}
           >
                <input type='text' required placeholder='Name' name="to_name"></input>
                <input type='Email' required placeholder='Email' name="from_name"></input>
                <textarea rows={8} placeholder='Message' name="message"></textarea>
                <button >Submit</button>
                {done && "Success"}
            
        </form>
        </div>
    
    </div>
  )
}

export default Contact
