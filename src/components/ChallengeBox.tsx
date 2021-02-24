import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    return(
        <div className={styles.challengeBoxContainer} >
            <div className={styles.challengNotActive}>
                <strong>
                    Finalize um ciclo para receber o seu desafio ;)
                </strong>
            </div>
        </div>
    )
}