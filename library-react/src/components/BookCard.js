import { Link } from "react-router"


const BookCard =(props)=> {

    return (
        <div className="col">
            <div className="card h-100 w-100">
                <img src={`/images/${props.cover_image}`} alt="the title of the book" className="img-fluid image card-img-top" />
                <section className="card-body">
                    <h5 className="card-title text-capitalize">{props.title}</h5>
                    
                </section>
                <footer className="card-footer">
                    <button className="btn btn-outline-light">
                        <Link to={`/book/${props.id}`}>View more</Link>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default BookCard