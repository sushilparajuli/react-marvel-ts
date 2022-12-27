import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchCharacters } from 'services/marvelApi'
import { CharacterData } from 'types/characters.type'

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
      }}
    >
      {characters.map((character) => (
        <p>{character.name}</p>
      ))}
    </Box>
  )
}

export default Home
