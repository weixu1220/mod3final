import axios from "axios"
import { useRef } from "react"

function EditPromo({ item,setCurrent,getPromo }) {

    const titleRef = useRef()
    const bodyRef = useRef()
    const btnTextRef = useRef()
    const urlRef = useRef()
    const bgColorRef = useRef()
    const imageRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const updatedPromo = {
                title: titleRef.current.value,
                body: bodyRef.current.value,
                btnText: btnTextRef.current.value,
                url: urlRef.current.value,
                bgColor: bgColorRef.current.value,
                image: imageRef.current.value,
            }
            
            await axios.put(`/api/promos/${item._id}`, updatedPromo, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            setCurrent(false)
            getPromo()
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            <form className=" w-fit flex flex-col border-2 rounded-xl shadow-lg p-8 mx-auto my-4" onSubmit={handleSubmit}>
                <label className="flex" htmlFor="title">
                    <h2 className="w-44 text-lg font-semibold my-4" >Title:</h2>
                    <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="title" defaultValue={item.title} ref={titleRef} />
                </label>
                <label className="flex" htmlFor="body">
                    <h2 className="w-44 text-lg font-semibold my-4" >Text:</h2>
                    <textarea className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" name="body" type="textarea" defaultValue={item.body} rows={5} ref={bodyRef} />
                </label>
                <label className="flex" htmlFor="btnText">
                    <h2 className="w-44 text-lg font-semibold my-4" >Button Text:</h2>
                    <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" name="btnText" type="text" defaultValue={item.btnText} ref={btnTextRef} />
                </label>
                <label className="flex" htmlFor="url">
                    <h2 className="w-44 text-lg font-semibold my-4" >Direct to:</h2>
                    <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" name="url" type="text" defaultValue={item.url} ref={urlRef} />
                </label>
                <label className="flex" htmlFor="bgColor">
                    <h2 className="w-44 text-lg font-semibold my-4" >Background color:</h2>
                    <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" name="bgColor" type="text" defaultValue={item.bgColor} ref={bgColorRef} />
                </label>
                <label className="flex" htmlFor="image">
                    <h2 className="w-44 text-lg font-semibold my-4" >Image URL:</h2>
                    <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" name="image" type="text" defaultValue={item.image} ref={imageRef} />
                </label>
                <button className="self-center bg-green-800 border-2 rounded-full text-white font-semibold text-lg px-4 py-2 m-4" >update</button>
            </form>
        </div>
    );
}

export default EditPromo;