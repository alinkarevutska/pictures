import axios from 'axios';

const searchImages = async (term) => {
    const responce = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HfbCn7EqfViBuOSFcg3X7Ly2t-5yu7zK-hZcWmp25o0'
        },
        params: {
            query: term,
        }
    });
    return responce.data.results;
};

export default searchImages;