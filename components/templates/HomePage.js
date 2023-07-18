import React from 'react'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'
import Header from '../modules/Header'
import Sidebar from '../modules/Sidebar'
import SidebarIcon from '../modules/SidebarIcon'

function HomePage() {
  return (
    <div>
        <Container maxWidth={'lg'} sx={{height:"100vh"}}>
          {/* <Header /> */}
          {/* <Sidebar /> */}
          <SidebarIcon />
          {/* <Grid container>
            <Grid item direction={'column'} sx={{height:"100vh"}}><h1>CRM project</h1> </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{height:"50vh"}}> subject 1 </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{height:"50vh"}}> subject 2 </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{height:"50vh"}}> subject 3 </Grid>
          </Grid> */}
        </Container>
    </div>
  )
}

export default HomePage