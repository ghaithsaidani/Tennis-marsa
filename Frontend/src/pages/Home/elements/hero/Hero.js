import React from 'react';
import {Button, Grid, Link, Stack, Typography} from "@mui/material";


const Hero = () => {
    return (

        <Grid container className={"justify-center"}>
            <Grid item xs={10} md={8} >
                <Stack className={"justify-end py-56 items-center min-h-screen text-center"} spacing={5}>
                    <Typography className={"text-white"} variant={"h2"}>Tennis Club de l'A.S de la Marsa</Typography>
                    <Button  variant={"outlined"} color={"secondary"}>
                        <Link sx={{color:"white",textDecoration:"none"}} href="https://goo.gl/maps/Hrq5oYLM97o" target="_blank">visitez nous virtuellement</Link>
                    </Button>
                </Stack>
            </Grid>
        </Grid>

    );
};

export default Hero;
