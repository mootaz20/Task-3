import './VideoView.css'
import { FaPlay } from "react-icons/fa";
const VideoView = () => {
  return (
    <>
      <div className='videoComp'>
        <div className='background'>
        </div>
        <div className='text'>
            <div className='heading'>
                <p><span>| </span>  Video View</p>
                <div className='h1'>
                    <h1>Get Closer View  & Different Feeling</h1>
                </div>
            </div>
            <div className='video'>
                <div className='videoBack'>
                    <a href='' className='play'>
                        <FaPlay />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default VideoView
