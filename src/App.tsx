import { Routes, Route } from 'react-router-dom'
import CharacterDetail from 'routes/CharacterDetail/CharacterDetail'
import Home from './routes/Home/Home.component'
import Layout from './routes/Layout/Layout.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail/:characterId" element={<CharacterDetail />} />
      </Route>
    </Routes>
  )
}

export default App
