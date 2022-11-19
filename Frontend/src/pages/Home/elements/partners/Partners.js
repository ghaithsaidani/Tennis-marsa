import React from 'react';
import {Grid, Typography} from "@mui/material";
import {Debrigum, Hyundai, Sancella, Whirlpool} from "../../../../assets/images";

const Partners = () => {
    const partners=[
        {
            name:'Hyundai',
            src:Hyundai,
            link:'https://www.hyundai.com.tn/'
        },
        {
            name:'Sancella',
            src:Sancella,
            link:'http://www.sancella.com.tn/'
        },
        {
            name:'Debrigum',
            src:Debrigum,
            link:'http://derbigum-africa.com/'
        },
        {
            name:'Whirlpool',
            src:Whirlpool,
            link:'https://www.facebook.com/Whirlpool.Tunisie/'
        }
    ].map((partner)=>(
        <Grid md={3} xs={6} key={partner.name} item>
            <a href={partner.link} target="_blank">
                <img  src={partner.src} alt={partner.name}/>
            </a>
        </Grid>

    ))


    return (
        <Grid container className={"justify-center"} paddingY={5}>
            <Grid item xs={12}>
                <Typography variant={'h3'}>nos partenaires</Typography>
            </Grid>
            <Grid paddingX={{md:20,xs:10}} rowGap={2} columnSpacing={5} direction={"row"} container alignItems={"center"}>
                {partners}
            </Grid>
        </Grid>
    );
};

export default Partners;
