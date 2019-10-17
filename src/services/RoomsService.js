import Room from "../models/Room";

//roomsList--roomName,currStatus,
 function RoomsService(){
 let roomsList = [
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []}),
     new Room({ roomId: 'Room1', meetings: []})
 ]

 this.getRooms = () => {
     return roomsList;
 }

 }


 export default RoomsService