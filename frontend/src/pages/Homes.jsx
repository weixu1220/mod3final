import NewPromo from "./promo/New.jsx"
import IndexPromo from "./promo/Index.jsx";
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