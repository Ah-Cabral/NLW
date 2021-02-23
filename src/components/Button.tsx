interface ButtonProps{ //Definindo quais são as propriedades que o botão pode receber
    color: string;
}

export function Button(props: ButtonProps){
    return(
        <button type="button" style={{backgroundColor: props.color}}>
            {props.color}
        
        </button>
    );
}