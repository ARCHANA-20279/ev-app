import axios from 'axios'
import React, { useState } from 'react'


const Add = () => {
    const[input,changeInput]=useState({

        "booking_id":"",
        "fullname":"",
        "email":"",
        "phone":"",
        "vehicleno":"",
        "vehiclebrand":"",
        "vehiclemodel":"",
        "battery":"",
        "connector":"",
        "chargingdate":"",
        "time":"",
        "unit":"",
        "chargingno":""

    })
    const inputHandler=(event)=>{

        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{

        console.log(input)
        axios.post("",input).then(
            (response)=>{response.data}
        ).catch()
    }
  return (
    <div>
        
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">booking_id</label>
                    <input type="text" className="form-control"
                    name="booking_id"
                    value={input.booking_id}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">fullname</label>
                    <input type="text" className="form-control"
                    name="fullname"
                    value={input.fullname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">email</label>
                    <input type="email" className="form-control"
                    name="email"
                    value={input.email}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Phone</label>
                    <input type="phone" className="form-control"
                    name="phone"
                    value={input.phone}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">vehicleno</label>
                    <input type="date" className="form-control"
                    name="Dob"
                    value={input.vehicleno}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">vehiclebrand</label>
                    <select id="" className="form-select" name="vehiclebrand" value={input.vehiclebrand} onChange={inputHandler}>
                        <option value="select">select</option>
                        <option value="tata">tata</option>
                        <option value="mahindra">mahindra</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">vehiclemodel</label>
                    <select id="" className="form-select" name="vehiclemodel" value={input.vehiclemodel} onChange={inputHandler}>
                        <option value="select">select</option>
                        <option value="bmw">bmw</option>
                        <option value="honda">honda</option>
                                                <option value="audi">audi</option>

                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">battery</label>
                        <input type="text" className="form-control" />                        

                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">connector</label>
                    <input type="text" className="form-control"
                    name="connector"
                    value={input.connector}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">chargingdate</label>
                    <input type="date" className="form-control"
                    name="chargingdate"
                    value={input.chargingdate}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">time</label>
                    <input type="text" className="form-control"
                    name="time"
                    value={input.time}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">unit</label>
                    <input type="text" className="form-control"
                    name="unit"
                    value={input.unit}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">chargingno</label>
                    <input type="text" className="form-control"
                    name="chargingno"
                    value={input.chargingno}
                    onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success"onClick={readValue}>submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add