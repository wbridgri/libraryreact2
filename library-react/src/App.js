import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
import axios from "axios"



import Header from "./components/Header"
import Main from "./components/Main"
import AllBooks from "./components/AllBooks"
import AddBook from "./components/AddBook"
import SingleBook from "./components/SingleBook"
import AllData from "./components/AllData"
import Footer from "./components/Footer"
import Error from "./components/Error"

const App =()=>{
    const [formData, setFormData] = useState({
        title: '',
        author_id: 0,
        pub_id: 0,
        copyright_year: '',
        edition: 0,
        edition_year: '',
        format_id: 0,
        binding: '',
        rating: '',
        language: '',
        num_pages: 0,
        cover_image: '',
        qty: 0
    })


    const [ isPostSuccess, setIsPostSuccess] = useState({
        isSuccess: false,
        id: 0
    })

    const resetData=()=>{
        setIsPostSuccess({
            isSuccess: false,
            id: 0
        })
    

        setFormData({
        title: '',
        author_id: 0,
        pub_id: 0,
        copyright_year: '',
        edition: 0,
        edition_year: '',
        format_id: 0,
        binding: '',
        rating: '',
        language: '',
        qty: 0,
        num_pages: 0,
        cover_image: '',
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/book/post',
            data: formData
        }).then(response => {
            setIsPostSuccess({isSuccess: true, id: response.data.Last_id})
        })
        console.log(formData)
    }



    const handleChange =(event)=> {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }



    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/book" element={<AllBooks  table='book' resetData={resetData} />} />
            <Route path="/book/:id" element={<SingleBook />} />

            <Route path="/addBook" element={<AddBook handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} isPostSuccess={isPostSuccess} />} />



            {isPostSuccess.isSuccess && <Route path={`/book/${isPostSuccess.id}`} element={<SingleBook />} /> }
            <Route path="/author" element={<AllData table="author" name="author" />} />
            <Route path="/author/:endpoint" element={<AllBooks table="author" resetData={resetData} />} />

            <Route path="/publishing" element={<AllData table="publishing" name="publishing" />} />
            <Route path="/publishing/:endpoint" element={<AllBooks table="publishing" resetData={resetData}  />} />

            <Route path="/format" element={<AllData table="format" name="format" />} />
            <Route path="/format/:endpoint" element={<AllBooks table="format" resetData={resetData}  />} />

            <Route path="/genre" element={<AllData table="genre" name="genre" />} />
            <Route path="/genre/:endpoint" element={<AllBooks table="genre" resetData={resetData}  />} />

            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </>
    )
}


export default App