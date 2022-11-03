import React, { useEffect, useState } from 'react'
import AppService from '../../Service/AppService'
import ModalCatalog from './ModalCatalog'
import { isEmpty } from "lodash"

function CustomTreeViewFinal(props) {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState('false')

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {
        setIsLoading(true);
        AppService.getCategories().then((data) => {
            console.log("data", data)
            setPosts(data)
            setIsLoading(false);
        }).catch((e) => {
            console.log("error", e)
            alert(e.message);
            setIsLoading(false);
        })
    }

    // useEffect(() => {
    //     AppService.getCategories().then((data) => {
    //         setPosts(data)
    //     })
    // }, [])

    return (
        <>
            <div>
                <div>
                    <h3 >Catalog</h3>
                    <ModalCatalog getCategories={getCategories} />
                </div>
                <div>
                    {!isEmpty(posts) ?
                        <ul>
                            {
                                posts.map(post => (<li >{post.levelName}</li>))
                            }
                        </ul>
                        : null}
                    {/* <ul>
                        {
                            posts.map(post => (<li>{post.levelName}</li>))
                        }
                    </ul> */}
                </div>
            </div>
        </>

    )
}

export default CustomTreeViewFinal