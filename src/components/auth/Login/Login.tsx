import { useEffect, useState } from 'react'
import "./Login.scss"
import Logo from "../../../assets/images/ebayLogo.png"
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    const handleRegister = (e: any) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('user-data') || '[]');
        console.log(userData)

        if (!userData.includes(username)) {
            const newUser = { password, username, userToken };
            userData.push(newUser);
            localStorage.setItem('user-data', JSON.stringify(userData))
            console.log(userData[0].userToken)
            navigate('/')
        } else {
            alert('User already exists')
            console.log(userData)
            // navigate('/')
        }
    }
    useEffect(() => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                expiresInMins: 90,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Failed to sign up');
                }
            })
            .then(data => {
                setUserToken(data.token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <div className='register'>
            <div className='register__wrapper'>
                <div className='register__header'>
                    <img src={Logo} alt="" />
                    <div className='register__text'>
                        <NavLink to="/login">Tell us what you think</NavLink>
                    </div>
                </div>
                <div className='register__form'>
                    <div className='register__title'>
                        <h1>Hello</h1>
                        <div>
                            <p>Sign in to eBay or </p>
                            <NavLink to="/register">create an account</NavLink>
                        </div>
                    </div>
                    <form className='input-form' onSubmit={handleRegister}>
                        <input className='input' type="text" placeholder='Your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className='input' type="password" placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className='login-btn'>Continue</button>
                    </form>
                </div>
                <div className="register__footer">
                    <strong>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</strong>
                    <ul>
                        <li>Accessibility,</li>
                        <li>User Agreement,</li>
                        <li>Privacy,</li>
                        <li>Payments Terms of Use,</li>
                        <li>Cookies,</li>
                        <li>Your Privacy Choices</li>
                        <li>and AdChoice</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login