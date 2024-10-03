// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types'; // Import prop-types
// import styles from './Login.module.css';
// import axios from 'axios';

// function Login({ setIsLoggedIn }) {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted with data:", data); // Log the data

//     try {
//       const url = `${import.meta.env.VITE_BASE_URL}/api/v1/auth`;
//       const { data: res } = await axios.post(url, data);
//       console.log("Response received:", res); // Log the response
//       localStorage.setItem("token", res.data); // Make sure this is the correct data structure
//       setIsLoggedIn(true); // Ensure this is called after successful login
//       navigate("/user");
//     } catch (error) {
//       console.log("Error occurred:", error); // Log the error
//       if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <div className={styles.login_container}>
//       <div className={styles.login_form_container}>
//         <div className={styles.left}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Login to Your Account</h1>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             {error && <div className={styles.error_msg}>{error}</div>}
//             <button type="submit" className={styles.green_btn}>Sign In</button>
//           </form>
//         </div>
//         <div className={styles.right}>
//           <h1>New Here?</h1>
//           <Link to="/sign-up">
//             <button type="button" className={styles.white_btn}>Sign Up</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Add prop-types validation
// Login.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired, // Ensure setIsLoggedIn is a function and is required
// };

// export default Login;
