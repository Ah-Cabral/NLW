import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void,
    resetCountdown: () => void,
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    //Declarando por desestruturação os elementos time e setTime
    const [time, setTime] = useState(0.05 * 60);

    //Declarando por desestruturação os elementos time e setTime
    const [isActive, setIsActive] = useState(false);

    const [hasFinished, setHasFinished] = useState(false);

    //Declarando constante referente aos minutos, que irá fazer o cálculo dos mins e arredondar p/ baixo
    const minutes = Math.floor(time / 60);

    //Declarando constante referente aos segundos
    const seconds = time % 60;


    //Iniciando função startCountdown, que irá mudar o valor do secAtive para true
    function startCountdown() {
        setIsActive(true);
    }

    let countdownTimeout: NodeJS.Timeout;

    //Criando função que irá resetar o Countdown
    function resetCountdown() {
        //Ele irá limpar o tempo definido no Timeout
        clearTimeout(countdownTimeout);

        //Ela irá parar ciclo atual (então mudaremos o setActive)
        setIsActive(false);

        //E irá mudar o tempo dos minutos para o tempo inicial
        setTime(0.05 * 60);

        setHasFinished(false);

    }

    //Utilizando o hook useEffect (Responsável por lidar com efeitos)
    useEffect(() => {
        //Fazendo verificação se o active e o time são maiores do que zero
        if (isActive && time > 0) {
            //Utilizando serTimeout e definindo tempo de 1 segundo
            countdownTimeout = setTimeout(() => {
                setTime(time - 1); //Modificando tempo para tempo -1
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}