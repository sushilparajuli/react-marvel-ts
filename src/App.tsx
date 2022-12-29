import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CharacterDetail from './routes/CharacterDetail/CharacterDetail'
import NotFound from './routes/NotFound/NotFound.component'
import Home from './routes/Home/Home.component'
import Root from 'routes/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/detail/:characterId',
        element: <CharacterDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
