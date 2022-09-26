import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Nav } from './components/nav'
import styles from './app.module.css'

export const App = () => {
  return (
    <>
      <Nav />
      <div className={styles.background}></div>
      <div className={styles.container}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}
