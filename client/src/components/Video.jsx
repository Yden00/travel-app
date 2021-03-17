import './video.css'
import ReactPlayer from 'react-player'

const Video = ({url}) => {

return (
 <div className="video-player">
    <ReactPlayer width='45.4vw' height='47vh' controls url={url} />
 </div>
)
}

export default Video