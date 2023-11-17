import firebase from 'firebase/app'
import 'firebase/storage'

const firabaseConfig = {
    apiKey: "AIzaSyA3eGNx4RxqLFAyJlxok2gNhJV7GB6E_CM",
    authDomain: "modasports-8badc.firebaseapp.com",
    projectId: "modasports-8badc",
    storageBucket: "modasports-8badc.appspot.com",
    messagingSenderId: "8258438145",
    appId: "1:8258438145:web:2065121885e88b0e5fac00",
    measurementId: "G-8EPM4JS5QS"
}

!firebase.apps.length && firebase.initializeApp(firabaseConfig)

export const uploadImg = (file) => {
    const ref = firebase.storage().ref(`image/${file.name}`)
    const task = ref.put(file)
    return task
}