import React from 'react'
import './BreadCrumbs.css'
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
function BreadCrumbs() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="inherit"
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Level 1
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Level 2
                </Link>
            </Breadcrumbs>
        </div>
    );
};
export default BreadCrumbs