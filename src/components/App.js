// create your App component here
import { useState, useEffect } from "react"

function App() {
    const [imgData, setImgData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=>{
            setImgData(data.message);
            setIsLoaded(true)
        });
    },[]);

    if(!isLoaded) return <p>Loading...</p>;
    
    return(
        <div>
            <img src={imgData} alt="A Random Dog"/>
        </div>
    )
}

export default App