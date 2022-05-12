export default function Questions(){
    return(<>
            <header>
                <img src="assets/logo-pequeno.png"></img>
              <h2> ZapRecall </h2>  
            </header>
            <section className="questionCard">
                <article>
                    <h4>Pergunta 1</h4>
                    <figure> <ion-icon size="large" name="play-outline"></ion-icon></figure>
                </article>
                
                <article>
                    <h4>Pergunta 2</h4>
                    <figure> <ion-icon size="large" name="play-outline"></ion-icon></figure>
                </article>

                <article>
                    <h4>Pergunta 3</h4>
                    <figure> <ion-icon size="large" name="play-outline"></ion-icon></figure>
                </article>

                <article>
                    <h4>Pergunta 4</h4>
                    <figure> <ion-icon size="large" name="play-outline"></ion-icon></figure>
                </article>
                

            </section>
            <footer>
                <h4> Concluido</h4>
            </footer>
            
    </>)
}