import "./gifCardBoard.css";
import { useState,useEffect } from "react";
import "../API_Access/API_output";
import "../createCards/create_cards";
import CreateCards from "../createCards/create_cards";

function GifCardBoard() {

    const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGifs();
  }, []);

  const fetchGifs = async () => {
    // const apiKey = 'YOUR_GIPHY_API_KEY';
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=q9lIygOHTJkbcpgEKKhSkzAE83WBLq0G&tag=&rating=r&limit=12`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div>
      <CreateCards gifs={gifs} />
    </div>
  );
}

export default GifCardBoard