import axios from "axios";

export const setVehicle = (vehicle) => {
    return{
        type:'SET_VEHICLE',
        vehicle: vehicle
    }
}

export const getVehicleById = async (id) => {


    console.log("vehicleAction");
    
    const data = await axios.get('http://localhost:8089/vehicle/fetch/1').then((response) => response.data).catch((error) => console.log(error));
    console.log(data);
    return data;
}




