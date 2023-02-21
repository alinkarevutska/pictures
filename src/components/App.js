import {useState} from 'react';
import React from 'react';
import searchImages from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;