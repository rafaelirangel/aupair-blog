import './Contact.css'
import { Twitter, Github } from '@icon-park/react';
import { LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import contactImg from '../img/contact-us.jpg'


const Contact = () => {
    return (
        <div className='contactWrapper'>
            <img className='contactImg' src={contactImg} />

            <div className='contactContentWrapper'>
                <h1 className='contacTitle'>Need help with anything? Don't worry, contact US</h1>

                <div className='contactContent'>

                    {/* Card 1 */}
                    <div className='rafaInfo'>
                        <h2 className='name'> Rafaeli Rangel </h2>
                        <div className='github'>
                            <Github size='36' fill='black' />
                            <Link className='githubLink' to='https://github.com/rafaelirangel' target='_blank'>Github</Link>
                        </div>
                        <div className='linkdin'>
                            <LinkedIn style={{ fontSize: '2rem', color: '#307fdb' }} />
                            <Link className='linkedinLink' to='https://linkedin.com/in/rafaelirangeldeoliveira' target='_blank'>LinkedIn</Link>
                        </div>
                        <div className='twitter'>
                            <Twitter theme='filled' size='36' fill='#529bec' />
                            <Link className='twitterLink' to='https://twitter.com/rafaelirangel06' target='_blank'> Twitter </Link>
                        </div>
                    </div>

                    {/* Card 1 */}
                    <div className='nateInfo'>
                        <h2 className='name'> Nathen Leonard </h2>
                        <div className='github'>
                            <Github size='36' fill='black' />
                            <Link className='githubLink' to='https://github.com/nateleo91' target='_blank'>Github</Link>
                        </div>
                        <div className='linkdin'>
                            <LinkedIn style={{ fontSize: '2rem', color: '#307fdb' }} />
                            <Link className='linkedinLink' to='https://www.linkedin.com/in/nathen-leonard' target='_blank'>LinkedIn</Link>
                        </div>
                        <div className='twitter'>
                            <Twitter theme='filled' size='36' fill='#529bec' />
                            <Link className='twitterLink' to='https://twitter.com/Nathen_Leonard' target='_blank'> Twitter </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact