import { useState, useEffect, FC, useMemo } from "react"
import uuid from "react-uuid"
import axios from "axios"
import { SimpleGrid, CircularProgress, Center } from "@chakra-ui/react"
import SearchInput from "@components/ui/SearchInput"
import Card from "@components/ui/Card"

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [data, setData] = useState(null)
  const [dataWorld, setDataWorld] = useState(null)

  useEffect(() => {
    axios
      .get(
        "https://covid.ourworldindata.org/data/latest/owid-covid-latest.json"
      )
      .then((response) => {
        let resp = Object.values(response.data).sort(
          ({ total_vaccinations: a }, { total_vaccinations: b }) => b - a
        )
        setDataWorld(resp[0])
        resp = resp.slice(1)
        setData(resp)
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {}
  }, [])

  let showData = null

  showData = useMemo(() => {
    if (!data) {
      return <CircularProgress isIndeterminate color="green.300" />
    } else {
      return data.map((el: any, i: number) => (
        <Card key={uuid()} country={el} index={i + 1} />
      ))
    }
  }, [data])

  console.log(searchValue)

  return (
    <>
      <SearchInput
        changed={(e: any) => setSearchValue(e.currentTarget.value)}
      />
      <Center py={{ base: 12, md: 20 }} px={{ base: 4, md: 20 }}>
        {data ? (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: 6, md: 10 }}
          >
            {showData}
          </SimpleGrid>
        ) : (
          showData
        )}
      </Center>
    </>
  )
}

export default Search
