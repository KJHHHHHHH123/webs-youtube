// import React from 'react'
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import '../내가만든css/loginpage.css';

// const Loginpage = () => {
//     const dispatch = useDispatch();

//     const [Email, setEmail] = useState("");
//     const [Password, setPassword] = useState("");
    
//     const onEmailHandler = (event) => {
//         setEmail(event.currentTarget.value);
//     }

//     const onPasswordHandler = (event) => {
//         setPassword(event.currentTarget.value);
//     }

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//         let body = {
//             email : Email,
//             password : Password,
//         }
//     }

//     dispatch(loginUser(body));

//     return (
//         <>
//             <h1 className='header_logo'>
//                 <a href="/">
//                     <span>MOTIV</span>
//                 </a>
//             </h1>
//             <div style={{ 
//                 display: 'flex', justifyContent: 'center', alignItems: 'center', 
//                 width: '100%', height: '100vh'
//                 }}>
//                 <form style={{ display: 'flex', flexDirection: 'column'}}
//                 >
//                     <label>Email</label>
//                     <input type='email'/>
//                     <label>Password</label>
//                     <input type='password'/>
//                     <br />
//                     <button formAction=''>
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Loginpage
