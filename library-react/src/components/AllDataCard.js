import { useState, useEffect} from 'react'
import { Link } from "react-router"

const AllDataCard =(props)=> {

    return (
        <div className="col">
            <div className="figure h-100 w-100 data-figure text-capitalize">
                    <Link to={`/${props.table}/${props.id}`}>
                        { props.name } 
                    </Link>
            </div>
        </div>
    )
}

export default AllDataCard