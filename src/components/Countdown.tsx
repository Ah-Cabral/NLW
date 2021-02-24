//Importando useState e useEffect
import { useState, useEffect } from 'react'

//Importando styles
import styles from '../styles/components/Countdown.module.css'

//Exportando a função (Componente) Countdown 
export function Countdown(){

    //Declarando por desestruturação os elementos time e setTime
    const [time, setTime] = useState(25 * 60);

    //Declarando por desestruturação os elementos time e setTime
    const [active, setActive] = useState(false);

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

    //Iniciando função startCountdown, que irá mudar o valor do secAtive para true
    function startCountdown(){
        setActive(true);
    }

    //Utilizando o hook useEffect (Responsável por lidar com efeitos)
    useEffect(() =>{
        //Fazendo verificação se o active e o time são maiores do que zero
        if(active && time > 0){
            //Utilizando serTimeout e definindo tempo de 1 segundo
            setTimeout(() =>{
                setTime(time - 1); //Modificando tempo para tempo -1
            }, 1000)
        }
    }, [active, time]);

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

            <button type="button" onClick={startCountdown} className={styles.countdownButton}>
                Iniciar um Ciclo
            </button>
        </div>    
    )
}