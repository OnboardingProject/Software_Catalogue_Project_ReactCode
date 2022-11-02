import {React,useEffect,useState} from "react";
import './Center.css'
import Grid from "@material-ui/core/Grid";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import SearchBar from "material-ui-search-bar";
import AddProduct from "../AddProduct/AddProduct";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import TableView from "../Table/Table";
import AppService from "../../Service/AppService";
function Center() {
    const [popupopen, setPopupopen] = useState(false);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        { id: 'productName', label: 'ProductName', minWidth: 150 },
        { id: 'contractSpend', label: 'ContractSpend', minWidth: 150 },
        { id: 'stakeholder', label: 'Stakeholder', minWidth: 150 },
        { id: 'productDescription', label: 'ProductDescription', minWidth: 150 },
    ];
    useEffect(() => {
        getData();
    }, [])
  const getData = () => {
            setIsLoading(true);
            AppService.getProducts().then((data) => {
                console.log("data", data)
                setOpen(false)
                setRows(data.data)
                setIsLoading(false);
            }).catch((e) => {
                console.log("eee", e)
                alert(e.message);
                setPopupopen(true);
                setIsLoading(false);
            })
   }
    const handlePopup = () => {
        setPopupopen(false)
    }
    return (
        <Grid className="Center">
            <Grid container >
                    <Grid item className="BreadCrumbs">
                        <BreadCrumbs/>
                    </Grid>
                <Grid item className="SearchBar-Grid">
                    <SearchBar/>
                    </Grid>
                    <Grid item>
                        <h1 className="ProductText">Products</h1>
                    </Grid>
                </Grid>
                <Grid item>
                <div>

{popupopen &&
    <Snackbar open={popupopen} autoHideDuration={3000} onClose={handlePopup}>
        <Alert onClose={handlePopup} severity="error" sx={{ width: '100%' }}>
            Failed to fetch data
      </Alert>
    </Snackbar>}
<div>
    <AddProduct getData={getData} />
    {isLoading ? <p style={{ marginTop: "120px" }}>Loading</p> : null}
    <TableView rows={rows} columns={columns} />
</div>
</div>
                </Grid>
        </Grid>

    )
}
export default Center
