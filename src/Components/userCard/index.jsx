import Avatar from '../userAvatar/index.jsx'
import './card.css'

const avatar = '/Damian.png';

function card (props){
    const {name, surname, description} = props.data;

    return(
        <div className='headerCard'>
            <Avatar photo = {avatar}/>
            <div className='userName'>{name} {surname}</div>
        </div>
    )
}

export default card