import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Pattern from './components/Pattern'

export default function App () {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pattern/:name' element={<Pattern />} />
        </Routes>
      </Layout>
    </Router>
  )
}
