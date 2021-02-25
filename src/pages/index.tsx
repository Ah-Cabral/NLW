import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/components/Home.module.css'

import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    //No react não podem-se ter
    //diversos elementos juntos, se esses não estiverem dentro de outro.
    //Nesse caso, o Head e a ExperienceBar
    
    <div className={styles.container}>
      
      <Head>
        <title>Move.it</title>
      </Head>
      
      <ExperienceBar />


      <CountdownProvider>
        <section>

          <div>
            <Profile />
            
            <CompletedChallenges />

            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>

        </section>
      </CountdownProvider>
    </div>
    
  )
}
