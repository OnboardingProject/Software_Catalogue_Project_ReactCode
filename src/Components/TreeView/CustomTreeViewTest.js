import React from "react";
import Tree from "./Tree";
import "./Container.css";
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PopOver from './PopOver'

const folderIcon = <FolderIcon style={{ color: "Blue" }}></FolderIcon>
const insertDriveFileIcon = <InsertDriveFileIcon style={{ color: "rgb(202, 193, 19)" }}></InsertDriveFileIcon>

const treeData = [
    {
        key: 0,
        label: "Internal",
        icon: folderIcon,
        add_circle_action: <PopOver />,
        children: [
            {
                key: 0,
                label: "Level 1 item 1",
                icon: folderIcon,
                add_circle_action: <PopOver />,
                children: [
                    {
                        key: 0,
                        label: "Level 2",
                        icon: folderIcon,
                        add_circle_action: <PopOver />,
                        children: [
                            {
                                key: 0,
                                label: "Level 2 item 2",
                                icon: insertDriveFileIcon,
                            },
                            {
                                key: 1,
                                label: "Level 2 item 3",
                                icon: insertDriveFileIcon,
                            }]
                    }],
            },
            {
                key: 1,
                label: "Level 1 item 2",
                icon: folderIcon,
                children: []
            }]
    },
    {
        key: 1,
        label: "External",
        icon: folderIcon,
        children: [
            {
                key: 0,
                label: "Level 1 Item 1",
                icon: folderIcon,
                add_circle_action: <PopOver />,
                children: []
            }]
    },
    {
        key: 2,
        label: "Custom1",
        icon: folderIcon,
        children: []
    },
    {
        key: 3,
        label: "Cras justo odio",
        icon: folderIcon,
        children: []
    },
];

const CustomTreeView = () => {
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     AppService.getCategories().then((data)=>{
    //         setPosts(data)
    //     })
    // }, [])
    return (
        <>
            <div>
                <div className="heading">
                    <h3>Catalog</h3>
                </div>
                <div className="side_nav">
                    <Tree data={treeData} />
                </div>
            </div>
        </>
    );
};

export default CustomTreeView;
