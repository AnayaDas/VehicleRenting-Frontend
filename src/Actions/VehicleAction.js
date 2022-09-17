export const setVehicle = (vehicle) => {
    return{
        type:'SET_VEHICLE',
        vehicle: vehicle
    }
}

export const getVehicleById = async (id) => {


    return async() => {
    const data = await axios.get('http://localhost:8089/vehicle/fetch'+id).then((response) => response.data).catch((error) => console.log(error));
    console.log(data);
    dispatch({
        type: 'SET_VEHICLE',
        vehicle: vehicle
    })
}



}
