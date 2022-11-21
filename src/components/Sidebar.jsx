import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() { 
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=50"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/evandrocsjr.png"/>

                <strong>Evandro C.</strong>
                <span>Sênior Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}