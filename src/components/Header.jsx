import React, { useState, useEffect } from 'react';
import logo from '../assest/olx_logo.png';
import './Header.css';
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import login_logo from '../assest/olx_logo.png';
import './login.css'



function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Header = () => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){

                console.log(authUser);
                setUser(authUser);
            }else{
                setUser(null);
            }
        })

        return ()=> {
            unsubscribe();
        }
    }, [user, username]);

    const signUp = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
           return authUser.user.updateProfile({
                displayName: username,
            })
        })
        .catch((error)=> alert(error.message))
        
        setOpen(false);
    }

    const signIn = (event) =>{
        event.preventDefault();
        
        auth.signInWithEmailAndPassword(email , password)
        .catch((error)=> alert(error.message));

        setOpenSignIn(false);
    }

    return (
        <div className="header">



            <Modal
                className="modal_login"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>


                    <div className="login">

                        <form>
                        <img className="login__logo" src={login_logo} alt=" " />
                        <p>Help make OLX safer place to buy and sell</p>

                        <br />
                        <input className="login__input" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className="login__input" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="login__input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <center>
                            <button type="submit" className="login__btnSingup" onClick={signUp}>Sign Up</button>
                        </center>
                        </form>
                        <hr />
                        <br />
                        <button className="login_btnConnect">Continue with phone</button>
                        <br />
                        <button className="login_btnConnect">Continue with facebook</button>
                        <p>We won't share your personal details with anyone</p>
                    </div>

                </div>
            </Modal>

            <Modal
                className="modal_login"
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
            >
                <div style={modalStyle} className={classes.paper}>


                    <div className="login">

                        <form>
                        <img className="login__logo" src={login_logo} alt=" " />
                        <p>Help make OLX safer place to buy and sell</p>

                        <br />
                        <input className="login__input" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="login__input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <center>
                            <button type="submit" className="login__btnSingup" onClick={signUp}>LOGIN</button>
                        </center>
                        </form>
                        <hr />
                        <br />
                        <button className="login_btnConnect">Continue with phone</button>
                        <br />
                        <button className="login_btnConnect">Continue with facebook</button>
                        <p>We won't share your personal details with anyone</p>
                    </div>

                </div>
            </Modal>



            <div className="header__logo">
                <Link to="/"> <img src={logo} alt="app" /></Link>
            </div>

            <div className="header__location">
                <input className="header__location_input" type='text' placeholder="Pakistan" />
                <button className="header__location_btn">exp</button>
            </div>

            <input className="header__search_input" type='search' placeholder='Find car mobile phones and more ... ' />
            <button className="header__search_btn">exp</button>

            <div className="header__login_btn">
            {user ? (
                <button onClick={() => auth.signOut()}>LOGOUT</button>
            ):(
                <div className="app__loginContainer">
                <button onClick={() => setOpenSignIn(true)}>LOGIN</button>
                <button onClick={() => setOpen(true)}>Sign Up</button>
                </div>
            )}
                
                </div>
            
            <div className="header__sell">
             
                    <Link to="/createadd"><button className="btn__sale">+ SELL</button></Link>
             
                </div>


        </div>
    )
}


export default Header;