import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>00</span>
        </div>
    );
}