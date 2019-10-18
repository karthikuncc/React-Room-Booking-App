function Meeting({meetingId, userName, room, date, startTime, endTime, agenda }) {
    this.getMeetingId = () => meetingId;
    this.getUserName = () => userName;
    this.getRoom = () => room;
    this.getDate = () => date;
    this.getStartTime = () => startTime;
    this.getEndTime = () => endTime;
    this.getAgenda = () => agenda;
}

export default Meeting
