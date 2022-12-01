import './Komunitas.css'
// import imgCowok from '../../assets/AboutUsImgMale.png'

const Komunitas = () => {
    return(
        <>  
            <div className="cardKomunitas" id='cardUpload'>

                <div className="card-body d-flex flex-row">
                    <div>
                        <img src="img/AboutUsImgMale.png" id='userProfile'/>
                    </div>
                    <div className='contentUpload'>
                        <li>
                            <a href="#popup" style={{textDecoration: "none"}}>
                            <button className='formInput' href="#popup"><p>Bagikan kondisi lingkungan sekitar Anda</p></button>
                            </a>
                        </li>
                        <li>
                            <a href="#popup" style={{textDecoration: "none"}}>
                            <button className="buttonUpload d-flex flex-row">
                                <div className="iconImgUpload">
                                <iconify-icon icon="fluent:image-add-20-regular"></iconify-icon>
                                </div>
                                <div className='uploadeFotoOrVideo'>
                                    Upload foto/video
                                </div>
                            </button>
                            </a>
                        </li>
                    </div>

                </div>

            </div>

            <br/>
            
            <div className="popup" id='popup'>

                <div className="popup__content">

                <div className="cardKomunitas">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <img src="img/AboutUsImgMale.png" id='userProfile'/>
                        </div>
                        <div className='contentUpload'>
                            <li>
                                <h5 id='namaUser'>Ilhamsyah</h5>
                            </li>
                        </div>
                            <a href="#unPopup" className='unPop'style={{textDecoration: "none"}}>
                                <button className='closeTag'>x</button>
                            </a>
                        </div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Judul'></textarea>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="6" placeholder='Bagikan kondisi lingkungan sekitar Anda'></textarea>
                        <textarea className="form-control" id="exampleFormControlTextarea3" rows="1" placeholder='Lokasi kejadian (Kota, Provinsi)'></textarea>
                                
                        <input type="file" id='file' className="d-flex flex-row">
                        </input>
                                <center><button className='buttonPost'>Post</button></center>
                                <br/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Komunitas