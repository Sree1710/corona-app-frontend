import React, { useState } from 'react'
import Header from './Header'

const AddDetails = () => {
    const [inputField,setInputField]=useState(
        {date:"",states:"",positive:"",negative:"",hospitalizedCurrently:"",inIcuCurrently:"",onVentilatorCurrently:"",death:"",recovered:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Details</h1>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Date</label>
                            <input onChange={inputHandler} type="date" name="date" id="" className="form-control" value={inputField.date} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">States</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="states" value={inputField.states} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Positive Cases</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="positive" value={inputField.positive} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Negative Cases</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="negative" value={inputField.negative} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Number Of People Hospitalized</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="hospitalizedCurrently" value={inputField.hospitalizedCurrently} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Patients In ICU</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="inIcuCurrently" value={inputField.inIcuCurrently} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Patients In Ventilator</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="onVentilatorCurrently" value={inputField.onVentilatorCurrently} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Number Of Deaths</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="death" value={inputField.death} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Recovered Patients Count</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="recovered" value={inputField.recovered} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDetails