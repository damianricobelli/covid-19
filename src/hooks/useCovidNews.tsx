import { useSWRInfinite } from "swr"
import axios from "axios"

function getStatus({ data, error }) {
  if (error && !data) return "error"
  if (!data) return "loading"
  return "success"
}

const KEY = "e1c9808665msh5db11d0cf859419p1ad5cdjsn49a380b966c1"
const HOST = "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
export const CONFIG = {
  headers: {
    "x-rapidapi-key": KEY,
    "x-rapidapi-host": HOST,
    useQueryString: true
  }
}

export const fetcher = async (url: string): Promise<any> => {
  return axios.get(url, CONFIG).then((res) => res.data)
}

export const useCovidNews = ({ path }) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/${path}/${
        index + 1
      }`,
    fetcher
  )

  const issues = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty
  const isRefreshing = isValidating && data && data.length === size

  const status = getStatus({ data, error })
  const isLoading = status === "loading"
  const isError = status === "error"
  const isSuccess = status === "success"
  return {
    isLoading,
    isError,
    isSuccess,
    data,
    error,
    issues,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
    size,
    setSize
  }
}

// import useSWR from "swr"
// import axios from "axios"

// function getStatus({ data, error }) {
//   if (error && !data) return "error"
//   if (!data) return "loading"
//   return "success"
// }

// const KEY = "e1c9808665msh5db11d0cf859419p1ad5cdjsn49a380b966c1"
// const HOST = "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
// export const CONFIG = {
//   headers: {
//     "x-rapidapi-key": KEY,
//     "x-rapidapi-host": HOST,
//     useQueryString: true
//   }
// }

// export const fetcher = async (path: string): Promise<any> => {
//   const url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/${path}/1`
//   return axios.get(url, CONFIG).then((res) => res.data)
// }

// export const useCovidNews = ({ path }) => {
//   const { data, error } = useSWR(path, fetcher)
//   const status = getStatus({ data, error })
//   const isLoading = status === "loading"
//   const isError = status === "error"
//   const isSuccess = status === "success"
//   return { isLoading, isError, isSuccess, data, error }
// }
