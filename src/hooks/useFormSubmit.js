import { useState } from 'react'

const useFormSubmit = addTodo => {
  const [task, setTask] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!task) return
    addTodo(task)
    setTask('')
  }

  return { task, setTask, handleSubmit }
}

export default useFormSubmit
