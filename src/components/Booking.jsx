import { useEffect, useState } from "react";
import { FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getVehicleByName } from "../Actions/VehicleAction";


const Booking = () =>{
    const name = useSelector( state => state.vehicle);
    const [vehicle, setVehicle] = useState()
    useEffect(()=>{
        
        console.log("inside useEffect");
        return async() =>{
            const data = await getVehicleByName(name).then((response) => response.data).catch((error) => console.log(error));
            console.log(data);
            setVehicle(data);
            
        }
    },[]);


    return (
        <>
          <div className="conatiner bg-dark m-auto text-center text-light position-relative" style={{ width: '90vw', top: '3vw', fontSize: '3vw', opacity: '0.9', bordeRadius: '20px', height: '90vw' }}>
          <div className="bg-warning position-absolute p-0 end-0" style={{ width: '70vw', height: '85%', borderBottomLeftRadius: '20px' ,borderRadius:'10px'}}>

            <FormGroup className="form_group">
                <input type={"time"} placeholder= "Pickup Time" required />
            </FormGroup>

            <FormGroup className="form_group">
                <input type={"time"} placeholder= "Return Time" required />
            </FormGroup>

            </div>
            </div>
            </>
    );
    



}
export default Booking;