import styles from '../Button/Button.module.css'

function Button({label,onClick}) {
    return (
      <>
        <div>
          <button className={styles.button} onClick={onClick}>
            {label}
          </button>
        </div>
      </>
    )
  }
  export default Button;