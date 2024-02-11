// import "@mui/material"
// import "@mui/icons-material"
import { Button, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { AddAPhoto } from "@mui/icons-material";
import styled from "@emotion/styled";

function Demo() {
    //by making custom component
    const BlueButton = styled(Button)(({ theme }) => ({
        backgroundColor: "theme.palette.otherColor.main",
        color: "#888",
        margin: 5,
        "&:hover": {
            backgroundColor: "green"
        },
        "&:disabled": {
            backgroundColor: "gray",
            color: "white"
        }
    }))
    return (
        <div className="App">
            {/* by using default values */}
            <Button startIcon={<SettingsIcon />} variant="contained">Text</Button>

            <Button startIcon={<AddAPhoto />} variant="contained" size="small" backgroundColor="primary">Add a photo</Button>

            <Button variant="outlined" disabled >Outlined</Button>


            <Typography variant="h1" component="p">
                h1. Heading
            </Typography>


            {/* by using sx prop */}
            <Button variant="outlined" sx={{
                backgroundColor: "otherColor",
                color: "secondary",
                margin: 5,
                "&:hover": {
                    backgroundColor: "green"
                },
                "&:disabled": {
                    backgroundColor: "gray",
                    color: "white"
                }
            }}> My unique button </Button>

            <BlueButton>hey thereeee</BlueButton>
        </div >
    );
}

export default Demo;
