export const VehicleReducer = (vehicle = '',action)=>{
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

// 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