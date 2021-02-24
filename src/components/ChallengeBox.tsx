import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    return(
        <div className={styles.challengeBoxContainer} >
            <div className={styles.challengNotActive}>
                <strong>
                    Finalize um ciclo para receber o seu desafio ;)
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up Icon"/>
                    Avance de levem completando Desafios
                </p>
            </div>
        </div>
    )
}