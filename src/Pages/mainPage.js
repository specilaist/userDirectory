import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import employees from '../public/pictures'

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${employees})`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    root: {
        flexGrow: 1,
    }
}));

// BODY OF MAIN PAGE
function MainPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.hero}>
                <Box>Eban's Employee Grid</Box>
            </Box>
        </div>
    );
}

export default MainPage;