import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewPromo() {
    const navigate = useNavigate()

    const titleRef = useRef()
    const bodyRef = useRef()
    const btnTextRef = useRef()
    const urlRef = useRef()
    const bgColorRef = useRef()
    const imageRef = useRef()
    const clearInput = () =>{
        titleRef.current.value = '';
        bodyRef.current.value = '';
        btnTextRef.current.value = '';
        urlRef.current.value = '';
        bgColorRef.current.value = '';
        imageRef.current.value = '';
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const newPromo = {
                title:titleRef.current.value,
                body:bodyRef.current.value,
                btnText:btnTextRef.current.value,
                url:urlRef.current.value,
                bgColor:bgColorRef.current.value,
                image:imageRef.current.value,
            }
        await axios.post('api/promos', newPromo)
        clearInput()
        navigate("/")
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <div>
            <div className=" w-fit mx-auto my-4">
                <FontAwesomeIcon icon={faCirclePlus} size="2xl" />
            </div>
            <div className="flex flex-col justify-center w-fit border-2 rounded-xl shadow-lg mx-auto my-4 p-8">
                <form className=" w-fit flex flex-col border-2 rounded-xl shadow-lg p-8 mx-auto my-4" onSubmit={handleSubmit}>
                    <label className="flex" htmlFor="title">
                        <h2 className="w-44 text-lg font-semibold my-4" >Title:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="title" placeholder="Title" ref={titleRef} />
                    </label>
                    <label className="flex" htmlFor="body">
                        <h2 className="w-44 text-lg font-semibold my-4" >Text:</h2>
                        <textarea className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="textarea" placeholder="text" ref={bodyRef} />
                    </label>
                    <label className="flex" htmlFor="btnText">
                        <h2 className="w-44 text-lg font-semibold my-4" >Button Text:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="button" ref={btnTextRef} />
                    </label>
                    <label className="flex" htmlFor="url">
                        <h2 className="w-44 text-lg font-semibold my-4" >Direct to:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="/redirect" ref={urlRef} />
                    </label>
                    <label className="flex" htmlFor="bgColor">
                        <h2 className="w-44 text-lg font-semibold my-4" >Background color:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="#color" ref={bgColorRef} />
                    </label>
                    <label className="flex" htmlFor="image">
                        <h2 className="w-44 text-lg font-semibold my-4" >Image URL:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="image url" ref={imageRef} />
                    </label>
                    <button className="self-center border-green-800 border-2 rounded-full text-green-800 font-semibold text-lg px-4 py-2 m-4" >Add new content</button>

                </form>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85265.jpg" alt="" />
            </div>
        </div>
    );
}

export default NewPromo;