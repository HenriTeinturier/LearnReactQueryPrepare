import { useQuery } from 'react-query';
import axios from 'axios';

const fetchVideoGame = (videoGameId) => {
  return axios.get(`http://localhost:3900/videoGames/${videoGameId}`)
  .then((response) => response.data)
  .catch((error) => {
    throw error
  });
}

export const useVideoGameData = (videoGameId) => {
  return useQuery(
    ['super-hero', videoGameId],
    () => fetchVideoGame(videoGameId),
  )
}