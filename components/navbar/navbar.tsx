import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
      <div className={styles.halftone}></div>
    </>
  )
}

export default Navbar;