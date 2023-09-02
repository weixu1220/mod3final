import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function IndexPromo() {
    const [promo, setPromo] = useState([])

    const navigate = useNavigate()
    const handleRedirect = () => {
        console.log("click")
    }

    async function getPromo() {
        try {
            console.log('getting promo...')
            const response = await axios.get('/api/promos')
            console.log(response.data)
            setPromo(response.data)
        } catch (err) {
            console.log(err.message)
        }
    }

   const handleEdit = (id)=>{
    console.log('handling Edit...')
    console.log(id)

   }

   const handleDelete = (id)=>{
    console.log('handling Delete...')
    console.log(id)
}

    useEffect(() => {
        getPromo()
    }, [])

    return (
        <div>
            <div className="flex flex-col">
                {promo.map((item, i) =>
                    <div className="w-12/12 flex justify-between items-center my-8" key={i} >
                        <div className="w-6/12">
                            <img src={item.image} alt="coffee promo image" />
                        </div>
                        <div className="w-6/12 text-center px-8">
                            <h1 className="w-11/12 text-2xl font-semibold my-8 mx-auto">{item.title}</h1>
                            <p className="w-11/12 text-lg mx-auto">{item.body}</p>
                            <button className="font-bold text-md border-2 border-black rounded-full py-1 px-4 m-8" onClick={handleRedirect}>{item.btnText}</button>
                            {localStorage.getItem('admin') === 'true' &&
                                <div>
                                    <button className="mx-2" onClick={handleEdit(item_id)}><FontAwesomeIcon icon={faPen} /></button>
                                    <button className="mx-2" onClick={handleDelete(item._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                                </div>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default IndexPromo;