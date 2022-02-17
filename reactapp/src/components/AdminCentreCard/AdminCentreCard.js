import React from 'react'
import img from '../../assets/vacuumservice.jpg'
function AdminCentreCard(props) {
  return (
    <div className="container" style={props.style}>
        <div className="row">
            <div className="col-sm">
                <div class="card" >
                    <img src={img} class="card-img-top" id="Grid1" alt="Vacuumservice"/>
                    <div class="card-body">
                        <h5 class="card-title">VacuumService</h5>
                        <p class="card-text">Place:xxx</p>
                        <p class="card-text">Timings:10:00AM to 05:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCentreCard



