import { useState } from "react";

import { galleryData } from "./data";


export default function Gallery(){
    const [index, setIndex] = useState(0);
    

    function handleNext(){
        setIndex(index + 1);
        console.log(index);
    }

    let galleryItem = galleryData[index];

    return (
        <div>
            <button onClick={handleNext}>Next</button>

            <div>
                <h1>{galleryItem.name}</h1>
            </div>
        </div>
    )
}