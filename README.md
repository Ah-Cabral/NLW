# NLW

## Dia 1 (22-02-2021) - O que será feito?

Nessa primeira aula serão repassados os fundamentos de React e começaremos a entender alguns conceitos que são compartilhados em todas
as aplicações React, independente de onde ela seja apresentada, tendo em vista que React é uma biblioteca onipresente.

## Dia 1 (22-02-2021) - Apresentação do Projeto:

O projeto à ser desenvolvido na Next Level Week #4 é o Move.it.

#### [Contextualizando]

Já parou pra pensar que você passa às vezes até 20 horas na frente de um computador, e esquece-se de alongar-se, descansar a visão, comer (haha).
Hoje em dia é mais normal ver que os devs estão tendo problemas de saúde mais constantes devido ao fato de não perceberem o que estão "fazendo".

#### [Exemplo Teórico: Técnica de Pomodoro]

A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. 
A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.

O Move.it possui essa mesma pegada, ele une a técnica de pomodoro à aplicação.

Exemplo:

Você irá trabalhar por 25 minutos e após esse intervalo de tempo, você será notificado e receberá uma tarefa.
Essa tarefa valerá uma certa quantidade de experiência, que fará você subir níveis, que poderão ser compartilhados.

#### O que é React?

React é um biblioteca de criação de interfaces altamente fluida e performática. Costuma-se dizer que React é altamente reativa,
devido ao fato de que conseguimos criar interfaces reativas às ações do usuário.

[Exemplo] Se uma interface possui o botão de deletar algo, e esse botão é clicado, o React envia 
a mensagem para o back-end (onde ocorre a deleção da informação no banco de dados) e, sem recarregar a página, 
faz com que o conteúdo suma da tela.

Esse importante recurso em react faz com que seja possível reaproveitar os elementos semelhantes entre 
às telas intactos, sem a necessidade de um novo carregamento.

## Dia 2 (23-02-2021) - Next.js :

O Next.js pode ser considerado um framework em cima do React(Biblioteca de Construção de Interfaces).
Ele traz um conjunto de atividades que são muito comuns em aplicações React.

No Geral, o Next.js é uma camada intermediária entre o back-end e o front-end, responsável por construir a interface
da nossa aplicação através de um servidor (camada intermediára) para que, quando o usuário acessar a aplicação,
a interface já esteja pronta.


#### Qual o motivo de utilizarmos o next?

Um dos pontos importantes do Next.js é que ele habilita trabalhar com as 3 siglas 
mais famosas do desenvolvimento front-end hoje em dia:

#### SPA / SSR / SSG

### SPA: Single Page Aplication

Quando utilizamos o create react-app, utilizamos o conceito de SPA, 
ou seja uma aplicação de uma só página.

O SPA funciona da seguinte forma: Toda a interface é construída no front-end, e quando
muda-se de uma rota para outra, mantém-se as coisas que são repetitíveis na rota
e muda-se apenas o que é característico da rota (o conteúdo).

Single Page Aplication: 1 Página, onde apenas o conteúdo muda, 
mas os componentes repetitíveis permanecem.

-Ponto Negativo: Não irá funcionar caso o JavaScript seja desabilitado, isso ocorre
devido ao fato de tudo ser feito no front-end.

Com isso, o Next.js surge para inicialmente fazer com que nossas aplicações React sejam
indexadas por motores de busca.

