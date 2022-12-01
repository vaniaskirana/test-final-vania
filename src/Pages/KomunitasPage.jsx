import Footer from "../Components/Footer"
import Komunitas from "../Components/Komunitas/KomunitasUpload"
import KomunitasUploaded from "../Components/Komunitas/KomunitasUploaded"
import Navbar from "../Components/Navbar"

const KomunitasPage = () => {
    return(
        <div id="komunitasPage">
            <Navbar/>
            <Komunitas/>
            <KomunitasUploaded/>
            <Footer/>
        </div>
    )
}

export default KomunitasPage