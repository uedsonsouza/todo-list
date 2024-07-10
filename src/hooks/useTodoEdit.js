import { useState } from "react"

const useTodoEdit = (initialValue, onSubmit) => {
  const [value, setValue] = useState(initialValue)

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    onSubmit(value)
  }

  return { value, setValue, handleSubmit }
}

export default useTodoEdit