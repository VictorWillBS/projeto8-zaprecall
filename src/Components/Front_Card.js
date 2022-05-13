export default function Front_Card({hidden,children}){
    return(
        <article id={hidden}>
            {children}
        </article>

    )
}