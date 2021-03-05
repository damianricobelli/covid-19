import {
  Container,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

interface SarchInputProps {
  changed: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ changed }: SarchInputProps) => {
  return (
    <Container maxW={"xl"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          focusBorderColor={"green.400"}
          type="text"
          onChange={changed}
          placeholder="Search by country"
        />
      </InputGroup>
    </Container>
  )
}

export default SearchInput
