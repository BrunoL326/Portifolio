import Perfil from './EU2.jpg'
import { BiUserCircle }  from '@react-icons/all-files/bi/BiUserCircle'
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import  { Link } from 'react-router-dom';
import './Starter.css'

function Starter() {
    return(
        <div className='Background'>
            <div className='perf-1'>
                <img src={Perfil} className='Eu-2'/>
            </div>
            <h1>
                Sejam Bem Vindos ao Meu Mundo
            </h1>
            <div className='Content-1'>
            <Link to='/Home'>
                <a className='Container-1'>
                <BiUserCircle/>
             </a>
             </Link>
                </div> 
             <div className='Content-2'>
                 <a href="https://www.linkedin.com/in/bruno-lima-871a98252/" 
                  className='Container-2'>
                 <AiFillLinkedin/>
             </a>
             </div>
             <div className='Content-3'>
                 <a href='https://www.instagram.com/b.l.o_buuh/' 
                 className='Container-3'>
                 <AiOutlineInstagram />
             </a>
             </div>
             <div className='Content-4'>
                 <a href='https://github.com/BrunoL326' 
                 className='Container-4'>
                 <AiFillGithub />
             </a>
             </div>
             
            </div>
    )
}

export default Starter