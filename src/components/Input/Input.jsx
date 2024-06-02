import styles from '../Input/Input.module.css'

function Input({value}) {
    return (
      <>
        <div>
         <input className={styles.input} type="text" disabled value={value} readOnly/>
        </div>
      </>
    )
  }
  export default Input