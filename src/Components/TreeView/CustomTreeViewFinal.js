import React, { useEffect, useState } from 'react'
import AppService from '../../Service/AppService'
import ModalCatalog from './ModalCatalog'
import {isEmpty} from "lodash"

function CustomTreeViewFinal() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        AppService.getCategories().then((data) => {
            setPosts(data)
        })
    }, [])
    
    return (
        <>
            <div>
                <div>
                    <h3 >Catalog</h3>
                    <ModalCatalog />
                </div>
                <div>
                {!isEmpty(posts)?
                        <ul>
                        {
                            posts.map(post => (<li >{post.levelName}</li>))
                        }
                    </ul>         
            :null}
                    {/* <ul>
                        {
                            posts.map(post => (<li >{post.levelName}</li>))
                        }
                    </ul> */}
                </div>
            </div>
        </>

    )
}

export default CustomTreeViewFinal