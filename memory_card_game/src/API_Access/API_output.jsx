import { useState, useEffect } from "react";

function GiphyOutput(){ 
    const [gifs, setGifs] = useState([]);

    useEffect(() => { 
        fetchGifs();
    }, []);

    const fetchGifs = async () => {

        for (let i = 0; i < 12; i++) {
        // const apiKey = 'YOUR_GIPHY_API_KEY';
        const url = 'https://api.giphy.com/v1/gifs/random?api_key=q9lIygOHTJkbcpgEKKhSkzAE83WBLq0G&tag=&rating=r&limit=12';
    
        try {
            const fetchedGifs = [];
            for (let i = 0; i < 12; i++) {
              const response = await fetch(url);
              const data = await response.json();
              fetchedGifs.push(data.data);
            }
            setGifs(fetchedGifs);
          } catch (error) {
            console.error('Error fetching GIFs:', error);
          }
      };
    }
      return gifs
    }
    
    export default GiphyOutput;
