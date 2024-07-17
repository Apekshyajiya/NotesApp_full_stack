
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage"
import AddNotes from "./pages/AddNotes"
import NotePage from "./pages/NotePage"
import { useEffect, useState } from 'react';
import axios from "axios"


const App = () => {

  const [notes,setNotes] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/notes/")
    .then(res => {
      console.log(res.data)
      setNotes(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage notes={notes} />}/>
      <Route path="/add-notes" element={<AddNotes />} />
      <Route path="/notes-detail" element={<NotePage />} />
    </Route>
  ))



  return <RouterProvider router={router} />
};

export default App;
