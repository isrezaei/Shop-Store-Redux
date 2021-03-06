import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DetailsEachProduct} from "./DetailsEachProduct";
import {FetchMasterData, selectMasterDataById} from "../../Redux/MasterDataSlice";
import {HeaderUp} from "../Header/HeaderUp";
import {HeaderDown} from "../Header/HeaderDown";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";


export const DetailsPreRender = () =>
{

    const {productId} = useParams()
    const EachProduct = useSelector(state => selectMasterDataById(state , productId))
    const {status} = useSelector(state => state.MasterDataSlice)
    const dispatch = useDispatch()
    const [HeaderMargin] = useState('')


    useEffect(()=>{
        if (status === 'idle')
        {
            dispatch(FetchMasterData())
        }
    } , [dispatch , status])



    let Render ;

    if (status === 'pending')
    {
        Render = <h3>Loading ...</h3>
    }
    else if (status === 'success')
    {
        Render = <DetailsEachProduct EachProduct={EachProduct}/>
    }


    return (
        <div>
            <HeaderUp/>
            <HeaderDown HeaderMargin={HeaderMargin}/>
            <div className='w-full relative mx-auto '>
                {Render}
            </div>
        </div>
    )
}