import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useVideoGameData } from "../hooks/useVideoGameData";

export const VideoGameDetail = () => {
  console.log('test')
  const { videoGameId } = useParams();

  const { data: videoGame, isLoading, error, isError } = useVideoGameData(videoGameId)

  if (isLoading) {
    return <div className="mainWrapper"><h3>loading...</h3></div>
  }

  if (isError) {
    return <div className="mainWrapper"><h3>{error}</h3></div>
  }

  return (
    <div className="mainWrapper">
      <h3>Video Game Detail</h3>
      <Link to='/videoGames' >
        <button 
          // onClick={() => refetch()}
          className='refetchButton'
        >
          Back Games
        </button>
      </Link>
      <div
        className="cardWrapper"
      >
        <img src={videoGame.image} alt="" />
        <div
          className="cardInformations"
        >
          <div className="cardTitle">
            {videoGame.name}
          </div>
          <div className={`tag ${videoGame.tag}`}>
            {videoGame.tag}
          </div>
          <div className={`comment`}>
            <div className="title">
              Mon avis:
            </div>
            <div style={{flexGrow: 0}}>
            {videoGame.comment}

            </div>
          </div>
          <div className={`noteWrapper`}>
          <div className="title">Ma note:</div>
          <div className="note">{videoGame.note}</div>
          </div>

        </div>

      </div>
      <div
        className='detailNavigationWrapper'
      >
        <Link to={`/videoGames/${parseInt(videoGameId, 10)-1}`} >
          <button 
            // onClick={() => refetch()}
            className='refetchButton'
          >
            Previous
          </button>
        </Link>
        <Link to={`/videoGames/${parseInt(videoGameId, 10)+1}`} >
          <button 
            // onClick={() => refetch()}
            className='refetchButton'
          >
            Next
          </button>
        </Link>

      </div>
    </div>
  )
}
