import React from 'react'
import { useState } from 'react';
import './ModalCatalog.css'
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from "@material-ui/core";
import AppService from '../../Service/AppService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ModalCatalog() {
    const [PopUp, setPopUp] = React.useState(false);
    const popUpClose = () => setPopUp(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [levelName, setLevelName] = useState('');
    const postData = () => {
        const payLoad = {
            "levelName": levelName,
            "hierarchyLevel": null
        }
        AppService.postCatagories(payLoad).then((data) => {
            setOpen(false)
            setPopUp(true)
        }).catch((e) => {
            console.log("Error occured", e)
            alert(e.message);

        })


    }

    return (
        <div>
            <Snackbar open={PopUp} autoHideDuration={3000} onClose={popUpClose}>
                <Alert onClose={popUpClose} severity="success" sx={{ width: '100%' }}>
                    Succesfully Category Added!
                </Alert>
            </Snackbar>
            <div className='modalButton'>
                <AddCircleRoundedIcon onClick={handleOpen} style={{ color: 'green',cursor:'pointer',cursor:'hand' }}></AddCircleRoundedIcon></div>
            <Modal open={open}>
                <div onClick={handleClose} className='overlay'>
                    <div className='modalContainer'
                        onClick={(e) => {
                            e.stopPropagation();
                        }}>
                        <div className='modalRight'>
                            <p className='closeBtn' onClick={handleClose}>
                                X
                            </p>
                            <div className='content'>
                                <Grid alignContent='center' className='container'>
                                    <h3 className='content-heading'>Add Category Level</h3>
                                </Grid>
                               
                                    <TextField fullWidth label='Level Name' value={levelName} onChange={(e) => setLevelName(e.target.value)} />
                                    <Grid className='btnContainer'>
                                        <Button type='button' onClick={postData} disabled={!levelName} className='btnPrimary' style={{ backgroundColor: levelName? "green":"transparent", color: "Black" }}>
                                            <span classname='bold' >OK</span></Button>

                                        <Button type='button' className='btnOutline' onClick={handleClose} style={{ color: "red" }}>
                                            <span classname='bold'>Cancel</span></Button>
                                    </Grid>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default ModalCatalog