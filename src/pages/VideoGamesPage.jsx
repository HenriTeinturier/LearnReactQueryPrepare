import { useAddVideoGamesData, useDeleteVideoGame, useEditVideoGame, useVideoGamesData } from "../hooks/useVideoGamesData"
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
  const [editVideoGame, setEditVideoGame] = useState({
    id: "",
    name: "",
    tag: "",
    note: "",
    comment: "",
    image: ""
  })
  const [isEditGame, setIsEditGame] = useState(false)
  
  
  const handleChangeNewVideoGame = (inputName, value) => {
    const videoGame = {
      ...newVideoGame,
      [inputName]: value
    }
    setNewVideoGame(videoGame)
  }

  const handleChangeEditVideoGame = (inputName, value) => {
    const videoGame = {
      ...editVideoGame,
      [inputName]: value
    }
    setEditVideoGame(videoGame)
  }

  const handleEditVideoGame = () => {
    patchVideoGame(editVideoGame)
    resetEditVideoGame();
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

  const resetEditVideoGame = () => {
    setIsEditGame({
      id: "",
      name: "",
      tag: "",
      note: "",
      comment: "",
      image: ""
    })
    setIsEditGame(false)
  }

  const handleDeleteVideoGame = (videoGameId) => {

    deleteVideoGame(videoGameId)
  }

  const handleActiveEditVideoGame = (videoGameId) => {
    setIsEditGame(true);
    setEditVideoGame(videoGames.find((game ) => game.id === videoGameId))

  }


  const { isLoading, data: videoGames, isError, error, refetch } = useVideoGamesData(onSuccess, onError)
  const { mutate: addVideoGame } = useAddVideoGamesData();
  const { mutate: deleteVideoGame } = useDeleteVideoGame();
  const { mutate: patchVideoGame } = useEditVideoGame();


  if (isLoading) {
    return <div className="mainWrapper"><h3>loading...</h3></div>
  }

  if (isError) {
    return <div className="mainWrapper"><h3>{error}</h3></div>
  }

  return (
    <div className="mainWrapper">
      <h3>Video Games List</h3>
      {/* Fetch Games */}
      <button 
        onClick={() => refetch()}
        className='refetchButton'
      >
        Update
      </button>
      {/* Add game */}
      {
        !isEditGame && (
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
        )
      }
      {/* Edit Game */}
      {
        isEditGame && (
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
                value={editVideoGame.name}
                placeholder="Name"
                onChange={(e) => handleChangeEditVideoGame('name', e.target.value)}
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

                value={editVideoGame.tag} 
                onChange={(e) => handleChangeEditVideoGame('tag', e.target.value)}
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
                value={editVideoGame.note}
                placeholder="0"
                onChange={(e) => handleChangeEditVideoGame('note', e.target.value)}
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
              value={editVideoGame.comment}
              placeholder="Commentaire"
              onChange={(e) => handleChangeEditVideoGame('comment', e.target.value)}
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
                value={editVideoGame.image}
                placeholder="image link"
                onChange={(e) => handleChangeEditVideoGame('image', e.target.value)}
              />
            </div>
            <div
              className="buttonWrapper"
            >
              <button
                onClick={handleEditVideoGame}
                className='addButton'
              >
                Edit Game
              </button>

            </div>
            <div
              className="buttonWrapper"
            >
              <button
                onClick={resetEditVideoGame}
                className='cancelButton'
              >
                Cancel
              </button>

            </div>

          </div>
        )
      }
      {/* GameList */}
      <div
        className="gameList"
      >
        {
          videoGames.map(game => {
            return (
              <>
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
                  className="gameIcon"
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
                <div
                  className="gameIcon"
                  onClick={() => handleActiveEditVideoGame(game.id)}
                >
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#424958" stroke="#424958">

                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                  <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#424958" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> <polygon fill="#424958" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#424958" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> </g> </g> </g> </g>

                  </svg>
                </div>
                </div>
                
              </>
            )
          })
        }
      
      </div>
      
    </div>
  )
}