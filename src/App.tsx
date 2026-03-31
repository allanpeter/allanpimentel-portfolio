import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Language } from './i18n'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home lang="pt" />} />
      <Route path="/en" element={<Home lang="en" />} />
    </Routes>
  )
}

export default App
