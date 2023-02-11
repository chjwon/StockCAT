import React from "react";
import "./BestPredictions.css"
import { Typography, TableContainer, Table, Paper, TableRow, TableCell, TableHead, TableBody} from '@mui/material';
import sampleData from './sampleData.json'

const BestPredictions = () => {
    return (
        <div className="content">
            <div style={{padding: "15px"}}>
                <Typography variant="h2" style={{fontSize: "40px"}}>Recommendation of the day...</Typography>
            </div>
            <div style={{textAlign: "center"}}>
                <Typography variant="h1">{sampleData.fieldName}</Typography>
                <Typography variant="h2" style={{fontSize: "40px"}}>Top Five</Typography>
            </div>
            <div style={{padding: "20px"}}>
                <TableContainer component={Paper} elevation={5}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Stock Code</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Current Price($)</TableCell>
                            <TableCell align="right">Predicted Gain($)</TableCell>
                            <TableCell align="right">Predicted Gain(%)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {sampleData.top5.map((row) => (
                            <TableRow
                            key={row.stockID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.stockID}
                            </TableCell>
                            <TableCell align="right">{row.stockName}</TableCell>
                            <TableCell align="right">{row.currentPrice}</TableCell>
                            <TableCell align="right">{row.projectedGain}</TableCell>
                            <TableCell align="right">{Math.round((((row.currentPrice + row.projectedGain) / row.currentPrice) - 1) * 10000) / 100}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{textAlign: "center", padding: "30px"}}>
                <Typography variant="p" style={{fontSize : "15px"}}>The Content is for informational purposes only, you should not construe any such information or other material as legal tax, investment, financial, or other advice</Typography>
            </div>
        </div>
    )
}  

export default BestPredictions