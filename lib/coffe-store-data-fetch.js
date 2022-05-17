import fetch from 'node-fetch';
global.fetch = fetch;
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_KEY,
  fetch: nodeFetch,
});

const getUrl=(query, ll, radius, limit)=>{
  
   return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${ll}&radius=${radius}&limit=${limit}`

}
const getimageurl=async()=>{
    const photos =await unsplash.search.getPhotos({
        query: 'coffee shop',
        perPage: 10,
    
      });
    const eachphoto=photos.response.results
    return eachphoto.map(result=>result.urls["small"])
}
export const fetchCoffeeStores = async()=>
{
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: process.env.FOURSQUARE_KEY
        }
      };
      const response= await fetch(getUrl("coffee", "27.715464343263587,85.31141271155167",1000,6),options)
      const data= await response.json(); 
      const photo= await getimageurl()

      return data.results.map((result, index) =>{
          return{
              ...result,
              imgUrl:photo[index]

          }

      })
}