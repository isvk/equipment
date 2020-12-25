export interface IFirebase {
    firestore: any;
    get(collection: string): Promise<any>;
    getOne(collection: string, id: string): Promise<any>;
}
