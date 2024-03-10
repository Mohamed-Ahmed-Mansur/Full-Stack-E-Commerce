import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MdCloudUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setSignUpEmail } from '../../Redux/Slice/Email';

const Section = styled.section`
  background: #fffcfc;
  margin: 100px;
`;

const Container = styled.div`
  height: 100%;
`;

const Card = styled.div`
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  // height:100%;
  width: 100%;
`;

const Form = styled.form`
  padding: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-row;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const InputIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const FormOutline = styled.div`
  flex-fill: 1;
  margin-bottom: 0;
  .form-control {
    border: 1px solid black;
  }
`;

const RegisterButton = styled.button`
  height: 3.125rem;
  margin-top: 20px;
  background-color: #088178;
  color: #fff;
  white-space: nowrap;
  border-radius: 2px;
  padding: 10px 30px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: #065c68;
  }
`;

const Upload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #1475cf;
  width: 70%;
  height: 300px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const SignUpSeller = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');

  const [DataSeller, setDataSeller] = useState({
    address: '',
    phone: '',
    name: '',
    email: '',
    password: '',
  });
  const [restDataSeller, setRestDataSeller] = useState({
    restPassword: '',
    imageID: '',
  });

  const fileInputRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setRestDataSeller((prev) => ({ ...prev, imageID: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('data seller submitted:', DataSeller);
    console.log('data seller submitted:', restDataSeller);

    setDataSeller({
      address: '',
      phone: '',
      name: '',
      email: '',
      password: '',
    });

    setRestDataSeller({
      restPassword: '',
      imageID: '',
    });
  };
  const navigate = useNavigate();

  const handleRegister = async () => {
    axios
      .post('http://localhost:3001/user/reg', {
        ...DataSeller,
        isAdmin: false,
        isSeller: true,
        isUser: false,
        wishlist: [],
        checkout: [],
        cart: [],
        recent: [],
        admit: false,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === 'Created successfully please verifiy your account') {
          dispatch(setSignUpEmail(DataSeller.email));
          toast.success(response.data.message);
          navigate('/user/reg');
        } else alert(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          // The server responded with a status code outside the range of 2xx
          console.error('Server Error:', error.response.data);
          console.error('Status Code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received from the server.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z]{4,}$/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const phoneRegex =  /^(010|012|011)\d{8}$/;

  // Functions to handle input changes and validations
  const handleNameChange = (e) => {
    const value = e.target.value;
    setDataSeller((prev) => ({ ...prev, name: value }));
    if (!nameRegex.test(value)) {
      setNameError('Name must be at least 4 characters long and only contain letters.');

    }else{
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setDataSeller((prev) => ({ ...prev, email: value }));
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setDataSeller((prev) => ({ ...prev, password: value }));
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
    } else {
      setPasswordError('');
    }
  };

  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;
    setRestDataSeller((prev) => ({ ...prev, restPassword: value }));
    if (value !== DataSeller.password) {
      setRepeatPasswordError('Passwords do not match.');
    } else {
      setRepeatPasswordError('');
    }
  };
  
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setDataSeller((prev) => ({ ...prev, phone: value }));
    if (!phoneRegex.test(value)) {
      setPhoneError('Please enter a valid 11-digit phone number.');
    } else {
      setPhoneError('');
    }
  };
  
  const handleAddressChange = (e) => {
    const value = e.target.value;
    setDataSeller((prev) => ({ ...prev, address: value }));
    if (value.trim() === '') {
      setAddressError('Address is required.');
    } else {
      setAddressError('');
    }
  };

  return (

    <Section className="Signup">

      <Container className="container ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-lg-12 col-xl-11">
            <Card className="card text-black">
              <div className="card-body p-md-1">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-4">Sign up</p>
                    <Form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <InputWrapper className="d-flex flex-row align-items-center">
                        <InputIcon className="fas fa-user fa-lg me-3 fa-fw"></InputIcon>
                        <FormOutline className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            required
                            placeholder='Enter your Name'
                            value={DataSeller.name}
                            onChange={handleNameChange}
                          />
                            {nameError && <span className="text-danger" >{nameError}</span>}
                        </FormOutline>
                      </InputWrapper>
                      <InputWrapper className="d-flex flex-row align-items-center mb-4">
                        <InputIcon className="fas fa-envelope fa-lg me-3 fa-fw"></InputIcon>
                        <FormOutline className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            required
                            placeholder='Enter your Email'

                            value={DataSeller.email}
                            onChange={handleEmailChange}
                          />
{emailError&&<span className="text-danger" >{emailError}</span>}
                        </FormOutline>
                      </InputWrapper>

                      <InputWrapper className="d-flex flex-row align-items-center mb-4">
                        <InputIcon className="fas fa-lock fa-lg me-3 fa-fw"></InputIcon>
                        <FormOutline className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            required
                            placeholder='Enter your password'

                            value={DataSeller.password}
                            onChange={handlePasswordChange}

                          />
                          {passwordError&&<span className="text-danger" >{passwordError}</span>}
                        </FormOutline>
                      </InputWrapper>

                      <InputWrapper className="d-flex flex-row align-items-center mb-4">
                        <InputIcon className="fas fa-key fa-lg me-3 fa-fw"></InputIcon>
                        <FormOutline className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">
                            Repeat your password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd"
                            className={`form-control`}
                            placeholder='Enter your password'

                            required
                            value={restDataSeller.restPassword}
                            onChange={handleRepeatPasswordChange}
                          />
                          {repeatPasswordError&&<span className="text-danger" >{repeatPasswordError}</span> }
                        </FormOutline>
                      </InputWrapper>

                      <InputWrapper className="d-flex flex-row align-items-center mb-4">
                        <InputIcon className="fas fa-phone fa-lg me-3 fa-fw"></InputIcon>
                        <FormOutline className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4">
                            Phone
                          </label>
                          <input
                            type="text"
                            id="form3Example4"
                            className="form-control"
                            required
                            value={DataSeller.phone}
                            placeholder='Enter your phone'
                            onChange={handlePhoneChange}
                          />
                         {phoneError&&<span className="text-danger" >{phoneError}</span> }

                        </FormOutline>
                      </InputWrapper>

                      <InputWrapper className="d-flex flex-row align-items-center mb-4">
                        <InputIcon className=" fa-lg me-3 fa-fw">
                          <i class="fa fa-address-card" aria-hidden="true"></i>
                        </InputIcon>

                        <FormOutline className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example">
                            Address
                          </label>
                          <input
                            type="text"
                            id="form3Example"
                            className="form-control"
                            required
                            value={DataSeller.address}
                            placeholder='Enter your Address'

                            onChange={handleAddressChange}
                          />
             {addressError&&<span className="text-danger" >{addressError}</span> }

                        </FormOutline>
                      </InputWrapper>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <RegisterButton type="submit" className="btn nav-link btn-lg" onClick={handleRegister}>
                          Register
                        </RegisterButton>
                      </div>
                    </Form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <Upload className="mb-2 ">
                      {restDataSeller.imageID ? (
                        <img src={URL.createObjectURL(restDataSeller.imageID)} style={{ width: '100%', height: '100%' }} alt="Selected" />
                      ) : (
                        <>
                          <MdCloudUpload color="#1475cf" size={50}></MdCloudUpload>
                          <p> upload Image ID</p>
                        </>
                      )}
                      <HiddenInput
                        type="file"
                        accept="image/*"
                        id="ImageID"
                        name="ImageID"
                        onChange={handleImage}
                        ref={fileInputRef}
                        required
                      />
                    </Upload>

                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SignUpSeller;
