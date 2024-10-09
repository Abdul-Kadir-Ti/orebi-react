import React, { useState } from 'react'
import Container from '../layer/Container'
import { GoEyeClosed } from 'react-icons/go';
import { IoEye } from 'react-icons/io5';

const SignUp = () => {

let Division = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh" , "Sylhet"]

const District = [
  "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur",
  "Chattogram", "Chuadanga", "Cox's Bazar", "Cumilla", "Dhaka", "Dinajpur", "Faridpur",
  "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore", "Jhalokathi",
  "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia",
  "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar",
  "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore",
  "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Pirojpur",
  "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur",
  "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
];

let [eye , setEye] = useState(true)
let [eye2 , setEye2] = useState(true)

let [firstName, setFirstName] = useState()
let [firstNameError, setFirstNameError] = useState()

let [lastName, setLastName] = useState()
let [lastNameError, setLastNameError] = useState()

let [email, setEmail] = useState()
let [emailError, setEmailError] = useState()

let [phone , setPhone] = useState()
let [phoneError, setPhoneError] = useState()

let [address, setAddress] = useState()
let [addressError, setAddressError] = useState()

let [address2, setAddress2] = useState()
let [address2Error, setAddress2Error] = useState()

let [city, setCity] = useState()
let [cityError, setCityError] = useState()

let [postCode, setPostCode] = useState()
let [codeError, setCodeError] = useState()

let [country, setCountry] = useState()
let [countryError, setCountryError] = useState()

let [password, setPassword] = useState()
let [passwordError, setPasswordError] = useState()

let [rePassword, setRePassword] = useState()
let [rePasswordError, setRePasswordError] = useState()

let manageFristName = (e) => {
  let fName = e.target.value
  setFirstName(fName)
  setFirstNameError("")
  
}
let manageLastName = (e) => {
  let lName = e.target.value
  setLastName(lName)
  setLastNameError("")
  
}

let manageEmail = (e) => {
  let email = e.target.value
  setEmail(email)
  setEmailError("")
}

let managePhone = (e) => {
  let phone = e.target.value
  setPhone(phone)
  setPhoneError("")
}

let manageAddress = (e) => {
  let address = e.target.value
  setAddress(address)
  setAddressError("")
}

let manageAddress2 = (e) => {
  let address2 = e.target.value
  setAddress2(address2)
  setAddress2Error("")
}

let manageCity = (e) => {
  let city = e.target.value
  setCity(city)
  setCityError("")
}

let managePostCode = (e) => {
  let postCode = e.target.value
  setPostCode(postCode)
  setCodeError("")
}

let manageCountry = (e) => {
  let country = e.target.value
  setCountry(country)
  setCountryError("")
}

let managePassword = (e) => {
  let password = e.target.value
  setPassword(password)
  setPasswordError("")
}

let manageRepassword = (e) => {
  let repassword = e.target.value
  setRePassword(repassword)
  setRePasswordError("")
}

let manageSubmit = () => {
  if (!firstName) {
    setFirstNameError("Frist name is required")
  }
  if (!lastName) {
    setLastNameError("Last name is required")
  }
  if (!email) {
    setEmailError("Email is required")
  }
  if (!phone) {
    setPhoneError("Phone number is required")
  }
  if (!address) {
    setAddressError("Address is required")
  }
  if (!address2) {
    setAddress2Error("Address 2 is required")
  }
  if (!city) {
    setCityError ("City is required")
  }
  if (!postCode) {
    setCodeError ("Code is required")
  }
  if (!country) {
    setCountryError ("Country is required")
  }
  if (!password) {
    setPasswordError ("Password is required")
  }
  if(!rePassword) {
    setRePasswordError ("Re-Password is required")
  }
  else if (password !== rePassword) {
    setRePasswordError ("Password didn't match")
  }
  
}






  return (
    <div>
        <Container>
            <div>
                <h1 className='font-DM font-bold text-5xl text-[#262626] capitalize'>
                    {window.location.pathname.split("/") [1]} {window.location.pathname.split("/")[2]}
                </h1>
                <p>Home - {window.location.pathname.split("/")[1]} {window.location.pathname.split("/")[2]}</p>
            </div>
            <div className='pt-32 pb-16 border-b border-[#E5E5E5]'>
              <p className='font-DM text-base text-[#767676] max-w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            {/* form */}
            <div className='pt-[57px] flex flex-wrap gap-x-10 gap-y-6'>
              <h1 className='font-DM font-bold text-[39px] text-[#262626] pb-11 w-full'>Your Personal Details</h1>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">First Name</label>
                <input onChange={manageFristName} value={firstName} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="text" placeholder='First Name' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {firstNameError} </p>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Last Name</label>
                <input onChange={manageLastName} value={lastName} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="text" placeholder='Last Name' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {lastNameError} </p>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Email address</label>
                <input onChange={manageEmail} value={email} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="email" placeholder='company@domain.com' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {emailError} </p>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Telephone</label>
                <input onChange={managePhone} value={phone} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="number" placeholder='Your phone number' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {phoneError} </p>
              </div>
            </div>

          
            {/* form */}
            <div className='pt-[57px] flex flex-wrap gap-x-10 gap-y-6 border-b border-[#E5E5E5] pb-[69px]'>
              <h1 className='font-DM font-bold text-[39px] text-[#262626] pb-11 w-full'>New Customer</h1>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Address 1</label>
                <input onChange={manageAddress} value={address} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="text" placeholder='4279 Zboncak Port Suite 6212' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {addressError} </p>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Address 2</label>
                <input onChange={manageAddress2} value={address2} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="text" placeholder='__' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {address2Error} </p>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">City</label>
                <input onChange={manageCity} value={city} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="email" placeholder='Your city' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {cityError} </p>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Post Code</label>
                <input onChange={managePostCode} value={postCode} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="text" placeholder='7200' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {codeError} </p>
              </div>
              {/* <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Country</label>
                <input onChange={manageCountry} value={country} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type="text" placeholder='Your country' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {countryError} </p>
              </div> */}
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Division</label>
                <select  className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' name="" id="">
                  <option  value="Please Select">Please Select</option>

                  {
                    // Division.map((d) => <option value={d}>{d}</option>)
                    Division.map((d , i) => (
                      <option key={i} value="Please Select">{d}</option>
                    ))
                  }

                </select>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">District</label>
                <select className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' name="" id="">
                  <option value="Please Select">Please Select</option>
                  {
                     District.map((dis , i) => (
                      <option key={i} value="Please Select">{dis}</option>
                     ))
                  }
                </select>
              </div>
            </div>
            <h1 className='font-DM font-bold text-[39px] text-[#262626] w-full pt-[57px] pb-[42px]'>Your Password</h1>
            <div className='flex flex-wrap gap-x-10 gap-y-6 '>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Password</label>
                <input onChange={managePassword} value={password} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type={eye ? "password" : "text"} placeholder='Password' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {passwordError} </p>
                <GoEyeClosed onClick={()=> setEye (!eye)} className={`absolute right-5 bottom-4 cursor-pointer ${eye ? "opacity-100 " : "opacity-0"}`}/>
                <IoEye onClick={()=> setEye (!eye)} className={`absolute right-5 bottom-4 cursor-pointer ${eye ? "opacity-0 " : "opacity-100"}`}/>
              </div>
              <div className='w-[508px] relative'>
                <label className='font-DM font-bold text-base text-[#262626]' htmlFor="">Repeat Password</label>
                <input onChange={manageRepassword} value={rePassword} className='w-full border-b border-[#E5E5E5] text-[#767676] pb-4 pt-2.5 outline-none' type={eye2 ? "password" : "text"} placeholder='Repeat Password' />
                <p className='text-red-500 absolute top-full left-0 text-sm'> {rePasswordError} </p>
                <GoEyeClosed onClick={()=> setEye2 (!eye2)} className={`absolute right-5 bottom-4 cursor-pointer ${eye2 ? "opacity-100 " : "opacity-0"}`}/>
                <IoEye onClick={()=> setEye2 (!eye2)} className={`absolute right-5 bottom-4 cursor-pointer ${eye2 ? "opacity-0 " : "opacity-100"}`}/>
              </div>
            </div>
            <div className='pt-16 pb-6'>
             <div className='flex gap-x-4 relative'>
             <input type="checkbox" />
              <label className='font-DM text-sm text-[#767676]' htmlFor="">I have read and agree to the Privacy Policy</label>
              {/* <p className='text-red-500 absolute top-full left-0 text-sm'> {"checkError"} </p> */}
             </div>
              <div className='flex gap-x-8 pt-6'>
                <h2 className='font-DM text-sm text-[#767676]'>Subscribe Newsletter</h2>
                <div className='flex gap-x-10'>
                  <div className='flex gap-x-4 '>
                  <input name='A' type="checkbox" />
                  <label className='font-DM text-sm text-[#767676]' name="A" htmlFor="">Yes</label>
                  </div>
                  <div className='flex gap-x-4 '>
                  <input name='A' type="checkbox" />
                  <label className='font-DM text-sm text-[#767676]' name="A" htmlFor="">No</label>
                  </div>
                </div>
              </div>
            </div>
            {/* button */}
              {/* button */}
              <button onClick={manageSubmit} className='mt-5 py-4 px-20 bg-black text-white text-sm font-DM font-bold hover:bg-[#262626]'>Log in</button>
                
        </Container>
    </div>
  )
}

export default SignUp