import styles from "./Tags.module.scss";

import fotos from "../Galeria/foto.json";

function Tags(props){
    return(
        <div className={styles.tags}>
            <p>Busque por tags:</p>
            <ul className={styles.tags__lista}>
                {props.tags.map(tag => {
                    return(
                        <li key={tag} onClick={() => props.filtraFotos(tag)}>{tag}</li>
                    )
                })}
                <li onClick={() => props.setItens(fotos)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags;