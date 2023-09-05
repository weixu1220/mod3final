import axios from "../../api";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import EditPromo from "./Edit.jsx"

function IndexPromo() {
    const [promo, setPromo] = useState([])
    const [edit,setEdit] = useState(false)
    const [current, setCurrent] = useState({})

    const navigate = useNavigate()
    const handleRedirect = (item) => {
        navigate(`${item.url}`)
    }

    async function getPromo() {
        try {
            console.log('getting promo...')
            const response = await axios.get('/api/promos')
            setPromo(response.data.promo)
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleEdit = (item) => {
        console.log('handling Edit form display...')
        setEdit(!edit)
        setCurrent(item)
    }

    const handleDelete = async(item) => {
        console.log('handling Delete...')
        console.log(item)
        try{
            await axios.delete(`/api/promos/${item._id}`,{
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            getPromo()
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        getPromo()
    }, [])

    return (
        <div>
            <div className="flex flex-col">
                {promo.map((item, i) =>
                    <div className={`w-12/12 flex justify-between items-center my-8 ${item.bgColor}`} key={i} >
                        <div className="w-6/12">
                            <img src={item.image} alt="coffee promo image" />
                        </div>
                        <div className="w-6/12 text-center px-8">
                            <h1 className="w-11/12 text-2xl font-semibold my-8 mx-auto">{item.title}</h1>
                            <p className="w-11/12 text-lg mx-auto">{item.body}</p>
                            <button className="font-bold text-md border-2 border-black rounded-full py-1 px-4 m-8 hover:bg-gray-200" onClick={()=>handleRedirect(item)}>{item.btnText}</button>
                            {sessionStorage.getItem('admin') === 'true' &&
                                <div>
                                    <button className="mx-2" onClick={()=>handleEdit(item)}>
                                        {/* <FontAwesomeIcon icon={faPen} /> */}
                                        <h1>Edit</h1>
                                        </button>
                                    <button className="mx-2" onClick={()=>handleDelete(item)}>
                                        {/* <FontAwesomeIcon icon={faTrashCan} /> */}
                                        Delete
                                        </button>
                                </div>}
                        </div>
                        {edit && current === item && <EditPromo item={item} setCurrent={setCurrent} getPromo={getPromo}/>} 
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default IndexPromo;