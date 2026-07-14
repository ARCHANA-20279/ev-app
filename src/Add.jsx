import axios from 'axios'
import React, { useState } from 'react'
import Nav from './component/Nav'

const Add = () => {

    const [input, changeInput] = useState({

        booking_id:"",
        fullname:"",
        email:"",
        phone:"",
        vehicleno:"",
        vehiclebrand:"",
        vehiclemodel:"",
        battery:"",
        connector:"",
        chargingdate:"",
        time:"",
        unit:"",
        chargingno:""

    })


    const inputHandler = (event) => {

        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }


    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:5000/add-booking", input)
        .then((response)=>{
            console.log(response.data)
            alert("Booking Added Successfully")
        })
        .catch((error)=>{
            console.log(error)
        })

    }


return (

<div>

<Nav />

<div className="container">

<div className="row">

<div className="col-12">

<div className="row">


<div className="col-12">
<label className="form-label">Booking ID</label>
<input 
type="text"
className="form-control"
name="booking_id"
value={input.booking_id}
onChange={inputHandler}
/>
</div>


<div className="col-12">
<label className="form-label">Full Name</label>
<input 
type="text"
className="form-control"
name="fullname"
value={input.fullname}
onChange={inputHandler}
/>
</div>


<div className="col-12">
<label className="form-label">Email</label>
<input 
type="email"
className="form-control"
name="email"
value={input.email}
onChange={inputHandler}
/>
</div>


<div className="col-12">
<label className="form-label">Phone</label>
<input 
type="text"
className="form-control"
name="phone"
value={input.phone}
onChange={inputHandler}
/>
</div>


<div className="col-12">
<label className="form-label">Vehicle Number</label>
<input 
type="text"
className="form-control"
name="vehicleno"
value={input.vehicleno}
onChange={inputHandler}
/>
</div>


<div className="col-12">
<label className="form-label">Vehicle Brand</label>

<select 
className="form-select"
name="vehiclebrand"
value={input.vehiclebrand}
onChange={inputHandler}
>

<option value="">Select</option>
<option value="Tata">Tata</option>
<option value="Mahindra">Mahindra</option>
<option value="BMW">BMW</option>

</select>

</div>



<div className="col-12">
<label className="form-label">Vehicle Model</label>

<select 
className="form-select"
name="vehiclemodel"
value={input.vehiclemodel}
onChange={inputHandler}
>

<option value="">Select</option>
<option value="Nexon EV">Nexon EV</option>
<option value="XUV400">XUV400</option>
<option value="i4">BMW i4</option>

</select>

</div>



<div className="col-12">
<label className="form-label">Battery</label>

<input 
type="text"
className="form-control"
name="battery"
value={input.battery}
onChange={inputHandler}
/>

</div>



<div className="col-12">
<label className="form-label">Connector</label>

<select
className="form-select"
name="connector"
value={input.connector}
onChange={inputHandler}
>

<option value="">Select</option>
<option value="CCS">CCS</option>
<option value="Type 2">Type 2</option>
<option value="CHAdeMO">CHAdeMO</option>

</select>

</div>



<div className="col-12">
<label className="form-label">Charging Date</label>

<input 
type="date"
className="form-control"
name="chargingdate"
value={input.chargingdate}
onChange={inputHandler}
/>

</div>



<div className="col-12">
<label className="form-label">Time</label>

<input 
type="time"
className="form-control"
name="time"
value={input.time}
onChange={inputHandler}
/>

</div>



<div className="col-12">
<label className="form-label">Unit</label>

<input 
type="text"
className="form-control"
name="unit"
value={input.unit}
onChange={inputHandler}
/>

</div>



<div className="col-12">
<label className="form-label">Charging Number</label>

<input 
type="text"
className="form-control"
name="chargingno"
value={input.chargingno}
onChange={inputHandler}
/>

</div>



<div className="col-12 mt-3">

<button 
className="btn btn-success"
onClick={readValue}
>
Submit
</button>

</div>


</div>

</div>

</div>

</div>

</div>

)

}

export default Add