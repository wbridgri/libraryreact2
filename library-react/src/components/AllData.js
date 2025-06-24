import { useState, useEffect } from 'react'
import axios from 'axios'

import AllDataCard from './AllDataCard'

const AllData =( {table, name} )=> {

    const [ dataArr, setDataArr ] = useState([])


    useEffect(()=> {

        const url = `http://localhost:3001/api/${table}`

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
                <h2 className="all-data-heading text-capitalize">All {name}s</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    { allDataCardComponents }
                </div>
            </div>
        </main>
    )
}

export default AllData