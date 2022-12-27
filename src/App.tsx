import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.component'
import Home from './routes/Home/Home.component'
import Layout from './routes/Layout/Layout.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
