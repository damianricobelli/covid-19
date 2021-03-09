import useSWR from "swr"
import axios from "axios"

function getStatus({ data, error }) {
  if (error && !data) return "error"
  if (!data) return "loading"
  return "success"
}

export const CONFIG = {
  headers: {
    "x-rapidapi-key": process.env.key,
    "x-rapidapi-host": process.env.host,
    useQueryString: true
  }
}

export const fetcher = async (path: string): Promise<any> => {
  const url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${path}`
  return axios.get(url, CONFIG).then((res) => res.data)
}

export const useCovidData = ({ path }) => {
  const { data, error } = useSWR(path, fetcher)
  const status = getStatus({ data, error })
  const isLoading = status === "loading"
  const isError = status === "error"
  const isSuccess = status === "success"
  return { isLoading, isError, isSuccess, data, error }
}
