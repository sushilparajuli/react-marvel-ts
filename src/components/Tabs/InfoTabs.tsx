import { useState, SyntheticEvent } from 'react'
import { CharacterData } from '../../types/characters.type'
import { Chip, Stack, Typography, Tabs, Tab, Box } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import LiveTvIcon from '@mui/icons-material/LiveTv'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`info-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box key={index} sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `info-tab-${index}`,
    'aria-controls': `info-tabpanel-${index}`,
  }
}

type TabDataProps = {
  characterData: CharacterData
}

export default function InfoTabs({ characterData }: TabDataProps) {
  const { events, series, stories } = characterData
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="info tabs"
        >
          <Tab icon={<AutoStoriesIcon />} label="Stories" {...a11yProps(0)} />
          <Tab icon={<EmojiEventsIcon />} label="Events" {...a11yProps(1)} />
          <Tab icon={<LiveTvIcon />} label="Series" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack flexWrap="wrap" direction="row" rowGap={1} spacing={1}>
          {stories.available > 0 ? (
            stories?.items?.map((story) => (
              <Chip
                key={story.resourceURI}
                label={story.name}
                color="primary"
              />
            ))
          ) : (
            <>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4">Stories Not Available</Typography>
              </Box>
            </>
          )}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack flexWrap="wrap" direction="row" rowGap={1} spacing={1}>
          {events.available > 0 ? (
            events?.items?.map((event) => (
              <Chip
                key={event.resourceURI}
                label={event.name}
                color="primary"
              />
            ))
          ) : (
            <>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4">Events Not Available</Typography>
              </Box>
            </>
          )}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack flexWrap="wrap" direction="row" rowGap={1} spacing={1}>
          {series.available > 0 ? (
            series?.items?.map((serie) => (
              <Chip
                key={serie.resourceURI}
                label={serie.name}
                color="primary"
              />
            ))
          ) : (
            <>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4">Series Not Available</Typography>
              </Box>
            </>
          )}
        </Stack>
      </TabPanel>
    </Box>
  )
}
