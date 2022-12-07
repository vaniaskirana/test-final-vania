import { useCallback, useEffect, useState } from 'react'
import './Komunitas.css'
import axios from "axios";
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import imgCowok from '../../assets/AboutUsImgMale.png'

const Komunitas = () => {

    const [title, setTitle] = useState("");
    // const [id, setId] = useState("");
    const [content, setContent] = useState("");
    const [alamat, setAlamat] = useState("");
    const [image, setImage] = useState("");
    const [user, setUser] = useState('');
const [apiUser, setApiUser] = useState([]);
    const [saveImage, setSaveImage] = useState({})
    const account = localStorage.getItem("account")


const navigate = useNavigate();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleContent = (e) => {
        setContent(e.target.value);
    };
    const handleLokasi = (e) => {
        setAlamat(e.target.value);
    };
    const handleImage = (e) => {
        setImage(e.target.value);
    };

    // const handleBtn = (e) => {
    //     e.preventDefault();
    //     axios.post("https://6388c9d6a4bb27a7f791bf55.mockapi.io/komunitas", {
    //         title: title,
    //         content: content,
    //         alamat: alamat,
    //         img: image,
    //     })
    // alert("Data berhasil di input")
    // navigate("/forum")
    //     .catch((error) => {
    //         console.log(error);
    //         alert("error");
    //     });
    // }

    useEffect(() => {
        // refreshToken();
        getUsersBE();
        // fetchData();
    }, []);

    // const result =  axios.post('https://voluntegreen.onrender.com/userpage', {

    //          title: title,
    //          content: content,
    //          alamat: alamat,
    //          image: image
    //      });
    //      console.log(result)

    const handleBtn = async (e) => {
        e.preventDefault();
        console.log("huhuhu")
       try {
        console.log("huhuhu dalem")
        
        const result =  await axios.post('https://voluntegreen.onrender.com/userpage', {
           
             title: title,
             content: content,
             alamat: alamat,
             image: image
         });
         console.log(result)
         alert("Berhasil Posting! Silahkan Refresh Web");
         console.log("berhasill posting")
         // navigation("/");
       }catch(error){        
           alert("Mohon periksa kembali data Anda.");
           console.log("gagal posting");
        }
    }


        // setSaveImage({ title, content, alamat, image });
        // console.log(saveImage)

        // const token = localStorage.getItem("token");
      
        // var data = JSON.stringify({
        //     // "_id": id,
        //     "account": account,
        //     "title": title,
        //     "content": content,
        //     "alamat": alamat,
        //     "image": image
        //   });
        //   console.log("testing dalem");

        //   var config = {
        //     method: 'post',
        //     url: 'https://voluntegreen.onrender.com/userpage',
        //     headers: { 
        //       'Content-Type': 'application/json',
        //       'token' : token
        //     },
        //     data : data
        //   };
          
        //   axios(config)
        //   .then(function (response) {
        //     console.log('ini respon sukses: ', response);
        //     alert("Anda berhasil membuat forum");
        //     // navigation(`/dashboard`);

        //   })
        //   .catch(function (error) {
        //     console.log('ini respon error: ', error);
        //     alert(error.response.data.message)
        //   });
    // }
    

    axios.interceptors.request.use(
        config => {
            config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )
    
    // const fetchData = useCallback(async () => {
    //     try {
    //         const result = await axios.get('https://voluntegreen.onrender.com/userpage')
    //         setUser(result.data.data);
    //     }catch (err){
    //         console.log(err)
    //     }
    // })

    const getUsersBE = async () => {
        axios.get('https://voluntegreen.onrender.com/userpage/')
       .then(res => 
       setApiUser(res.data.data),
    //    console.log(res.data.data)
       )
       .catch((err) => console.log(err))
    };
    
    // const [saveImage, setSaveImage] = useState(null)
    // function handleUploadChange(e) {
    //     console.log(e.target.files[0])
    //     let uploaded = e.target.files[0];
    //     setImage(URL.createObjectURL(uploaded))
    // }

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
                            <button className='formInput' href="#popup" ><p style={{ fontSize:"1.4vw"}}>Bagikan kondisi lingkungan sekitar Anda</p></button>
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
                                <h5 id='namaUser'>{localStorage.getItem("username")}</h5>
                            </li>
                        </div>
                            <a href="#unPopup" className='unPop'style={{textDecoration: "none"}}>
                                <button className='closeTag'>x</button>
                            </a>
                        </div>
                        <input className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Judul' value={title} htmlFor="title" onChange={handleTitle}></input>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="6" placeholder='Bagikan kondisi lingkungan sekitar Anda' value={content} onChange={handleContent}></textarea>
                        <input className="form-control" id="exampleFormControlTextarea3" rows="1" placeholder='Lokasi kejadian (Kota, Provinsi)' value={alamat} onChange={handleLokasi}></input>
                        <input type="input" id='input' title="img addres url" className="col-9 d-flex flex-row"  placeholder='Paste here Image Address' value={image} onChange={handleImage} style={{marginLeft: "80px", fontSize: "1vw"}}>
                        </input>

                        <center><button className='buttonPost' type='submit' onClick={handleBtn}>Post</button></center>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Komunitas