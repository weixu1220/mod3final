import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

let emptyForm = {
    title: '',
    body: '',
    btnText: '',
    url: '',
    bgColor: '',
    image: '',
}

function NewPromo() {

    const [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{

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
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="title" placeholder="Title" onChange={handleChange} />
                    </label>
                    <label className="flex" htmlFor="body">
                        <h2 className="w-44 text-lg font-semibold my-4" >Text:</h2>
                        <textarea className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="textarea" placeholder="text" onChange={handleChange} />
                    </label>
                    <label className="flex" htmlFor="btnText">
                        <h2 className="w-44 text-lg font-semibold my-4" >Button Text:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="button" onChange={handleChange} />
                    </label>
                    <label className="flex" htmlFor="url">
                        <h2 className="w-44 text-lg font-semibold my-4" >Direct to:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="/redirect" onChange={handleChange} />
                    </label>
                    <label className="flex" htmlFor="bgColor">
                        <h2 className="w-44 text-lg font-semibold my-4" >Background color:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="#color" onChange={handleChange} />
                    </label>
                    <label className="flex" htmlFor="image">
                        <h2 className="w-44 text-lg font-semibold my-4" >Image URL:</h2>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" placeholder="image url" onChange={handleChange} />
                    </label>
                    <button className="self-center border-green-800 border-2 rounded-full text-green-800 font-semibold text-lg px-4 py-2 m-4" >Add new content</button>

                </form>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85265.jpg" alt="" />
            </div>
        </div>
    );
}

export default NewPromo;