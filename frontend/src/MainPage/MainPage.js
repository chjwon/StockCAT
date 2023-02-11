import React, { useState } from "react";
import "./MainPage.css"
import {Grid, Typography} from '@mui/material';
import BestPredictions from "./BestPredictions/BestPredictions";

const ModalButton = ({clickCallback}) => {
    return (
        <div className="modalButton" onClick={() => {clickCallback()}}>
            <Typography variant="h1" style={{alignSelf:"center", fontSize: "50px", padding:"70px 0"}}>
                {"< Past Predictions"}
            </Typography>
        </div>
    )
}

const MainPage = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const handleClose = () => {
        setDisplayModal(false)
    }

    return (
        <div className="main">
            {displayModal && <div className="main_bundle_modal_outer">
                <div className="main_bundle_modal">
                    <div id="bundle_modal_cancel_button" onClick={() => {handleClose()}}>Close</div>
                </div>
            </div>}
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <div style={{width: "100%"}}>
                        <h2 className="title">StockCAT</h2>
                    </div>
                </Grid>
                <Grid item xs={12} md={12}>
                    <BestPredictions/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <div className="buttonContainerLeft">
                        <ModalButton clickCallback={() => {setDisplayModal(true)}}></ModalButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}  

export default MainPage