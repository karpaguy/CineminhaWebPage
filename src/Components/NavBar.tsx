import styles from './CSS/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <img src="https://purepng.com/public/uploads/large/purepng.com-popcornfood-popcorn-941524637163vnpkc.png" className={styles.Img}></img>
            <ul>
                <li><a href="#" className={styles.NavItem}>HOME</a></li>
                <li><a href="#" className={styles.NavItem}>PROGRAMAÇÃO</a></li>
                <li><a href="#"><img src="#"></img>L</a></li>
                <li><a href="#"><img src="#"></img>P</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;