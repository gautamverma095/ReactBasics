
//  export const getTodo = async () => {

//     try {
//       setLoading(true)
//       let res = await fetch("https://glacial-reef-06253.herokuapp.com/todo")
//       res = await res.json()
//       console.log(res);
//       setLoading(false)
//       setTod0(res)
//     }
//     catch (err) {
//       console.log(err);
//     }
//   }

  

//  export const addTodo = async (item) => {
//     await fetch("https://glacial-reef-06253.herokuapp.com/todo", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(item)
//     })
// getTodo()
   

//   }

//  export const toggleTodo = async (id,newStatus) => {
//     await fetch(`https://glacial-reef-06253.herokuapp.com/todo/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({status:newStatus})
//     })
// getTodo()
   

//   }
//  export const deleteTodo = async (id) => {
//     await fetch(`https://glacial-reef-06253.herokuapp.com/todo/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
// getTodo()
   

//   }
  