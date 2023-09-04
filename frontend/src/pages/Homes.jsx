import NewPromo from "./promo/new"
import IndexPromo from "./promo";
import Footer from "../components/Footer";
function Home() {
    return (
        <div >
            <IndexPromo /> 
            {sessionStorage.getItem('admin')==='true' && <NewPromo />} 
            <Footer />
        </div>
    );
}

export default Home;