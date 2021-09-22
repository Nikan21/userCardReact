import './avatar.css';

function avatar (props){
    return (
        <img src={props.photo} className='avatarCard' alt='avatar'/>
    );
};

export default avatar;