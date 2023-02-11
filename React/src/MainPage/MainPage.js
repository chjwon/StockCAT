import React from "react";
import "./MainPage.css"
import {Grid} from '@mui/material';
import BestPredictions from "./BestPredictions/BestPredictions";

const MainPage = () => {
    return (
        <div className="main">
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <div style={{width: "100%"}}>
                        <h2 className="title">StockCAT</h2>
                    </div>
                </Grid>
                <Grid item xs={12} md={12}>
                    <BestPredictions/>
                </Grid>
            </Grid>
            
        </div>
    )
}  

export default MainPage