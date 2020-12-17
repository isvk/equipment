export interface IFirebase {
    get(collection: string): Promise<any>;
}
