
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../css/Contact.css';
const Contact = ()=>{
    const navigate = useNavigate();
    const handleSend = (e)=>{
        e.preventDefault();
        alert('Thank you for contacting');
        navigate('/')
    }
    return(
        <div className='container'>
            <div className='d-flex p-5 text-white '>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}><p className='navigation-link'>VIDEO GAMES</p></Link>
                <Link to={'/contact'} style={{textDecoration:'none',color:'white'}}><p className='navigation-link' style={{marginLeft:'50px'}}>CONTACT</p></Link>
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div style={{width:'500px'}}>
                    <h4 style={{marginBottom:'20px',color:'#c1d1e8'}}>GET IN TOUCH</h4>
                    <p style={{marginBottom:'40px',color:'#c1d1e8'}}>Trysail transfrom furl sea legs scallywag jack ketch chadler mizzemast reef sails skysail. Shiver me timbers loot bucko belaying Pin Sea Legs boom gunwalls booty jury mast fare</p>
                    <div className="contact-form">
                        <form>
                            <h4 style={{marginBottom:'40px'}}>Contact Form</h4>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <label htmlFor="contact-name" className='label'>Name <span style={{color:'#5692e8'}}>*</span></label>
                                    <input type="text" id="contact-name" className='contact-input'/>
                                </div>
                                <div>
                                     <label htmlFor="contact-email" className='label'>Email <span style={{color:'#5692e8'}}>*</span></label>
                                    <input type="textarea" id="contact-email" className='contact-input'/>
                                </div>
                            </div>
                            
                            <label htmlFor="contact-message" className='label'>Message <span style={{color:'#5692e8'}}>*</span></label>
                            <textarea type="text" id="contact-message" className='contact-input'></textarea>
                            <div className='d-flex justify-content-end mt-2'>
                                <button className='clear-button' onClick={handleSend}>Send</button>
                            </div>                
                        </form>

                    </div>
            </div>
            
            
            
        </div>
            
        </div>
    )
}

export default Contact;