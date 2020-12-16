import React from 'react';
import { Navbar, Banner, Anggota,SessionKontak,Footer, SectionKegiatan} from '../../Component'

const LandingPage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Banner/>
            <SectionKegiatan />
            <Anggota/>
            <SessionKontak/>
            <Footer />
        </React.Fragment>
    )
}


export default LandingPage;