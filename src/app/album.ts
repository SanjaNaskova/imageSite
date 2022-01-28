import { Image } from "./image";

export class Album {
    id!: number;
    name!: string;
    images!: Image[];
    dateCreated?: Date;
}

