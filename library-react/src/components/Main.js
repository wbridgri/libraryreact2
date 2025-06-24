import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router';

const Main = () => {
    const [featuredBooks, setFeaturedBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/book')
            .then(res => {
                const books = res.data;
                const shuffled = books.sort(() => 0.5 - Math.random());
                setFeaturedBooks(shuffled.slice(0, 4));
            })
            .catch(err => console.error('Error fetching books:', err));
    }, []);

    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-center mb-4 featured">Featured Books</h2>
                <div className="row">
                    {featuredBooks.map(book => (
                        <div className="col-md-3 mb-4" key={book.book_id}>
                            <div className=" main-card card h-100">
                            <Link to={`/book/${book.book_id}`}>
                                <img
                                    src={`/images/${book.cover_image}`}
                                    className="card-img-top"
                                    alt={book.title}
                                />
                            </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main