// import Disqus from "disqus-react"
import { useState, useEffect } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Komunitas.css'
import axios from "axios";
// import imgCowok from '../../assets/AboutUsImgMale.png'
// import cnthImgUploaded from '../../assets/komunitas/Container.png'
// import iconComment from '../../assets/komunitas/iconComment.png'
// import iconShare from '../../assets/komunitas/iconShare.png'

const KomunitasUploaded = () => {

        var disqus_config = function () {
        this.page.url = document.location.href;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = document.location.href.split(".org")[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://voluntegreen.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();

        

        const [postingan, setPostingan] = useState([]);
        useEffect(()=>{
            axios('https://6388c9d6a4bb27a7f791bf55.mockapi.io/komunitas')
            .then(res => {
                console.log(res.data)
                setPostingan(res.data)
            })
        },[]);

    return(
        <>
        {postingan.map((item, index) => (
            <>
                <div className="cardKomunitas" key={index}>
                <div className="card-body d-flex flex-row">
                    <div>
                        <img src="img/AboutUsImgMale.png" id='userProfileUploaded'/>
                    </div>
                    <div className='contentUpload'>
                        <li>
                            <h5 id='namaUser'>{localStorage.getItem("username")}</h5>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className='waktuUploaded'>
                                    <p>{item.time_stamp}</p>
                                </div>
                            </div>
                        </li>
                        <br/>
                    </div>
                </div>
                <div className='uploadedImage'>
                    <center>
                    <img src={item.img} style={{ width:"90%"}}/>
                    </center>
                </div>
                <div className="daerahUpload">
                    {item.location}
                </div>
                <div className="titleUpload">
                    <p>{item.title}</p>
                </div>
                <div className="contentTextUpload">
                    <p>
                        {item.content}
                    </p>
                </div>
                <div className="d-flex flex-row komen-share">
                    <div className="commentSectionIcon d-flex flex-row">
                        <div className="shareCommentIcon">
                            <img src="img/iconComment.png" />
                        </div>                     
                        <div className="shareCommentText" style={{marginLeft: "2vh", fontWeight: "bolder"}}>
                            Comment
                        </div>
                    </div>
                    <div className="shareSectionIcon d-flex flex-row">
                        <div className="shareCommentIcon">
                            <img src="img/iconShare.png" />
                        </div>
                    <div className="shareCommentText" style={{marginLeft: "2vh", fontWeight: "bolder"}}>
                            Share
                        </div>
                    </div>
                </div>
                <hr style={{border: "1px solid black"}}/>
                <br/>
                <div className='disqus' id="disqus_thread"></div>
            </div>
            <br/>
            <br/>
            </>
        ))}
            {/* <div className="cardKomunitas">
                <div className="card-body d-flex flex-row">
                    <div>
                        <img src="img/AboutUsImgMale.png" id='userProfileUploaded'/>
                    </div>
                    <div className='contentUpload'>
                        <li>
                            <h5 id='namaUser'>Ilhamsyah</h5>
                        </li>
                        <li>
                            <div className="d-flex flex-row">
                                <div className='waktuUploaded'>
                                    <p>An hour ago</p>
                                </div>
                            </div>
                        </li>
                        <br/>
                    </div>
                </div>
                <div className='uploadedImage'>
                    <center>
                    <img src="img/Container.png"/>
                    </center>
                </div>
                <div className="daerahUpload">
                    Singkawang, Kalimantan Barat
                </div>
                <div className="titleUpload">
                    <p>Longsor di Singkawang menyebabkan rumah ambruk</p>
                </div>
                <div className="contentTextUpload">
                    <p>
                    Tiga unit rumah yang berada di Gang Batu Mas, Kelurahan Pasiran, Kecamatan Singkawang Barat, Kota Singkawang rusah tertimpa longsor tanah.
                    <br/>Selain longsor, curah hujan yang cukup tinggi yang melanda Kota Singkawang juga mengakibatkan sejumlah pemukiman warga di Kota Singkawang terendam banjir.
                    <br/>Wali Kota Singkawang bersama Forkompinda usai mengunjungi pasien di RSUD Abdul Aziz Singkawang langsung bergerak menuju Kelurahan Pasiran, Kecamatan Singkawang Barat, untuk meninjau rumah warga yang rusak, Minggu sore (28/8/2022).
                    <br/>Hingga kini, Kota Singkawang masih diguyur hujan, dan TNI beserta Polri masih berusaha membantu warga untuk membersihkan sisa puing longsor yang menerjang pemukiman warga.
                    </p>
                </div>
                <div className="d-flex flex-row komen-share">
                    <div className="commentSectionIcon d-flex flex-row">
                        <div className="shareCommentIcon">
                            <img src="img/iconComment.png" />
                        </div>                     
                        <div className="shareCommentText" style={{marginLeft: "2vh", fontWeight: "bolder"}}>
                            Comment
                        </div>
                    </div>
                    <div className="shareSectionIcon d-flex flex-row">
                        <div className="shareCommentIcon">
                            <img src="img/iconShare.png" />
                        </div>
                    <div className="shareCommentText" style={{marginLeft: "2vh", fontWeight: "bolder"}}>
                            Share
                        </div>
                    </div>
                </div>
                <hr style={{border: "1px solid black"}}/>
                <br/>
                <div className='disqus' id="disqus_thread"></div>
            </div>
            <br/>
            <br/> */}
        </>
    )
}

export default KomunitasUploaded