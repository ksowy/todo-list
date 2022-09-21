import { Routes, Route } from 'react-router-dom'
import styles from './app.module.css'
import { Home } from './pages/home'
import { About } from './pages/about'

export const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}
