import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import "./global.css"
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post 
          author="Evandro Cunha dos Santos"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi veritatis incidunt repudiandae nisi, aperiam, officia reprehenderit qui, sequi dolorum provident illum mollitia cumque nemo a aliquid eaque veniam doloremque ab."
          />
        </main>
      </div>
    </div>
  )
}

export default App