import { useAddVideoGamesData, useDeleteVideoGame, useVideoGamesData } from "../hooks/useVideoGamesData"
import { useState } from "react"
import { Link } from "react-router-dom";


const onSuccess = (data) => {
  console.log('onSuccess', data)
}

const onError = (data) => {
  alert('error')
  console.log('onError', data)
}



export const VideoGamesPage  = () => {

  const [newVideoGame, setNewVideoGame] = useState({
    name: "",
    tag: "",
    note: "",
    comment: "",
    image: ""
  })
  const handleChangeNewVideoGame = (inputName, value) => {
    const videoGame = {
      ...newVideoGame,
      [inputName]: value
    }
    setNewVideoGame(videoGame)
  }

  const handleAddVideoGame = () => {
    addVideoGame(newVideoGame)
    setNewVideoGame({
      name: "",
      tag: "",
      note: "",
      comment: "",
      image: ""
    })
  }

  const handleDeleteVideoGame = (videoGameId) => {

    deleteVideoGame(videoGameId)
  }


  const { isLoading, data: videoGames, isError, error, refetch } = useVideoGamesData(onSuccess, onError)
  const { mutate: addVideoGame } = useAddVideoGamesData();
  const { mutate: deleteVideoGame } = useDeleteVideoGame();

  if (isLoading) {
    return <div className="mainWrapper"><h3>loading...</h3></div>
  }

  if (isError) {
    return <div className="mainWrapper"><h3>{error}</h3></div>
  }

  return (
    <div className="mainWrapper">
      <h3>Video Games List</h3>
      <button 
        onClick={() => refetch()}
        className='refetchButton'
      >
        Fetch Games
      </button>
      <div
        className="addVideoGameWrapper"
      >
        <div className="element">
          <div className="label">
            Name
          </div>
          <input
            className="input"
            type="text"
            value={newVideoGame.name}
            placeholder="Name"
            onChange={(e) => handleChangeNewVideoGame('name', e.target.value)}
          />
        </div>
        <div
          className="element"
        >
          <div className="label">
            Platform
          </div>
          <select 
            className="input select"

            value={newVideoGame.tag} 
            onChange={(e) => handleChangeNewVideoGame('tag', e.target.value)}
            >
            <option value=""></option>
            <option value="pc">PC</option>
            <option value="sony">Sony</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo</option>
            <option value="amiga">Amiga</option>
          </select>
        </div>
        <div className="element">
          <div className="label">
            Note
          </div>
          <input
            className="input number"
            type="text"
            value={newVideoGame.note}
            placeholder="0"
            onChange={(e) => handleChangeNewVideoGame('note', e.target.value)}
          />
        </div>
        <div
          className="element"
        >
          <div
            className="label"
          >
            Comment
          </div>
          <input
          className="input"
          type="text"
          value={newVideoGame.comment}
          placeholder="Commentaire"
          onChange={(e) => handleChangeNewVideoGame('comment', e.target.value)}
        />

        </div>
        <div
          className="element"
        >
          <div
            className="label"
          >
            Image Link
          </div>
          <input
            className="input link"
            type="text"
            value={newVideoGame.image}
            placeholder="image link"
            onChange={(e) => handleChangeNewVideoGame('image', e.target.value)}
          />
        </div>
        <div
          className="buttonWrapper"
        >
          <button
            onClick={handleAddVideoGame}
            className='addButton'
          >
            Add Game
          </button>

        </div>

      </div>

      <div
        className="gameList"
      >
        {
          videoGames.map(game => {
            return (
              <div 
                className="gameWrapper"
                key={game.id}
              >
                <Link to={`/videoGames/${game.id}`}>
                  <div 
                    className="game"
                  >
                    {game.name}
                  </div>
                </Link>
                {/* <div
                  className="tagContainer"
                > */}
                  <div
                    className={`tag ${game.tag}`}
                  >
                    {game.tag}
                  </div>

                {/* </div> */}
                <div 
                  className="gameDelete"
                  onClick={() => handleDeleteVideoGame(game.id)}
                >
                  <svg
                    fill="#424958" 
                    width='24px' 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"/>
                  </svg>
                </div>
              </div>
            )
          })
        }
      
      </div>
      
    </div>
  )
}