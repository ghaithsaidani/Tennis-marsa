import React, {useEffect} from 'react';
import {
    Grid,
    IconButton,
    Slide,
    Stack,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MyLink from "../../../../theme/components/MyLink/MyLink";
import {useDispatch, useSelector} from "react-redux";
import {handleChange, selectCollapse, setFalse} from "../../../../features/collapse/collapseSlice";
import PersonIcon from '@mui/icons-material/Person';
import {FacebookOutlined} from "@mui/icons-material";
import {Logo} from "../../../../assets/images";
import {GeneralStyle} from "../../../../assets/scss";
import {Link} from "react-router-dom";

const Header = () => {
    const collapsed = useSelector(selectCollapse)
    const dispatch = useDispatch();
    const theme = useTheme();
    const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const links = [
        "acceuil",
        "reservation",
        "tarif",
        "futur partenaire"
    ].map((link, index) =>
        <MyLink text={link} key={index}/>
    )
    useEffect(() => {
        if (lgScreen) {
            if (collapsed)
                dispatch(setFalse())
        }
    });

    const navbarCollapsed = (
        <Grid container direction={"column"} rowGap={5}
              className={`bottom-0 top-0 pt-56 items-center  min-w-full fixed z-10 ${GeneralStyle.navbar}`}>
            {links}
            <Stack direction={"row"} position={"absolute"} bottom={"5%"} spacing={5} className={"items-end"}>
                <Link to="/login">
                    <IconButton
                        id="composition-button"
                        sx={{padding: 0}}
                        aria-haspopup="true"

                    >
                        <PersonIcon sx={{color: "white"}}/>
                    </IconButton>
                </Link>
                <FacebookOutlined sx={{color: "white", cursor: 'pointer'}} className={"hover:text-blue-500"}/>
            </Stack>
        </Grid>
    );


    return (
        <header className={`${collapsed ? "fixed z-20" : 'absolute'}  min-w-full`}>
            <Grid container direction={"row"} className={"py-10 justify-between  items-center"}
                  paddingX={{xs: '1%', sm: '2%', lg: '3%'}}>
                <img src={Logo} alt="Logo" className={"z-20"} width={250}/>

                {
                    lgScreen &&
                    <Stack  direction={"row"} alignItems={"center"} spacing={10}>
                        <Stack direction={"row"} gap={3}>
                            {links}
                        </Stack>
                        <Stack alignItems={"end"}>
                            <Link to="/login">
                                <IconButton
                                    id="composition-button"
                                    sx={{padding: 0}}
                                    aria-haspopup="true"

                                >
                                    <PersonIcon sx={{color: "white"}}/>
                                </IconButton>
                            </Link>

                        </Stack>
                    </Stack>
                }
                {!lgScreen && <Stack className={"cursor-pointer"}>
                    <button className={`${collapsed ? 'opened' : ''} menu z-20`}
                            onClick={() => dispatch(handleChange())}
                            aria-label="Main Menu">
                        <svg width="50" height="50" viewBox="0 0 100 100">
                            <path className="line line1"
                                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                            <path className="line line2" d="M 20,50 H 80"/>
                            <path className="line line3"
                                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
                        </svg>
                    </button>
                </Stack>
                }

            </Grid>

            {!lgScreen &&
                <Slide in={collapsed} timeout={600}>
                    {navbarCollapsed}
                </Slide>
            }


        </header>
    )
}

export default Header;
