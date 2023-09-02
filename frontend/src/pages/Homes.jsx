import NewPromo from "./promo/new"
import IndexPromo from "./promo";

function Home() {
    return (
        <div >
            <IndexPromo /> 
            {localStorage.getItem('admin')==='true' && <NewPromo />} 
        </div>
    );
}

export default Home;