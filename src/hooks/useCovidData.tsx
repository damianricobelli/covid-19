import React from "react"
import useSWR from "swr"
import axios from "axios"

function getStatus({ data, error }) {
  if (error && !data) return "error"
  if (!data) return "loading"
  return "success"
}

export const CONFIG = {
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_KEY,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_HOST,
    useQueryString: true
  }
}

export const fetcher = async (path: string): Promise<any> => {
  const url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${path}`
  return axios.get(url, CONFIG).then((res) => res.data)
}

export const useCovidData = ({ path }) => {
  const [isLoadingSlow, setIsLoadingSlow] = React.useState(false)

  const { data, error } = useSWR(path, fetcher, {
    loadingTimeout: 3000,
    onLoadingSlow(key, config) {
      setIsLoadingSlow(true)
    }
  })

  React.useEffect(() => {
    if (data && isLoadingSlow) {
      const timer = setTimeout(setIsLoadingSlow, 3000, false)
      return () => clearTimeout(timer)
    }
  }, [data, isLoadingSlow])

  const status = getStatus({ data, error })
  const isLoading = status === "loading"
  const isError = status === "error"
  const isSuccess = status === "success"
  return { isLoading, isError, isLoadingSlow, isSuccess, data, error }
}
