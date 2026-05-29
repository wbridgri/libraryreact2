import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import axios from 'axios'
import { apiUrl } from '../config/api'

const SingleBook = () => {
    const [book, setBook] = useState({})
    const params = useParams()

    useEffect(() => {
        const url = apiUrl(`/api/book/${params.id}`)
        axios.get(url).then(res => setBook(res.data))
    }, [params.id])

    return (
        <main className="single-book" id="SingleBookMain">
            <div className="container">
                <header className="page-header">
                    <Link to="/book" className="section-label">&larr; Back to catalog</Link>
                    <h2 className="page-title single-book-heading">{book.title || 'Book details'}</h2>
                </header>
                <div className="row g-4 align-items-start">
                    <div className="col-lg-5">
                        <div className="cover-wrap">
                            {book.cover_image && (
                                <img
                                    src={`/images/${book.cover_image}`}
                                    alt={book.title}
                                    className="img-fluid cover-single-img"
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="single-book-panel">
                            <h3 className="book-info">Details</h3>
                            <ul className="book-info-list list-group list-group-flush">
                                <li className="list-group-item">Author: {book.author}</li>
                                <li className="list-group-item">Publisher: {book.publisher}</li>
                                <li className="list-group-item">Copyright: {book.copyright_year}</li>
                                <li className="list-group-item">Edition: {book.edition}</li>
                                <li className="list-group-item">Edition year: {book.edition_year}</li>
                                <li className="list-group-item">Format: {book.format}</li>
                                <li className="list-group-item">Binding: {book.binding}</li>
                                <li className="list-group-item">Rating: {book.rating} / 5</li>
                                <li className="list-group-item">Language: {book.language}</li>
                                <li className="list-group-item">Pages: {book.num_pages}</li>
                                <li className="list-group-item">In stock: {book.qty}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleBook
