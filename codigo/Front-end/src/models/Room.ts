export interface Room {
  name: string;
  idTest: number;
  idUser: number;
  isPublic: boolean;
  idRoom: number;
  isActive: boolean;
  isRunning: boolean;
  createdAt: Date;
  roomData: RoomData[];
}

export interface RoomData {
  name: string;
  right_answers: number;
}

export interface PostRoom {
  name: string;
  idTest: number;
  idUser: number;
  isPublic: boolean;
}
