import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewDetails = () => {
    const [covidData, setData] = useState(
        []
    )

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://api.covidtracking.com/v1/us/daily.json").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Details</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">States</th>
                                            <th scope="col">Positive Cases</th>
                                            <th scope="col">Negative Cases</th>
                                            <th scope="col">People Hospitalized</th>
                                            <th scope="col">Patients In ICU</th>
                                            <th scope="col">Patients On Ventilator</th>
                                            <th scope="col">Number Of Deaths</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="spinner-border text-info" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {covidData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.date}</th>
                                                    <td>{value.states}</td>
                                                    <td>{value.positive}</td>
                                                    <td>{value.negative}</td>
                                                    <td>{value.hospitalizedCurrently}</td>
                                                    <td>{value.inIcuCurrently}</td>
                                                    <td>{value.onVentilatorCurrently}</td>
                                                    <td>{value.onVentilatorCurrently}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails