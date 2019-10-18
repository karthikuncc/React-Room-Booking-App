import Room from "../models/Room";

function RoomsService(observer) {

    let roomsList = [
        new Room({
            roomId: 'Room1',
            meetings: []
        }),
        new Room({
            roomId: 'Room2',
            meetings: []
        }),
        new Room({
            roomId: 'Room3',
            meetings: []
        }),
        new Room({
            roomId: 'Room4',
            meetings: []
        }),
        new Room({
            roomId: 'Room5',
            meetings: []
        }),
        new Room({
            roomId: 'Room6',
            meetings: []
        }),
        new Room({
            roomId: 'Room7',
            meetings: []
        }),
        new Room({
            roomId: 'Room8',
            meetings: []
        }),
        new Room({
            roomId: 'Room9',
            meetings: []
        }),
        new Room({
            roomId: 'Room10',
            meetings: []
        }),
    ];

    this.getRooms = () => {
        return roomsList.slice();
    };

    this.getAvailability = (roomId, startTime, endTime) => {

        const room = this.getRoom(roomId);

        return !room.getMeetings().some((meeting) => {
            return (startTime.isBetween(meeting.getStartTime(), meeting.getEndTime()) ||
                endTime.isBetween(meeting.getStartTime(), meeting.getEndTime()))
        });
    };

    this.getRoom = (roomId) => {
        return roomsList.find((room) => room.getRoomId() === roomId)
    };

    this.bookRoom = (roomId, meeting) => {
        const isAvailable = this.getAvailability(
                                meeting.getDate(),
                                meeting.getStartTime(),
                                meeting.getEndTIme()
                            );

        if(isAvailable) {
        //book room
        }

        else {
            observer.errorBookingRoom('Not available!!')
        }

    }
}


export default RoomsService
