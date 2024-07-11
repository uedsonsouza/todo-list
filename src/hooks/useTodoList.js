import { useState } from 'react'

const useEditTodo = editTodo => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = value => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  return { edit, setEdit, submitUpdate }
}

export default useEditTodo