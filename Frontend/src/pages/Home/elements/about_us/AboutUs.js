import React, {useEffect, useRef} from 'react';
import {Grid,  Stack, Typography} from "@mui/material";
import { useSelector} from "react-redux";
import {selectCollapse} from "../../../../features/collapse/collapseSlice";
import Video from '../../../../assets/videos/Clay Tennis Court.mp4'
import ButtonImage from "./buttonImage/ButtonImage";
import {Aziz, Moez} from "../../../../assets/images";

const AboutUs = () => {
    const collapsed = useSelector(selectCollapse)
    const videoRef = useRef();
    useEffect(() => {
        if (collapsed){
            videoRef.current.pause();
        }
        else {
            videoRef.current.play()
        }
    });

    const champions=[
        {
            name:"Moez Echargui",
            href:'https://www.atptour.com/en/players/moez-echargui/ea13/overview',
            src:Moez
        },
        {
            name:"Aziz Dougaz",
            href:'https://www.atptour.com/en/players/aziz-dougaz/df88/overview',
            src:Aziz
        }
    ].map((item,index) => (
            <ButtonImage
                key={index}
                src={item.src}
                href={item.href}
                name={item.name}
            />
    ))

    return (
        <Grid container rowGap={10} className={"justify-center"}>
            <Grid item xs={10} sm={8} lg={7}>
                <Stack spacing={5}>
                    <Typography variant={"h3"}>
                        a propos de nous
                    </Typography>
                    <p className={"text-center font-Overpass text-gray-500 leading-7"}>
                        A.S.M TENNIS ( le tennis club de l'avenir sportif de la marsa ) est un centre tennistique
                        exceptionnel d'abord par sa situation et son accessibilite : a l'entree de la marsa , avec un
                        parking pouvant accueillir 60 voitures , sa superficies s'etend sur 30000 M2,comprend 10 courts
                        en
                        terre battue dont un court central , un espace pour 4 mini-tennis , des vestiares un club house
                        , un
                        lounge , un espace administratif et une salle de sport . une extension du club est en cours sur
                        pres
                        de 5000 M2 avec 4 courts greenset et 2 terrains de padel pour une meilleure polyvalence du club
                        .
                        A.S.MARSA TENNIS est un atout majeur pour le tennis en tunisie .
                    </p>
                    <video ref={videoRef} className={"rounded-2xl"} autoPlay muted loop playsInline>
                        <source type="video/mp4" src={Video}/>
                    </video>
                </Stack>
            </Grid>
            <Grid item xs={10} sm={8} lg={7}>
                <Stack spacing={5}>
                    <Typography variant={"h3"}>
                        nos champions
                    </Typography>
                    <p className={"text-center font-Overpass text-gray-500 leading-7"}>
                        elu meilleur club formateur de tunisie , le travail de A.S.MARSA TENNIS est recompense par un
                        palmares dont il peut etre tres fier . Nos champions s'y preparent a longeur d'annee et le club
                        a vu emerger dans ses rangs des joueurs prometteurs qui constituent un contigent consequent de
                        l'effectif de l'equipe nationale . et v'est ainsi que l'equipe nationale de tennis s'est
                        qualifie pour la premiere fois de son histoire pour acceder au groupe I de la coupe davis, avec
                        les marsois AZIZ DOUGAZ et MOEZ ECHARGUI
                    </p>
                    <Stack direction={{lg:"row",xs:"column"}} spacing={{xs:5}} alignItems={"center"}>
                        {champions}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
