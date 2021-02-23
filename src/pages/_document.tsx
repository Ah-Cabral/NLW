import Document, { Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        //As fontes foram carregadar no _document.tsx devido ao fato dele carregar apenas
        //uma vez, então indendente de o quanto o usuário acesse a aplicação, ele carregará o document apenas uma vez.
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}