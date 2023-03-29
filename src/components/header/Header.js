import styles from './Header.module.css'

import Menu from './Menu'

function Header() {
  return (
    <header className={styles.container}>
        <Menu />
    </header>
  )
}

export default Header