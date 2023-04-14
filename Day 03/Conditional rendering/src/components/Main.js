import { useState } from 'react';

const GuestUser = () => {
    return <h3> Hi, i am Guest User </h3>
}

const LoggedInUser = () => {
    return <h3> Hi, i am Logged in user </h3>
}

export default function Main() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleClick() {
        setIsLoggedIn(!isLoggedIn);
    }


    function dataToRender() {
        if (isLoggedIn) {
            return <LoggedInUser />
        }
        else {
            return <GuestUser />
        }
    }
    return (
        <div className='main'>

            {/* if isloggedIn is true then logout will execute if isLoggedIn is false then it will execute Login  */}
              <h2> 1st conditional rendering using Ternary</h2> 
            <button onClick={handleClick}>
                {isLoggedIn ? 'log out ' : 'Log in'}
            </button>
            {isLoggedIn ? <LoggedInUser/>: <GuestUser/>} 




            --------------------------------
            <h2>2nd  conditional rendering using If Else</h2>
            {/* // we can not write logic of if ese in jsx  */}
            {dataToRender()}




            -------------------------------------------------
            <h2> 3rd  using logical &&  operator  </h2>
            {/* if first conditions true then whatever code will be written it will execute  */}
            {/* if first conditions false then whatever code will be written it will not execute  */}
            {isLoggedIn && <LoggedInUser />}





            {/* ============================================ */}
            {/* <h5> 4th using switch case </h5> as assignment  */}


        </div>
    )
}