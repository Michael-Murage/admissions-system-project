import { useState } from 'react'

function useFetchData() {
  const [url, setUrl] = useState('')
  function fetchData(url) {
    return async () => {
      try{
        const response = await fetch(url);
        if(response.ok){
          const jsonResp = await response.json()
          return jsonResp
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }
  return [url, setUrl, fetchData]
}

export default useFetchData