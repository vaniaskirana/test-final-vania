import "./contactUs.css"

const DataContactUs = () => {
    return(
        <>
            <div className="card cardAboutUs">
            
                <div className="row">
                    <h2 className="aboutUsTitle">Contact Us</h2>
                </div>

                <div className="row">
                    <h1 className="volunteGreenLogo">VolunteGreen</h1>
                </div>

                <div className="row contentAboutUs">
                    <p>Sobat VolunteGreen dapat menghubungi kami dengan mengirimkan pesan pertanyaan atau masukan kepada kami melalui Gmail dibawah ini ya !!</p>
                </div>

                <div className="row">
                    <center>
                        <a href="mailto:voluntegreen@gmail.com?" target="blank">
                        <img  tsrc="img/gmailImg.png" className="iconGmail"/>
                        </a>
                    </center>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default DataContactUs