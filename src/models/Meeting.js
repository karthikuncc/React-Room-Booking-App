class Meeting {
    constructor({ Username, MeetingRoom, MeetingDate, TimeTo, TimeFrom, Agenda }) {
        this.getMeetingRoom = () => MeetingRoom;
        this.Username = () => Username;
        this.MeetingDate = () => MeetingDate;
        this.TimeTo = () => TimeTo;
        this.TimeFrom = () => TimeFrom;
        this.Agenda = () => Agenda;
    }
}
 
export default Meeting