import Avatar from '../userAvatar/index.jsx'

const avatar = '/Damian.png'

function card (){
    return(
        <div className='headerCard'>
            <Avatar photo = {avatar}/>
            <p></p>
        </div>
    )
}

export default card