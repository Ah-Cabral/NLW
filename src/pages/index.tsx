import { CompletedChallenges } from '../components/CompletedChallenges'

import { Countdown } from '../components/Countdown'

import { ExperienceBar } from '../components/ExperienceBar'

import { Profile } from '../components/Profile'

import { GetServerSideProps } from 'next';

import styles from '../styles/components/Home.module.css'

import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface Homeprops {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: Homeprops) {

  return (
    //No react não podem-se ter
    //diversos elementos juntos, se esses não estiverem dentro de outro.
    //Nesse caso, o Head e a ExperienceBar

    <div className={styles.container}>
      <ChallengesProvider
        level={props.level}
        challengesCompleted={props.challengesCompleted}
        currentExperience={props.currentExperience}>
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
      </ChallengesProvider>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}