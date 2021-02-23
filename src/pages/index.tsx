import Head from 'next/head'

import { ExperienceBar } from '../components/ExperienceBar'

export default function Home() {
  return (
    //No react não podem-se ter
    //diversos elementos juntos, se esses não estiverem dentro de outro.
    //Nesse caso, o Head e a ExperienceBar
    
    <div className='container'>

      <ExperienceBar />

    </div>
    
  )
}
