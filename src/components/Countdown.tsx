//Importando useState e useEffect
import { useState, useEffect } from 'react'

//Importando styles
import styles from '../styles/components/Countdown.module.css'

//Exportando a função (Componente) Countdown 
export function Countdown(){

    //Declarando por desestruturação os elementos time e setTime
    const [time, setTime] = useState(0.05 * 60);

    //Declarando por desestruturação os elementos time e setTime
    const [isActive, setIsActive] = useState(false);

    const [hasFinished, setHasFinished] = useState(false);

    //Declarando constante referente aos minutos, que irá fazer o cálculo dos mins e arredondar p/ baixo
    const minutes = Math.floor(time/60);

    //Declarando constante referente aos segundos
    const seconds = time % 60;

    //Declarando por desestruturação as variáveis minuteLeft e minuteRight, 
    //que seráo as variáveis dos dois números representantes dos segundos.
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    //Declarando por desestruturação as variáveis secondLeft e secondRight, 
    //que seráo as variáveis dos dois números representantes dos segundos.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    let countdownTimeout: NodeJS.Timeout;

    //Iniciando função startCountdown, que irá mudar o valor do secAtive para true
    function startCountdown(){
        setIsActive(true);
    }

    //Utilizando o hook useEffect (Responsável por lidar com efeitos)
    useEffect(() =>{
        //Fazendo verificação se o active e o time são maiores do que zero
        if(isActive && time > 0){
            //Utilizando serTimeout e definindo tempo de 1 segundo
            countdownTimeout = setTimeout(() =>{
                setTime(time - 1); //Modificando tempo para tempo -1
            }, 1000)
        }else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);

    //Criando função que irá resetar o Countdown
    function resetCountdown(){
        //Ele irá limpar o tempo definido no Timeout
        clearTimeout(countdownTimeout);

        //Ela irá parar ciclo atual (então mudaremos o setActive)
        setIsActive(false);

        //E irá mudar o tempo dos minutos para o tempo inicial
        setTime(0.05 * 60);

    }

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