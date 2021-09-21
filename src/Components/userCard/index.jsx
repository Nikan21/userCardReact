import Avatar from '../userAvatar/index.jsx'

const avatar = {
    photo: '/Damian.png'
}

function card (){
    return(
        <div className='headerCard'>
            <Avatar photo = {avatar.photo}/>
            <p></p>
        </div>
    )
}

export default card