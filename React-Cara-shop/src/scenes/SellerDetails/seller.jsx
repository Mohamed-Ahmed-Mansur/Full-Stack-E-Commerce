import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Avatar,
  Grid,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from '@mui/icons-material/Delete';
import ContactsIcon from "@mui/icons-material/Contacts";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { SnackbarProvider, useSnackbar } from 'notistack';
const Seller = () => {
  const location = useLocation();
  const [sellerData, setSellerData] = useState(null);
const cookies = new Cookies();
const JWT = cookies.get('x-auth-token');
const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  if (location.state && location.state.data) {
    setSellerData(location.state.data);
    console.log(location.state.data);
    console.log(location.state.data.userID);
  }
}, [location.state]);

const updateseller = async (userID,variant) => {
  console.log(userID)
  try {
    if (!userID) {
      console.error('seller ID not found');
      return;
    }
    
    if (JWT) {
      const header = {
        headers: {
          'x-auth-token': JWT,
        },
      };
      console.log(JWT)

      const response = await axios.patch(`http://localhost:3001/user/${userID}`, {
        admit: true,
     
    }, header);

      console.log('User updated successfully:', response.data);
      enqueueSnackbar('This is a success message!', { variant });
    } else {
      console.error('JWT token not found');
    }
  } catch (error) {
    console.error('Error updating user:', error);
    // Handle the error appropriately
  }
};
  
const deleteseller = async (userID,variant)=>{
  console.log(userID)
    try {
      if (!userID) {
        console.error('seller ID not found');
        return;
      }
      
      if (JWT) {
        const header = {
          headers: {
            'x-auth-token': JWT,
          },
        };
  console.log(JWT)
  console.log(header)
        const response = await axios.delete(`http://localhost:3001/user/${userID}`, header);
  
        console.log('seller deleted successfully:', response.data);
        enqueueSnackbar('This is a success message!', { variant });

      } else {
        console.error('JWT token not found');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle the error appropriately
    }
  }

  return (
    <Container fixed sx={{ marginTop: "4%", marginBottom: "20px" }}>
      <Typography variant="h4" gutterBottom></Typography>
      {sellerData && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <Avatar
                  src={sellerData.image}
                  alt="Seller Image"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "5px" }}
                >
                  {sellerData.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      &nbsp; &nbsp;
                      <strong>Identification</strong>
                    </TableCell>
                    <TableCell>{sellerData.id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <MailOutlineIcon /> &nbsp; &nbsp;
                      <strong>Email</strong>
                    </TableCell>
                    <TableCell>{sellerData.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <LocalPhoneIcon /> &nbsp; &nbsp;
                      <strong>Phone</strong>
                    </TableCell>
                    <TableCell>{sellerData.phone}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <ContactsIcon /> &nbsp; &nbsp;
                      <strong>Address</strong>
                    </TableCell>
                    <TableCell>{sellerData.address}</TableCell>
                  </TableRow>
                </TableBody>
            
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end',  alignItems:"flex-end", marginTop:'4px'}}>
            <Button variant="contained" onClick={() => updateseller(sellerData.userID,'success')} startIcon={<DoneOutlineIcon/>}>Admit</Button>

                <Button variant="contained" onClick={()=>deleteseller(sellerData.userID,'success')}  startIcon={<DeleteIcon />}>
  Delete
</Button>             </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Seller;
