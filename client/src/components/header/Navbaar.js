// import React, { useContext, useEffect, useState } from 'react'
// import "./navbaar.css"
// import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
// import { NavLink } from 'react-router-dom';
// import { Logincontext } from '../context/Contextprovider';

// import { useHistory } from 'react-router';
// import { makeStyles } from '@material-ui/core';
// import { getProducts } from '../redux/actions/action';



// const usestyle = makeStyles({
//     component: {
//         marginTop: 10,
//         marginRight: "-50px",
//         width: "300px",
//         padding: 50,
//         height: "300px"
//     },
// })


// const Navbaar = () => {

//     const classes = usestyle();

//     const history = useHistory("");


//     // only for search
//    

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getProducts());
//     }, [dispatch])


//     const [open, setOpen] = useState(false);


//     


//     
//     const { account, setAccount } = useContext(Logincontext);






//     // for drawer

//   





//     return (
//         <header>
//             <nav>
//                 <div className="left">
//                     <IconButton className="hamburgur" onClick={handelopen}>
//                         <MenuIcon style={{ color: "#fff" }} />
//                     </IconButton>
//                         here define the right header
//                     <Drawer open={dropen} onClose={handleClosedr} >
//                         <Rightheader userlog={logoutuser} logclose={handleClosedr} />
//                     </Drawer>
//                     <div className="navlogo">
//                         <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" /> </NavLink>
//                     </div>
//                     <div className="nav_searchbaar">
//                         <input type="text" name=""
//                             onChange={(e) => getText(e.target.value)}
//                             placeholder="Search Your Products" />
//                         <div className="search_icon">
//                             <i className="fas fa-search" id="search"></i>
//                         </div>
//                         {
//                             text &&
//                             <List className="extrasearch" hidden={liopen}>
//                                 {
//                                     products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
//                                         <ListItem>
//                                             <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
//                                                 {product.title.longTitle}
//                                             </NavLink>
//                                         </ListItem>
//                                     ))
//                                 }
//                             </List>
//                         }
//                     </div>
//                 </div>
//                 <div className="right">
//                     <div className="nav_btn">
//                         <NavLink to="/login">Sign in</NavLink>
//                     </div>
//                     {
//                         account ? <NavLink to="/buynow">
//                             <div className="cart_btn">
//                                 <Badge badgeContent={account.carts.length} color="secondary">
//                                     <i className="fas fa-shopping-cart" id="icon"></i>
//                                 </Badge>

//                                 <p>Cart</p>
//                             </div>
//                         </NavLink> : <NavLink to="/login">
//                             <div className="cart_btn">
//                                 <Badge badgeContent={0} color="secondary">
//                                     <i className="fas fa-shopping-cart" id="icon"></i>
//                                 </Badge>
//                                 <p>Cart</p>
//                             </div>
//                         </NavLink>
//                     }

//                     {
//                         account ?
//                             <Avatar className="avtar2"
//                                 onClick={handleClick} title={account.fname.toUpperCase()}>{account.fname[0].toUpperCase()}</Avatar> :
//                             <Avatar className="avtar"
//                                 onClick={handleClick} />
//                     }

//                     <div className="menu_div">
//                         <Menu
//                             anchorEl={open}
//                             open={Boolean(open)}
//                             onClose={handleClose}
//                             className={classes.component}
//                         >
//                             <MenuItem onClick={handleClose} style={{ margin: 10 }}>My account</MenuItem>
//                             {account ? <MenuItem onClick={handleClose} style={{ margin: 10 }} onClick={logoutuser}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />   Logout</MenuItem> : ""}
//                         </Menu>
//                     </div>
//                     <ToastContainer />
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Navbaar;


// // account ? <Button id="basic-button"
// // aria-controls="basic-menu"
// // aria-haspopup="true"
// // aria-expanded={open ? 'true' : undefined}
// // onClick={handleClick}> <Avatar className="avtar2" title={account.fname.toUpperCase()}>{account.fname[0].toUpperCase()}</Avatar>  </Button> : <Button id="basic-button"
// //     aria-controls="basic-menu"
// //     aria-haspopup="true"
// //     aria-expanded={open ? 'true' : undefined}
// //     onClick={handleClick}> <Avatar className="avtar" />
// // </Button>



// my my my

import { React, useContext, useEffect, useState } from 'react';
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Rightheader from './Rightheader';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from "../context/ContextProvider";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector, useDispatch } from "react-redux";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

import { products } from '../home/productdata';

const Navbaar = () => {

    const { account, setAccount } = useContext(LoginContext);
    console.log(account);

    const history = useNavigate();

    const [anchorEl, setAnchorE1] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE1(null);
    };

    const [text, setText] = useState("");

    const [liopen, setLiopen] = useState(true);
    // const { products } = useSelector(state => state.getproductsdata);

    const [dropen, setDropen] = useState(false);

    const getdetailsvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            console.log("first login");
        } else {
            // console.log("cart add ho gya hain");
            setAccount(data);
        }
    };

    const handelopen = () => {
        setDropen(true);
    }

    const handleClosedr = () => {
        setDropen(false)
    }



    // for logout
    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        // console.log(data2);

        if (!res2.status === 201) {
            const error = new Error(res2.error);
            throw error;
        } else {
            history("/");
            setAccount(false);
            // setOpen(false)
            toast.success("user Logout 😃!", {
                position: "top-center"
            });

        }
    }

    const getText = (text) => {
        setText(text)
        setLiopen(false)
    }

    useEffect(() => {
        getdetailsvaliduser();
    },[]);

    return (
        <header>
            <nav>
                <div className="left">
                    <IconButton className="hamburgur" onClick={handelopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    {/* here define the right header */}
                    <Drawer open={dropen} onClose={handleClosedr} >
                        <Rightheader logclose={handleClosedr} Logoutuser={logoutuser} />
                    </Drawer>

                    <div className="navlogo">
                        <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" /> </NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name=""
                            onChange={(e) => getText(e.target.value)}
                            placeholder='Search your product'
                            id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>

                        {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.title.longTitle}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }


                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">Sign in</NavLink>
                    </div>
                    <div className="cart_btn">
                        {
                            account ? <NavLink to="/buynow">
                                <Badge badgeContent={account.carts.length} color="secondary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </NavLink> : <NavLink to="/buynow">
                                <Badge badgeContent={0} color="secondary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </NavLink>
                        }

                        <ToastContainer />
                       <NavLink  to="/buynow"><p>Cart</p></NavLink>
                    </div>
                    {
                        account ? <Avatar className='avtar2'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            onClick={handleClick}
                        >{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='avtar'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                onClick={handleClick}
                            ></Avatar>
                    }

                    <div className="menu_div">
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {/* <MenuItem onClick={handleClose} style={{ margin: 10 }}>Profile</MenuItem> */}
                            <MenuItem onClick={handleClose} style={{ margin: 10 }}>My account</MenuItem>
                            {/* <MenuItem onClick={handleClose} style={{ margin: 10 }}>Logout</MenuItem> */}

                            {account ? <MenuItem onClick={handleClose} onClick={logoutuser} style={{ margin: 10 }} ><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />   Logout</MenuItem> : ""}
                        </Menu>
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Navbaar;