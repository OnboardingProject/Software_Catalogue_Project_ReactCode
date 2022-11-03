import Grid from "@material-ui/core/Grid";
import {React,useEffect,useState} from "react";
import CustomTreeViewFinal from "../TreeView/CustomTreeViewFinal";
import AppService from "../../Service/AppService";
import './SideNav.css';
import ModalCatalog from "../TreeView/ModalCatalog";
function SideNav() {
    // const[posts,setPosts]=useState('');
    // const[isLoading,setIsLoading]=useState(false);
    // useEffect(() => {
    //     getCategories();
    // }, [])

    // const getCategories = () => {
    //     setIsLoading(true);
    //     AppService.getCategories().then((data) => {
    //         console.log("data", data)
    //         setPosts(data)
    //         setIsLoading(false);
    //     }).catch((e) => {
    //         console.log("error", e)
    //         alert(e.message);
    //         setIsLoading(false);
    //     })
    // }
    return (
        <Grid className="SideNav">
            <CustomTreeViewFinal /* getCategories={getCategories} *//>
            {/* <ModalCatalog getCategories={getCategories}></ModalCatalog> */}
            
        </Grid>

    )
}
export default SideNav
