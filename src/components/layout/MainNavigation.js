import { useNavigate } from "react-router-dom"
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
const nav = useNavigate();
    return(
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li} onClick={()=>nav("/")}>All Meetups</li>
                    <li className={styles.li} onClick={()=>nav("/new-meetup")}>Add New Meetup</li>
                    <li className={styles.li} onClick={()=>nav("/favorites")}>My Favorites</li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;