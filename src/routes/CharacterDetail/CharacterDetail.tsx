import { Box, Typography, CardMedia, Card } from '@mui/material'
import { useEffect, useState } from 'react'
import { CharacterData } from '../../types/characters.type'
import { fetchCharactersDetails } from '../../services/marvelApi'
import { useParams } from 'react-router-dom'
import { Title } from './styles'

import CardContent from '@mui/material/CardContent'
import InfoTabs from 'components/Tabs/InfoTabs'

function CharacterDetail() {
  const [results, setResults] = useState<CharacterData[]>([])
  const { characterId } = useParams()
  useEffect(() => {
    return () => {
      const getData = async () => {
        const { data } = await fetchCharactersDetails({ id: characterId })
        setResults(data.results)
      }
      getData()
    }
  }, [characterId])
  return (
    <Box
      sx={{
        minHeight: '80vh',
        py: 5,
        textAlign: 'center',
      }}
    >
      {results.map((character) => (
        <Box key={character.id}>
          <Title variant="h2" mb={3}>
            {character.name}
          </Title>

          <Card sx={{ maxWidth: 750, margin: '0 auto 2rem' }}>
            <CardMedia
              component="img"
              sx={{ maxWidth: 750, maxHeight: 350 }}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />

            {character.description && (
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  {character.description}
                </Typography>
              </CardContent>
            )}
          </Card>
          <InfoTabs characterData={results[0]} />
        </Box>
      ))}
    </Box>
  )
}

export default CharacterDetail
