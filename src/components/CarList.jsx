import { useEffect, useState } from "react";
import { getAllVehicles } from "../Actions/CarAction";


const CarList=()=> {
    const [vehicleList, setVehicleList] = useState(()=> {
        return [
            {
                "vehicleId":1,
                "vehicleName":"Baleno",
                "vehicleNumber":"Mh2387",
                "rent":500
            }
        ]

        
    })



    useEffect(() => {

        
        return(async()=> {
            const data = await getAllVehicles().then((response)=> response).catch((error)=> console.log(error));
        setVehicleList(data)
        console.log(data);

        }

        )
      
    
      
    }, [])
    
    return(
        <div>
            {
                
                vehicleList.map((element) => {
                    return(

                        //<li key={element.vehicleId}>
                            <table className="table table-hover table-warning table-striped" key={element.vehicleId} >
                            <thead>
                                    <tr>
                                    <th scope="col" style={{ bottom:"50vw"}} >Vehicle ID</th>
                                    <th scope="col"style={{ bottom:"50vw"}}>Vehicle Name</th>
                                    <th scope="col"style={{ bottom:"50vw"}}>Vehicle Number</th>
                                     <th scope="col"style={{ bottom:"50vw"}}>City</th>
                                    <th scope="col"style={{ bottom:"50vw"}}>Area</th> 
                                    <th scope="col"style={{ bottom:"50vw"}}>Rent Per Hour</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                    <th scope="row"> {element.vehicleId}</th>
                                    <td> {element.vehicleName}</td>
                                    <td>{element.vehicleNumber}</td>
                                    <td>{element[0].location.city}</td>
                                    <td>{element[0].location.area}</td> 
                                    <td> {element.rent}</td>
                                    </tr>
                                   
                                </tbody>
</table>

                    //     {/* vehicleId = {element.vehicleId}
                    //     vehicleName= {element.vehicleName}
                    //     vehicleNumber= {element.vehicleNumber}
                    //     rent= {element.rent} */}
                    //    // </li>
                        

                    );
                })
            }
            </div>
    );

}
export default CarList;