import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './Routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
