export interface Room {
    name:string;
    idTest: number;
    idUser: number;
    isPublic: boolean;
    idRoom: number;
    isActive: boolean;
    isRunning: boolean;
    createdAt: Date;
}

export interface PostRoom {
    name: string;
    idTest: number;
    idUser: number;
    isPublic: boolean;
}

