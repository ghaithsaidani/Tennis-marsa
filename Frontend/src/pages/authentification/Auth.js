import React from 'react';
import {
    Button,
    Grid,
    Stack, Tab,
    Typography
} from "@mui/material";
import {GeneralStyle} from "../../assets/scss";
import TabContext from '@mui/lab/TabContext';
import {TabList} from "@mui/lab";
import {LoginBg} from "../../assets/images";
import Log from './login/Login'
import Register from "./register/Register";



const Auth = () => {
    const [value, setValue] = React.useState('1');

    const handletabChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid justifyContent={"center"} alignItems={"center"} container direction={"row"} height={"100vh"} paddingX={3} >
            <Grid item xs={12} md={6}>
                <Stack textAlign={{xs:"center",md:"left"}} justifyContent={"center"} height={"100%"} spacing={5} alignItems={"center"}>
                    <Typography marginTop={{xs: 5,md:0}} width={"fit-content"} variant={"h2"} color={"#404040"} textTransform={"capitalize"}>connecter avec nous <br/> et devient un champion</Typography>
                    <Button variant={"text"}>Enregistrez ici</Button>
                </Stack>
            </Grid>
            <img src={LoginBg} className={GeneralStyle.background_img} alt={"Login Background"}/>
            <Grid item xs={12} md={6}>
                <Stack height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <TabContext value={value}>
                        <Stack position={"relative"} height={{md:"100vh",xs:'100%'}} paddingY={{xs:2,md:20}} justifyContent={"space-between"}>
                            <TabList value={value} sx={{ml:{xs:"auto"},mr:{xs:"auto",md:0}}}  onChange={handletabChange} aria-label="lab API tabs example" >
                                <Tab label="Sign In" value="1" />
                                <Tab label="Register" value="2" />
                            </TabList>
                            <Stack justifyContent={"center"} alignItems={"center"}>
                                <Log/>
                                <Register/>
                            </Stack>
                        </Stack>
                    </TabContext>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Auth;
