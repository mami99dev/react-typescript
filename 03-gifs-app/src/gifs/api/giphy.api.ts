import axios from 'axios'

export const giphyApi = axios.create({
  baseURL: import.meta.env.VITE_GIPHY_API_URL,
  params: {
    lang: import.meta.env.VITE_GIPHY_API_LANG,
    api_key: import.meta.env.VITE_GIPHY_API_KEY
  }
})