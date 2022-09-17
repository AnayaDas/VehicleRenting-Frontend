import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../Actions/UserAction';
import { Router } from 'react-router-dom';

const Register = (props) => {
 // const [passType, setPassType] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [panNumber, setPanNumber]= useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword]= useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [popUp, setPopUp] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch();
//   const handleLogin = async () => {

//     setTimeout(()=>{
//       setPopUp('Incorrect Username or Password');
//     },500);
//     setPassType(false);
//     setUserName('');
//     setPassword('');
//   }

//   function handleShow() {
//     console.log("Entering handleShow");
//     setPassType(!passType);

//   }
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handlePanNumber(e) {
    setPanNumber(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleConfirmPassword(e) {
    
    if(password===e.target.value){
      setPopUp(' ');
    }
    else{
      
      setPopUp('Password Doesnt match');
    }
    setConfirmPassword(e.target.value);
  }
//  function goToPhone(passedType) {
//     navigate('phone');
  //}
  function handleMobileNumber(e) {
    if(mobileNumber.length===9){
      setPopUp(' ');
    }
    else{
      
      setPopUp('Mobile Number should contain 10 digits');
    }
    setMobileNumber(e.target.value);
//     if(mobileNumber.length===10 && !isNaN(mobileNumber)){
//       const user={
//         dtype:'C',
//         pan:panNumber,
//         address:address,
//         email:email,
//         mobileNumber:mobileNumber,
//         password:password,
//         username:userName
//         //setMobileNumber(e.target.value);
//     }
//     dispatch(saveUser(user));
    
//   }
//   else{
//     setPopUp('Mobile Number should contain 10 digits');
//     setUserName(' ');
//     setPassword(' ');
//     setPanNumber(' ');
//     setAddress(' ');
//     setEmail(' ');
//     setConfirmPassword(' ');

//  }
}
  function handleRegister(e) {
    if(mobileNumber.length===9){
      const user={
        dtype:'C',
        pan:panNumber,
        address:address,
        email:email,
        mobileNumber:mobileNumber,
        password:password,
        username:userName
        //setMobileNumber(e.target.value);
    }
    dispatch(saveUser(user));
    
  }
  else{
    setPopUp('Mobile Number should contain 10 digits');
    setUserName(' ');
    setPassword(' ');
    setPanNumber(' ');
    setAddress(' ');
    setEmail(' ');
    setConfirmPassword(' ');

 }
    if (password===confirmPassword){
        const user={
            dtype:'C',
            pan:panNumber,
            address:address,
            email:email,
            mobileNumber:mobileNumber,
            password:password,
            username:userName

    }
    dispatch(saveUser(user));
    navigate('/login');
      
     }
     else{
        setPopUp('Password incorrect');
        setUserName(' ');
        setPassword(' ');
        setPanNumber(' ');
        setAddress(' ');
        setEmail(' ');
        setConfirmPassword(' ');

     }
  }



  return (
    <>

      <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{   top: '5vw', fontSize: '3vw',  borderRadius: '3vw', paddingTop: '2vw', height: '55vw' }}>
        <div className="fw-bold text-decoration-underline text-warning">Register</div>
        <form>
          <table className="table text-light table-borderless" style={{ marginTop: '2vw' }}>
            <tbody>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw', position: 'relative', right: '5vw' }} className="text-danger fw-bold" >{popUp}</td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >Username: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handleUserName} value={userName} id="userName" placeholder="Enter your full name" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >PAN Number: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handlePanNumber} value={panNumber} id="panNumber" placeholder="Enter your Pan number" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >Mobile Number: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handleMobileNumber} value={mobileNumber} id="mobileNumber" placeholder="Enter your mobile number" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >Address: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handleAddress} value={address} id="address" placeholder="Enter your address" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >Email: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handleEmail} value={email} id="email" placeholder="Enter your email" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}}>Password: </td>
                <td ><input type={"password"} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handlePassword} value={password} id="password" placeholder="Enter your password" /></td>
              </tr>
              
              {/* <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw' }} >Show Password<input onChange={handleShow} checked={passType} type="checkbox" className="form-check-input" style={{ padding: '0.5vw', marginLeft: '1vw' }} id="passType" /></td>
              </tr> */}
              
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >Confirm Password: </td>
                <td ><input type={"password"} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handleConfirmPassword} value={confirmPassword} id="confirmPassword" placeholder="Rewrite your password" /></td>
            </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" onClick={handleRegister} style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Register</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default Register;