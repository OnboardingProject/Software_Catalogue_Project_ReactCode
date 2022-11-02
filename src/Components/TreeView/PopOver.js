import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './PopOver.css';

const InitialValues = {
    levelId: ' ',
    levelName: ' '
}

const validationSchema = Yup.object().shape({
    levelId: Yup.string().required("Required"),
    levelName: Yup.string().required("Required")
})

const { handle } = (Values, props) => {
    console.log(Values)
}

export default function PopOver() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <AddCircleIcon style={{ color: "Green" }} onClick={handleOpen}/>
            <Modal open={open}>
                <div onClick={handleClose} className='overlay'>
                    <div className='modelContainer' onClick={(e) => { e.stopPropagation() }}>
                        <div className='modalRight'>
                            <p className='closeBtn' onClick={handleClose}>
                                X
                            </p>
                            <div className='content'>
                                <h5 className='content-heading'>Add Category Level</h5>
                                <Formik initialValues={InitialValues} validationSchema={validationSchema} onClick={handle}>
                                    {(props) => (
                                        <Form noValidate>
                                            <Field as={TextField} name='levelId' label='Level Id' fullWidth
                                                error={props.errors.levelId && props.touched.levelId}
                                                helperText={<ErrorMessage name='levelId' />} required />
                                            <Field as={TextField} name='levelName' label='Level Name' fullWidth
                                                error={props.errors.levelId && props.touched.levelId}
                                                helperText={<ErrorMessage name='levelName' />} required />
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div className='btnContainer'>
                                <button className='btnPrimary' onClick={() => alert('Level Added Succesfully')}>
                                    <span className='bold'>OK</span>
                                </button>
                                <button className='btnOutline' onClick={handleClose}>
                                    <span className='bold'>Cancel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
