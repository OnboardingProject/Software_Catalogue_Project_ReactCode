import Grid from "@material-ui/core/Grid";
import React from "react";
import Center from "../Components/Center/Center";
import Header from "../Components/Header/Header";
import SideNav from "../Components/SideNav/SideNav";
import './Home.css';

const Home = () => {
    
    return (
        <Grid container>
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <SideNav />
            </Grid>
            <Grid container >
                <Center />
            </Grid>

        </Grid>

    )

}
export default Home;
