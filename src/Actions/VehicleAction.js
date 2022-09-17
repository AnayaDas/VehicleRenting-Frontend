import axios from "axios";

export const setVehicle = (vehicle) => {
    return{
        type:'SET_VEHICLE',
        vehicle: vehicle
    }
}

export const getVehicleByName = async (name) => {


    console.log("vehicleAction");
    
    const data = await axios.get('http://localhost:8089/vehicle/get/'+name).then((response) => response.data).catch((error) => console.log(error));
    console.log(data);
    return data;
}




