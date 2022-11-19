import React from 'react';
import {Grid, Stack} from "@mui/material";
import './Home.scss'

import {AboutUs, Footer, Header, Hero, Partners} from "./elements";
import {GeneralStyle} from "../../assets/scss";




function Home() {

    return (
        <Stack spacing={8}>
            <Grid container className={GeneralStyle.first}>
                <Header/>
                <Hero/>
            </Grid>
            <AboutUs/>
            <Partners/>
            <Footer/>
        </Stack>
    );
}

export default Home;