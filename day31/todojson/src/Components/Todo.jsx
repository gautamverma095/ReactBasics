import React from 'react'
import TodoList from './TodoSingle'
import AddTodo from './AddTodo'
import { useState, useEffect } from 'react'



const Todo = () => {

  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(false)

  const getTodo = async () => {

    try {
      setLoading(true)
      let res = await fetch("https://glacial-reef-06253.herokuapp.com/todo")
      res = await res.json()
      console.log(res);
      setLoading(false)
      setTodo(res)
    }
    catch (err) {
      console.log(err);
    }
  }

  const addTodo = async (item) => {
    await fetch("https://glacial-reef-06253.herokuapp.com/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
    getTodo()


  }

  const toggleTodo = async (id, newStatus) => {
    await fetch(`https://glacial-reef-06253.herokuapp.com/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    })
    getTodo()


  }
  const deleteTodo = async (id) => {
    await fetch(`https://glacial-reef-06253.herokuapp.com/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    getTodo()


  }




  useEffect(() => {
    handleAlltodo()
    // getTodo()

  }, [])

  const handleAlltodo = () => {
    getTodo()

  }

  const handleAdd = (text) => {
    const item = {
      title: text,
      status: false
    }
    addTodo(item)


  }

  const handleToggle = (id, newStatus) => {
    setLoading(true)
    toggleTodo(id, newStatus)


  }
  const handleDelete = (id) => {
    setLoading(true)
    deleteTodo(id)


  }



  return (
    <>
      <AddTodo handleAdd={handleAdd} />

      <div>
      <button>ASC/DESC</button>
      </div>

      <div>{loading && "...Loading"}</div>
      <h1>Pending</h1>
      {
        todo.filter((el) => el.status === false).map((el, index) => {
          return (

            <TodoList key={index} title={el.title} id={el.id} status={el.status}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />

          )

        })
      }

      <h1>Completed</h1>
      {
        todo.filter((el) => el.status == true).map((el, index) => {
          return (

            <TodoList key={index} title={el.title} id={el.id} status={el.status}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />

          )

        })
      }

    </>
  )
}


export default Todo
