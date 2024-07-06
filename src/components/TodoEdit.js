import React, { useState } from 'react'

const TodoEdit = ({ edit, onSubmit }) => {
  const [value, setValue] = useState(edit.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Update task"
      />
      <button type="submit">Update</button>
    </form>
  )
}

export default TodoEdit
