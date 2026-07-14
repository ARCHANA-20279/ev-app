import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'


const View = () => {


    const [data,changeData]=useState([])
    const fetchData=()=>{

        axios.post("http://localhost:5000/view-booking").then(
           
            (response)=>{
                    console.log(response.data)

                changeData(response.data)
            }
        ).catch()
    }
   useEffect(() => {
    fetchData()
}, [])
  return (
    <div>
        <Nav />
         <div className="container">
                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>booking_id</th>
                                    <th>fullname</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>vehicleno </th>
                                    <th>vehiclebrand</th>
                                    <th>vehiclemodel</th>
                                    <th>battery</th>
                                    <th>connector</th>
                                    <th>chargingdate</th>
                                    <th>time</th>
                                    <th>unit</th>
                                    <th>chargingno</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.booking_id}</td>
                                        <td>{value.fullname}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.vehicleno}</td>
                                        <td>{value.vehiclebrand}</td>
                                        <td>{value.vehiclemodel}</td>
                                        <td>{value.battery}</td>
                                        <td>{value.connector}</td>
                                        <td>{value.chargingdate}</td>
                                        <td>{value.time}</td>
                                        <td>{value.unit}</td>
                                        <td>{value.chargingno}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default View