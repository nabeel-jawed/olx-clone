import React, { useState } from 'react'
import './createadd.css'
import { Link } from 'react-router-dom'
import { storage, db } from '../config/firebase'
import firebase from 'firebase'


const Createadd = () => {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = (event) => {
        event.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on('state_changed', (snapshot) => {

            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage.ref("images").child(image.name).getDownloadURL()
                    .then(url => {
                        db.collection("products").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            title: title,
                            url: url,
                            price: price,
                            description: description,
                            phone: phone
                        });
                        setProgress(0);
                        setPhone("");
                        setDescription("");
                        setTitle("");
                        setImage(null);
                    })
            }
        )
    }

    return (
        <div className="create">

            <Link to="/"><button className='create__backbtn'>BACK</button></Link>
            <div className="create__postheading">
                <h3>Post Your Add</h3>
            </div>
            <br />
            <bt />
            <div className="create__select">

                <h3>Select Category</h3>

                <select name="categories" id="cate">
                    <option value="Mobile">Mobile</option>
                    <option value="Car">Car</option>
                    <option value="Laptop">Laptop</option>
                    <option value="House">House</option>
                </select>
            </div>


            <form>
                <div className="create__detail">
                    <h3>Include Some details</h3>
                    <br />
                    <input required onChange={event => setTitle(event.target.value)} type="text" name="title" placeholder="Enter Title" id="title" />
                    <br />
                    <br />
                    <input required onChange={event => setDescription(event.target.value)} type="text" name="description" placeholder="Enter Description" id="description" />

                </div>

                <div className="setPrice">
                    <h3>SET PRICE</h3>
                    <input onChange={event => setPrice(event.target.value)} type="text" placeholder="Rs |" id="price" required />
                </div>

                <div className="phone">
                    <input type="text" onChange={event => setPhone(event.target.value)} placeholder="Cell #" id="phone" />
                </div>

                <div className="create__image">
                    <progress className="imageupload__progress" value={progress} max="100" />

                    <input type="file" required onChange={handleChange} />
                    <button className="btn__upload" onClick={handleUpload}>UPLOAD</button>

                </div>
                <button className="btnSubmit" type="submit">Submit Add</button>
            </form>
        </div>
    )
}

export default Createadd;