import React from 'react'

function AdminPage() {
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage;


// import { Text } from '@chakra-ui/react';
// import {  useEffect, useState } from 'react'
// import { Input, Button, SimpleGrid, Box } from '@chakra-ui/react'
// import { useNavigate} from 'react-router-dom';
// import Update from './Update';



// const Todos = () => {
//   const [ todo, setTodo ] = useState([]);
//   const [ name, setName ] = useState("");
//   const [ title, setTitle ] = useState("");
//   const [ description, setDescription ] = useState("");
//   const navigate = useNavigate();
//   const uid = localStorage.getItem("userId")
//   useEffect(() =>{
    
//     fetch(`https://real-plum-hare-yoke.cyclic.app/todos/${uid}`, {
//         headers: {
//           "Authorization":localStorage.getItem("token")
//         }
//     })
//   //   fetch(`http://localhost:8080/todos/${uid}`, {
//   //     headers: {
//   //       "Authorization":localStorage.getItem("token")
//   //     }
//   // })
//     .then(res => res.json())
//     .then(res =>{
//       console.log(res)
//       setTodo(res);
//     })
//     .catch(err => console.log(err))
//   },[todo, uid])


//   const handleSubmit = () => {
//     const payload = {
//       name,
//       title,
//       description
//     }
//     fetch("https://real-plum-hare-yoke.cyclic.app/todos/add", {
//       method:"POST",
//       body: JSON.stringify(payload),
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization":localStorage.getItem("token")
//       }
//     })
//     // fetch("http://localhost:8080/todos/add", {
//     //   method:"POST",
//     //   body: JSON.stringify(payload),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     "Authorization":localStorage.getItem("token")
//     //   }
//     // })
//     .then(res => res.json())
//     .then(res =>{
//       console.log(res)
//     })
//     .catch(err => console.log(err))
//     // console.log(payload);
//   }

//   const handleDelete = (id) => {
//     fetch(`https://real-plum-hare-yoke.cyclic.app/todos/delete/${id}`, {
//       method:"DELETE",
//       headers: {
//         "Authorization":localStorage.getItem("token")
//       }
//     })
//     // fetch(`http://localhost:8080/todos/delete/${id}`, {
//     //   method:"DELETE",
//     //   headers: {
//     //     "Authorization":localStorage.getItem("token")
//     //   }
//     // })
//     .then(res => res.json())
//     .then(res =>{
//       console.log(res)
//       if(res.length===0) {
//         alert("You are not authorized.");
//       }
//     })
//     .catch(err => console.log(err))
//   }

//    const handleUpdate = (id) => {
//         <Update />
//           navigate(`/todos/update/${id}`);
//    }

    

//   return (
//     <SimpleGrid columns={[1,1,1,2,2,2]} spacing={10} m='auto' mt='10' w='90%'>
//   <Box border='2px' borderColor='teal' height='600px' alignItems='center' justifyContent='center' alignContent='center'>
//        <Box p='10' m='auto' mt='28' w='80%' >
//      <form action="" border='2px'>
//        <Text fontSize='xl' align='left'>Username *</Text>
//        <Input placeholder='Enter username' value={ name } onChange={(e) => setName(e.target.value)} />
//        <Text fontSize='xl' align='left'>Title *</Text>
//        <Input type='text' placeholder='Enter title' value={ title } onChange={(e) => setTitle(e.target.value)}/>
//        <Text fontSize='xl' align='left'>Description *</Text>
//       <Input type='text' placeholder='Enter description' value={ description } onChange={(e) => setDescription(e.target.value)}/>
//       <Button colorScheme='blue' mt='6' onClick = { handleSubmit }>Add</Button>
//      </form>
//        </Box>
//   </Box>
//   <Box border='2px' borderColor='teal'  height='auto' p='10'>
//      <div>
//       <Text fontSize='5xl' >TODOS</Text>

  
    
//       { todo.length>0 ? todo.map((el) => {
//          return (
//            <Box key={el._id} border='2px' borderColor='teal' w='90%' m='auto' mt='4' p='6'>
//            <Text fontSize='2xl' color='teal'>{el.name}</Text>
//            <Text fontSize='xl' color='teal'>{el.title}</Text>
//            <Text fontSize='lg' color='teal'>{el.description}</Text>
//           <Button colorScheme='blue' mt='6' onClick = { () => handleUpdate(el._id) }>Update</Button>
//            <Button colorScheme='blue' mt='6' ml='4' onClick = { () => handleDelete(el._id) }>Delete</Button>
//            </Box>
//          )
//        }) : <Text fontSize='2xl'> No Todo </Text> }
//      </div>
//   </Box>
  
// </SimpleGrid>
  
//   )
// }

// export default Todos