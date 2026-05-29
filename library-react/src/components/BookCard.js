import { Link } from "react-router"

const BookCard = (props) => {
    return (
        <div className="col">
            <article className="card h-100">
                <Link to={`/book/${props.id}`}>
                    <img
                        src={`/images/${props.cover_image}`}
                        alt={props.title}
                        className="card-img-top"
                    />
                </Link>
                <section className="card-body">
                    <h5 className="card-title text-capitalize">{props.title}</h5>
                </section>
                <footer className="card-footer">
                    <Link to={`/book/${props.id}`} className="view-btn">
                        View details
                    </Link>
                </footer>
            </article>
        </div>
    )
}

export default BookCard
