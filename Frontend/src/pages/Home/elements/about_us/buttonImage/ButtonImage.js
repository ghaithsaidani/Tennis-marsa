import React from 'react';
import {Button, Link, Stack} from "@mui/material";
import {GeneralStyle} from "../../../../../assets/scss";

const ButtonImage = (props) => {
    return (
        <Stack width={{xs:'70%',lg:'100%'}} className={GeneralStyle.championImage}>
            <img

                src={props.src}
                alt={props.name}
                loading="lazy"
            />
            <Button variant={"outlined"} color={"secondary"}>
                <Link target="_blank" href={props.href}>{props.name}</Link>
            </Button>
        </Stack>
    );
};

export default ButtonImage;
