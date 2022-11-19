import React from 'react';
import {Link, Typography} from "@mui/material";
import styles from '../../../assets/scss/CssModules.module.scss';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const MyLink = (props) => {
    return (
        <Link href={"#"} color={"white"} underline={"none"} className={styles.link}><Typography variant={"h4"}>{props.text}</Typography></Link>
    );
};

export default MyLink;
