import React from 'react';
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { PhotographIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import firebase from "firebase";


function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);


    const sendPost = e => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')

                removeImage();
                uploadTask.on('state_change', null, error => console.log(error),
                    () => {
                        storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                            db.collection('posts').doc(doc.id).set({
                                postImage: url
                            }, { merge: true })
                        })
                    })
            }
        })
        inputRef.current.value = "";
    }

    const addImagetoPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed" />
                <form action="" className="flex flex-1">
                    <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        type="text"
                        placeholder={`Vad gör du just nu ${session.user.name} ?`}
                        ref={inputRef}
                    />
                    <button hidden type="submit" className="" onClick={sendPost}>Skicka</button>

                </form>
                {imageToPost && (
                    <div className="flex flex-col filter hover:brightness-110 transition duration-200 hover:scale-105 cursor-pointer" onClick={removeImage}>
                        <img className="h-10 object-contain" src={imageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center">Ta bort</p>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Livevideo</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                    <PhotographIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Foto/Video</p>
                    <input type="file" ref={filePickerRef} hidden onChange={addImagetoPost} />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Känsla/Aktivitet</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
