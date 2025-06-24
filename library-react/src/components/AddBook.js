import { useState, useEffect} from 'react'
import axios from 'axios'


const AddBook =(props)=>{
    const [authors, setAuthors] = useState([])
    const [publishers, setPublishers] = useState([])

    useEffect(()=>{
        const authorUrl = 'http://localhost:3001/api/author'
        const pubUrl = 'http://localhost:3001/api/publishing'

        axios.get(authorUrl).then(res => setAuthors(res.data))
        axios.get(pubUrl).then(res => setPublishers(res.data))
    }, [])

    // console.log(authors)
    // console.log(publishers)


    return(
        <>
        {props.isPostSuccess.isSuccess ? <Success /> :
            <main className="add-book" id="addBooks">
                <div className="container">
                    <form className="book-form" id="bookForm" onSubmit={ props.handleSubmit }>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">Book Title:</label>
                                <input id="title" type="text" className="form-control" name="title" onChange={props.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="author_id" className="form-label">Author:</label>
                                <select id="author_id" name="author_id" className="form-select" onChange={props.handleChange}>
                                  <option value="">Select an author</option>
                                  {authors.map((a) => (
                                    <option key={a.author_id} value={a.author_id}>{a.author}</option>
                                  ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="pub_id" className="form-label">Publisher:</label>
                                <select id="pub_id" name="pub_id" className="form-select" onChange={props.handleChange}>
                                  <option value="">Select a publisher</option>
                                  {publishers.map((p) => (
                                    <option key={p.pub_id} value={p.pub_id}>{p.publisher}</option>
                                  ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="copyright_year" className="form-label">Copyright Year:</label>
                                <input id="copyright_year" type="number" min="1900" max="2050" step="1" className="form-control" name="copyright_year" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="edition" className="form-label">Edition:</label>
                                <input id="edition" type="number" min="1" max="100" step="1" className="form-control" name="edition" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="edition_year" className="form-label">Edition Year:</label>
                                <input id="edition_year" type="number" min="1900" max="2050" step="1" className="form-control" name="edition_year" onChange={props.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="language" className="form-label">Language:</label>
                                <input id="language" type="text" className="form-control" name="language" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="num_pages" className="form-label">Number of Pages:</label>
                                <input id="num_pages" type="number" min="0" max="1000" step="1" className="form-control" name="num_pages" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="qty" className="form-label">Quantity:</label>
                                <input id="qty" type="number" min="1" max="30" step="1" className="form-control" name="qty" onChange={props.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="format-box">
                                    <p className="form-text">Format:</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="1" id="physicalFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="physicalFormat">Physical</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="2" id="audioFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="audioFormat">Audiobook</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="3" id="ebookFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="ebookFormat">E-Book</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <p className="form-text">Binding:</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="binding" defaultValue="paperback" id="bindingPaperback" onChange={props.handleChange} />
                                    <label className="form-check-label" htmlFor="bindingPaperback">Paperback</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="binding" defaultValue="hardback" id="bindingHardback" onChange={props.handleChange} />
                                    <label className="form-check-label" htmlFor="bindingHardback">Hardback</label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row mb-3">
  <div className="col">
    <label className="form-label">Rating:</label>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="rating" id="rate1" value="1" onChange={props.handleChange} />
      <label className="form-check-label" htmlFor="rate1">1</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="rating" id="rate2" value="2" onChange={props.handleChange} />
      <label className="form-check-label" htmlFor="rate2">2</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="rating" id="rate3" value="3" onChange={props.handleChange} />
      <label className="form-check-label" htmlFor="rate3">3</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="rating" id="rate4" value="4" onChange={props.handleChange} />
      <label className="form-check-label" htmlFor="rate4">4</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="rating" id="rate5" value="5" onChange={props.handleChange} />
      <label className="form-check-label" htmlFor="rate5">5</label>
    </div>
  </div>
</div>
                        
                        <div className="row mb-3">
                            <div className="col">
                                <button className="btn btn-dark" type="submit">Add Book</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            
        }
            
            
        </>
    )
}

const Success =()=> {
    return (
        <div className="container">
            <h2>Book was successfully added.</h2> 
        </div>
    )
}


export default AddBook