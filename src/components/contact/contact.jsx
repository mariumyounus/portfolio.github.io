import "./contact.css"
import Phone from "../../img/phone.jpg"
import Email from "../../img/email.jpg"
import Address from "../../img/address.png"
import  {useRef, useState} from "react"
import emailjs from '@emailjs/browser';

  const Contact = () => {
    const form = useRef  ();
    const [done,setDone]=useState(false)
    const handleSubmit=(e)=>{
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
    <div className="c">
     <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title">Let's disscus your project</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img 
                    src={Phone}
                    alt=""
                    className="c-icon"></img>
                  07960688311
                </div>
                <div className="c-info-item">
                    <img 
                    src={Email}
                    alt=""
                    className="c-icon"></img>
                   mariumyounus@yahoo.com
                </div>
                <div className="c-info-item">
                    <img 
                    src={Address}
                    alt=""
                    className="c-icon"></img>
                   xyz street, House No 31,
                   WSDFGH
                </div>

            
</div>
</div>

                <div className="c-right">
                   <p className="c-desc">
                    <strong>Pitch Us</strong> 
                    <br/>
                    We are here to help and answer any question you might have.We look forward to hearing from you.
                   </p> 
                   <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="to_name"></input>
                    <input type="text" placeholder="Subject" name="user_subject"></input>
                    <input type="Email " placeholder="Email" name="from_name"></input>
                   <textarea rows="5"  placeholder="message" name="message"/>
                  <button>Submit</button>
                  {done &&"Thank You!!"}
                   </form>
                
            </div>
        </div>
     </div>
 
     
   
  )
}

export default Contact;
