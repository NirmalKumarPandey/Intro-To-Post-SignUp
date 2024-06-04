import React, { useRef } from 'react'

function Signup() {
    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileInputRef = useRef();
    let profilePicInputRef = useRef();

    let onSignup = async () => {

        let myHeader = new Headers();

        let dataTosend = {
            firstName: firstInputRef.current.value,
            lastName: lastInputRef.current.value,
            age: ageInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            mobile: mobileInputRef.current.value,
            profilePic: profilePicInputRef.current.value
        }
        myHeader.append("content-type", "application/json");

        let reqOptions = {
            method: "POST",
            headers: myHeader,
            body: JSON.stringify(dataTosend),
        }
        let JSONData = await fetch("http://localhost:4567/register", reqOptions);
        let JSOData = await JSONData.json();
        alert(JSOData.msg);
        console.log(JSOData);
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input ref={firstInputRef}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input ref={lastInputRef}></input>
                </div>
                <div>
                    <label>Age</label>
                    <input ref={ageInputRef}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input ref={emailInputRef}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input ref={passwordInputRef}></input>
                </div>
                <div>
                    <label>Mobile</label>
                    <input ref={mobileInputRef}></input>
                </div>
                <div>
                    <label>Profile Pic</label>
                    <input ref={profilePicInputRef}></input>
                </div>
                <div>
                    <button type='button' onClick={() => {
                        onSignup();
                    }}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup