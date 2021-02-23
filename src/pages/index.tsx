
import { CompletedChallenges } from '../components/CompletedChallenges'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    //No react não podem-se ter
    //diversos elementos juntos, se esses não estiverem dentro de outro.
    //Nesse caso, o Head e a ExperienceBar
    
    <div className={styles.container}>

      <ExperienceBar />

      <section>

        <div>
          <Profile />
          <CompletedChallenges />
        </div>

        <div>

        </div>

      </section>

    </div>
    
  )
}
