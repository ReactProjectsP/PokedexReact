import {useEffect, useState} from "react"
import {axiosInstance} from "../../infra/axiosInstance"

export function useFetch(path: string) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    axiosInstance.get(path).then((response) => {
      setData(response.data)
    })
  }, [path])

  return {data}
}
