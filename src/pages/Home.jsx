import axios from "axios"
import { useEffect, useState } from "react"

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchVideoGames = async () => {
    return axios.get('http://localhost:3900/videoGames')
    .then((response) => {
      setData(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchVideoGames();
  }, []);

  if (isLoading) {
    return <div className="mainWrapper"><h3>loading...</h3></div>
  }

  if (error) {
    return <div className="mainWrapper"><h3>{error}</h3></div>
  }

  return (
    <div className="mainWrapper">
      <h3>Sans <span>React Query</span></h3>
      <div
        className="gameList"
      >
        {
          data.map(game => {
            return (
              <div 
                className="gameWrapper"
                key={game.id}
              >
                <div
                  className="game" 
                >
                  {game.name}
                </div>
                <div
                    className={`tag ${game.tag}`}
                  >
                    {game.tag}
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

