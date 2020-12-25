import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { IFirebase } from "./IFirebase";

export default class Firebase implements IFirebase {
    firestore;

    constructor() {
        app.initializeApp(configFirebase);
        this.firestore = app.firestore();
    }

    get = (collection: string) => this.request(collection).get();

    getOne = (collection: string, id: string) => this.request(collection).doc(id).get();

    delete = (collection: string, id: string) => this.request(collection).doc(id).delete();

    request = (collection: string) => this.firestore.collection(collection);
}

const configFirebase = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};
