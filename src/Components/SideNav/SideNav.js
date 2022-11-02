import React from "react";
import './SideNav.css'
import Grid from "@material-ui/core/Grid";
import CustomTreeView from "../TreeView/CustomTreeViewFinal";
import ModalCatalog from "../TreeView/ModalCatalog";
import CustomTreeViewFinal from "../TreeView/CustomTreeViewFinal";
function SideNav() {
    return (
        <Grid className="SideNav">
            <CustomTreeViewFinal/>
            
        </Grid>

    )
}
export default SideNav
