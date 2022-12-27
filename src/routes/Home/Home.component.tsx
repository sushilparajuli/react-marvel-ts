import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { CharacterData } from '../../types/characters.type'
import { fetchCharacters } from '../../services/marvelApi'

import TableList from '../../components/TableList'

function Home() {
  const [characters, setCharacters] = useState<CharacterData[]>([])
  useEffect(() => {
    return () => {
      const getData = async () => {
        const { data } = await fetchCharacters({ offset: 30 })
        setCharacters(data.results)
      }
      getData()
    }
  }, [])
  return (
    <Box
      sx={{
        minHeight: '80vh',
        py: 10,
      }}
    >
      {/* {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))} */}
      <TableList rows={characters} />
    </Box>
  )
}

export default Home
