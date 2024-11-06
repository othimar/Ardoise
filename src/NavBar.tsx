import {useAppDispatch} from './app/hooks.ts'
import {openExportImg} from './features/modals/modalsSlice.ts'
import styles from './NavBar.module.scss'

function NavBar(){
  const dispatch = useAppDispatch()

  return(
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>Ar</span>
        <span className={styles.logoName}>Ardoise</span>
      </div>
      <button onClick={()=>dispatch(openExportImg())} className={styles.btnExport} >Exporter</button>
    </nav>
  )
}

export default NavBar
