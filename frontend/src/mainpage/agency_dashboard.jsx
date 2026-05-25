import CreateTrip from "../components/pages/Agencypages/createtrip";
import Navbar from "../components/pages/Agencypages/Navbar";
import Footer from "../components/pages/Agencypages/Footer";   
import Gettrips from '../components/pages/Gettrips'

export default function Admin_dashboard() {
    return(
        <>
        <Navbar />
        <CreateTrip />
        <Gettrips/>
        <Footer/>
        </>
    )
}