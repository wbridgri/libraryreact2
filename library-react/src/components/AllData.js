import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config/api'

import AllDataCard from './AllDataCard'

const AllData =( {table, name} )=> {

    const [ dataArr, setDataArr ] = useState([])


    useEffect(()=> {

        const url = apiUrl(`/api/${table}`)

        axios.get(url).then(res => setDataArr(res.data))
    }, [table])

    const allDataCardComponents = dataArr.map(item => {
        
        return (
            <AllDataCard 
                key={item.author_id || item.pub_id || item.format_id || item.genre_id}
                id={item.author_id || item.pub_id || item.format_id || item.genre_id}
                table={table} 
                data={item} 
                name={item.author || item.publisher || item.format || item.genre} 
            />  
        )
    })


    return (
        <main className="main" id="alllDataMain">
            <div className="container">
                <header className="page-header">
                    <span className="section-label">Browse</span>
                    <h2 className="page-title all-data-heading text-capitalize">All {name}s</h2>
                    <p className="page-subtitle">Select a {name} to view related books</p>
                </header>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                    { allDataCardComponents }
                </div>
            </div>
        </main>
    )
}

export default AllData