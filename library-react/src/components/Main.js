import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { apiUrl } from '../config/api';

const Main = () => {
    const [featuredBooks, setFeaturedBooks] = useState([]);

    useEffect(() => {
        axios.get(apiUrl('/api/book'))
            .then(res => {
                const books = res.data;
                const shuffled = [...books].sort(() => 0.5 - Math.random());
                setFeaturedBooks(shuffled.slice(0, 4));
            })
            .catch(err => console.error('Error fetching books:', err));
    }, []);

    return (
        <main className="main" id="main">
            <div className="container">
                <header className="page-header">
                    <span className="section-label">Welcome</span>
                    <h2 className="page-title">Featured Books</h2>
                    <p className="page-subtitle">A curated pick from our collection</p>
                </header>
                <div className="row g-4 featured-grid justify-content-center">
                    {featuredBooks.map(book => (
                        <div className="col-6 col-md-3" key={book.book_id}>
                            <article className="main-card card h-100">
                                <Link to={`/book/${book.book_id}`}>
                                    <img
                                        src={`/images/${book.cover_image}`}
                                        className="card-img-top"
                                        alt={book.title}
                                    />
                                </Link>
                                <div className="featured-card-body">
                                    <h3 className="featured-card-title">{book.title}</h3>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;
