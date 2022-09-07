import { useEffect, useState } from 'react'

function useFetchData() {
  const [url, setUrl] = useState('')
  function fetchData(url) {
    async () => {
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

  useEffect(()=>{
    fetchData(url)
  },[])
  return [url, setUrl, fetchData]
}

export default useFetchData