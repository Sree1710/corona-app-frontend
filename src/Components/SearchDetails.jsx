import React, { useState } from 'react'
import Header from './Header'

const SearchDetails = () => {
    const [inputField,setInputField]=useState(
        {date:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>Search Details</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Date</label>
                            <input onChange={inputHandler} type="date" name="date" id="" className="form-control" value={inputField.date} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDetails