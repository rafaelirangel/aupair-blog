import './NotFound.css'
import { Link } from "react-router-dom";
import notFoundImg from '../img/error 404.gif'

const NotFound = () => {
    return (
        <div className="notFoundWrapper">
            <div className='notFoundContent'>
                <img className='notFoundImg' src={notFoundImg}></img>
                <div className='content404'>
                    <p className='message'>
                        Oops! <br />
                        Looks like you got lost in your adventure
                    </p>
                </div>
                <Link className='notFoundLink' to='/'>
                    <button className="notFoundBtn">
                        Go back to the main page
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound




