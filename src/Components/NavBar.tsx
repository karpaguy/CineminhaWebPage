import styles from './CSS/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <img src="https://purepng.com/public/uploads/large/purepng.com-popcornfood-popcorn-941524637163vnpkc.png" className={styles.Img}></img>
            <ul>
                <li><a href="#"></a>HOME</li>
                <li><a href="#"></a>PROGRAMAÇÃO</li>
                <li><a href="#"><img src="#"></img></a>L</li>
                <li><a href="#"><img src="#"></img></a>P</li>
            </ul>
        </nav>
    );
}

export default NavBar;