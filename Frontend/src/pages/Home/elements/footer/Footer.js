import React from 'react';
import {Divider, Grid, Link, Stack, Typography} from "@mui/material";
import {GeneralStyle} from "../../../../assets/scss";
import {
    Facebook,
    Instagram,
    LocationOn,
    MailRounded,
    PhoneRounded,
    Twitter
} from "@mui/icons-material";

const Footer = () => {
    const socialMedias = [
        {
            icon: <Facebook className={"hover:text-blue-700"}/>,
            href:'https://www.facebook.com/profile.php?id=100063543944416',
        },
        {
            icon: <Instagram className={"hover:text-pink-500"}/>,
            href:'https://www.instagram.com/a.s.marsatennis/'
        },
        {
            icon: <Twitter className={"hover:text-blue-500"}/>,
            href:'https://twitter.com/TClub_AvSpMarsa'
        }
    ].map((social, index) => (
        <Stack key={index} className={"cursor-pointer"}>
            <Link sx={{color:"white"}} target="_blank" href={social.href} >
                {social.icon}
            </Link>
        </Stack>
    ))
    return (
        <Grid container paddingX={{xs: '5%', lg: '10%'}} rowGap={10} columnGap={{sm: 20, lg: 50, xl: 70}}
              className={`${GeneralStyle.footer} pt-10 pb-5 justify-center`}>
            <Divider className={"min-w-full"} color={"white"}/>
            <Stack width={{md: "100%"}} paddingX={{md: "5%"}} direction={{xs: 'column', md: 'row'}}
                   justifyContent={"space-between"} alignItems={"center"} spacing={{xs: 5}}>
                <Grid item>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.8281280788524!2d10.31409575112326!3d36.87053257133809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b4e80baaa93b%3A0xd45fd1c8570c1b05!2sTennis%20Club%20de%20l&#39;Avenir%20Sportif%20de%20la%20Marsa!5e0!3m2!1sfr!2stn!4v1668382770144!5m2!1sfr!2stn"
                        width="400" height="300" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
                <Grid item height={"100%"}>
                    <Stack className={"text-white"} height={"100%"} spacing={5}  direction={"column"} justifyContent={"space-around"}>
                        <Typography variant={"h5"} className={"text-center"}>Contact</Typography>
                        <Stack direction={"column"} rowGap={3}>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={2}>
                                <LocationOn/>
                                <p>V8C8+6G7, Site archéologique de Carthage</p>
                            </Stack>
                            <Stack direction={"row"} justifyContent={"space-between"}>
                                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                    <PhoneRounded/>
                                    <p>26 128 600</p>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                    <MailRounded/>
                                    <p>contact@tcasm.tn</p>
                                </Stack>
                            </Stack>
                            <Stack direction={"row"} justifyContent={{xs: 'space-around', md: "space-between"}} alignItems={"center"}>
                                <Typography variant={"h6"}>Reseaux Sociaux</Typography>
                                <Stack direction={"row"} spacing={2}>
                                    {socialMedias}
                                </Stack>
                            </Stack>
                        </Stack>

                    </Stack>
                </Grid>
            </Stack>
            <Stack width={"100%"} textAlign={"end"} spacing={1}>
                <Divider className={"min-w-full"} color={"white"}/>
                <Typography variant={"h6"} className={"text-white"} textAlign={"end"}>CopyRight</Typography>
            </Stack>


        </Grid>
    );
};

export default Footer;
