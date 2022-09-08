import { useState } from 'react'

function useFetchData() {
  const [url, setUrl] = useState('')

  const fetchData = async () => {
    try{
      const response = await fetch(url);
      if(response.ok){
        const jsonResp = await response.json();
        // console.log(jsonResp);
        return jsonResp
      }
    }
    catch(error){
      return error;
    }    
  }

  return [url, setUrl, fetchData]
}

export default useFetchData