import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import { useState } from 'react'

function App() {
  const [currentNumber, setCurrentNumber] = useState('')
  const [firstNumber, setFirstNumber] = useState('')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('')
    setFirstNumber('')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => (prev === '' ? number : `${prev}${number}`))
  }

  const handleOperation = (op) => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber)
      setCurrentNumber('')
      setOperation(op)
    } else {
      if (op === '+') {
        const result = Number(firstNumber) + Number(currentNumber)
        setCurrentNumber(String(result))
      } else if (op === '-') {
        const result = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(String(result))
      } else if (op === '*') {
        const result = Number(firstNumber) * Number(currentNumber)
        setCurrentNumber(String(result))
      } else if (op === '/') {
        const result = Number(firstNumber) / Number(currentNumber)
        setCurrentNumber(String(result))
      }
      setFirstNumber('')
      setOperation('')
    }
  }
  

  const handleEquals = () => {
    if (firstNumber !== '' && operation !== '') {
      handleOperation(operation)
    }
  }

  return (
    <> 
      <div className='title-calculadora'>
        <h1>Criando Uma Calculadora Com React</h1>
      </div>
      <div className='container-calculadora'>
        <Input value={currentNumber} />
        <div className='buttonLeft'>
          <Button label='C' onClick={handleOnClear} />
        </div>
        <div className='buttonRow'>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='/' onClick={() => handleOperation('/')} />
        </div>
        <div className='buttonRow'>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='*' onClick={() => handleOperation('*')} />
        </div>
        <div className='buttonRow'>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='-' onClick={() => handleOperation('-')} />
        </div>
        <div className='buttonRow'>
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label=',' onClick={() => handleAddNumber('.')} />
          <Button label='=' onClick={handleEquals} />
          <Button label='+' onClick={() => handleOperation('+')} />
        </div>
      </div>
    </>
  )
}

export default App
