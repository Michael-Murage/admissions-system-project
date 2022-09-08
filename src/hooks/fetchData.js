import { useEffect, useState } from 'react'

function useFetchData(url) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()


  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch(url);
      if(response.ok){
        const jsonResp = await response.json();
        setData(jsonResp)
      }else{
        setError(new Error("Sorry, response has failed"))
      }
    }
    catch(error){
      setError(error);
    }
    finally{
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    fetchData()
  }, [url])

  return [data, error, loading]
}

export default useFetchData