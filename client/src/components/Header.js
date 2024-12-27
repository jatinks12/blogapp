import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,AppBar,Toolbar,Button,Typography,Tabs,Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { authActions } from '../redux/store';
const Header = () => {
  // global state
  const isLogin = useSelector(state => state.isLogin);
  const dispatch=useDispatch();
  const Navigate =useNavigate();
 
  // state
  const[value,setValue]=useState();

  //logout
  const handlelogout=()=>{
    try{
      dispatch(authActions.logout())
      alert('Logout Successfully')
      Navigate('/login')
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <AppBar position='sticky'>
       <Toolbar>
          <Typography variant='h4'>
            My Blog App
          </Typography>
          {isLogin && (
          <Box display={'flex'} marginLeft="auto" marginRight={'auto'}>
          <Tabs textColor="inherit" value={value} onChange={(e,val) => setValue(val)}>
           <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
           <Tab label="My Blogs" LinkComponent={Link} to="/my-Blogs" />
          </Tabs>
          </Box>
          )} 
          <Box display={'flex'} marginLeft="auto">
          {!isLogin &&(<>
            <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/login"> Login</Button>
            <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/register"> Register</Button>
          </>)}
            {isLogin && (
              <Button onClick={handlelogout} sx={{margin:1,color:'white'}} > Logout</Button>
            )}
          </Box>
       </Toolbar>      
       </AppBar>
    </>
  )
}

export default Header