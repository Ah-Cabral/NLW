//Importando useState e useEffect
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

//Importando styles
import styles from '../styles/components/Countdown.module.css'

//Exportando a função (Componente) Countdown 
export function Countdown(){

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown} = useContext(CountdownContext)

    //Declarando por desestruturação as variáveis minuteLeft e minuteRight, 
    //que seráo as variáveis dos dois números representantes dos segundos.
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    //Declarando por desestruturação as variáveis secondLeft e secondRight, 
    //que seráo as variáveis dos dois números representantes dos segundos.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ?(
                <button 
                disabled
                className={`${styles.countdownButton}`}>
                    Ciclo Encerrado
                </button>
            ): (
                //Utilizando Fragment
                <>
                { isActive ? (

                    <button 
                    type="button" onClick={resetCountdown} className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                        Abandonar Ciclo
                    </button>
        
                    ) : (
        
                    <button 
                    type="button" onClick={startCountdown} className={styles.countdownButton}>
                        Iniciar Ciclo
                    </button>)
        
                    }
                </>
            )}





        </div>    
    )
}