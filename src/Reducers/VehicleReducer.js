export const VehicleReducer = (vehicle = 'booking',action)=>{
    switch (action.type) {
        case 'SET_STAGE':
            vehicle = action.vehicle;
           // localStorage.setItem('stage',stage);
            return vehicle;

        default:
            //stage = localStorage.getItem('stage');
            return vehicle;
    }
}