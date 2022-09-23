import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Nav } from './components/nav'
import styles from './app.module.css'

export const App = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}
