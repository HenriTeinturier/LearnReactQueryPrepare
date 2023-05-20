import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"


const fetchVideoGames = async () => {
  return axios.get('http://localhost:3900/videoGames')
  .then((response) => response.data)
  .catch((error) =>{ throw error})
}

const addVideoGame = async (videoGame) => {
  return axios.post(`http://localhost:3900/videoGames`, videoGame);
};

const deleteSuperHero = async (videoGameId) => {
  return axios.delete(`http://localhost:3900/videoGames/${videoGameId}`);
}


export const useVideoGamesData = (onSuccess, onError) => {
  return useQuery(
    'video-games',
    fetchVideoGames,
    {
      onSuccess: onSuccess,
      onError
    }
  )
}

export const useAddVideoGamesData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    addVideoGame,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('video-games')
      }
    }
  )
}

export const useDeleteVideoGame = () => {
  const queryClient = useQueryClient();
  return useMutation(
    deleteSuperHero,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('video-games');
      }
    }
  );
}