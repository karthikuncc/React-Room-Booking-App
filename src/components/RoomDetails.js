import React from 'react'
import moment from 'moment';

import RoomsService from "../services/RoomsService";

import DateTimePicker from 'react-datetime-picker'
import Meeting from "../models/Meeting";


class RoomDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomDetails: null,
            startDate: moment().toDate(),
            endDate: moment(moment()).add(30, 'm').toDate(),
            errorBooking: '',
            isRoomAvailable: false
        }
    }

    componentDidMount() {
        const roomId = this.props.match.params.roomId;

        this.roomsService = new RoomsService(this);

        const roomDetails = this.roomsService.getRoom(roomId);

        this.setState({
            roomDetails: roomDetails
        })
    }

    _onStartDateChange = (startDate) => {


        this.setState({
            startDate: startDate,
            isRoomAvailable: false,
            endDate: moment(startDate).add(30, 'm').toDate()
        });
    };

    _onEndDateChange = (endDate) => {
        this.setState({
            endDate,
            isRoomAvailable: false
        });
    };

    _formHandler = (e) => {
        e.preventDefault();

        const {roomDetails, startDate, endDate} = this.state;

        const status = this.roomsService.getAvailability(
            roomDetails.getRoomId(),
            startDate,
            endDate
        );

        this.setState({
            isRoomAvailable: status
        })
    };

    errorBookingRoom = (message) => {
        console.log(message);
    };

    _onBookRoom = (e) => {

        const meeting = new  Meeting({
           meetingId: 'id1',
            userName: e.target.name.value,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            agenda: e.target.agenda.value
        });
        this.roomsService.bookRoom(
            this.state.roomDetails.getRoomId(),
            meeting
        )
    };

    render() {
        const {roomDetails, startDate, endDate, isRoomAvailable} = this.state;

        return (
            roomDetails && (
                <div>
                    <h1>
                        Room: {roomDetails.getRoomId()}
                    </h1>

                    <div>
                        <form onSubmit={this._formHandler}>
                            <div className="start-time-picker form-group">
                                <label htmlFor="startTime">Start Time:</label>
                                <DateTimePicker
                                    id='startTime'
                                    name='startTime'
                                    onChange={this._onStartDateChange}
                                    value={startDate}
                                />
                            </div>

                            <div className="end-time-picker form-group">
                                <label htmlFor="endTime">End Time:</label>

                                <DateTimePicker
                                    id='endTime'
                                    name='endTime'
                                    onChange={this._onEndDateChange}
                                    value={endDate}
                                    minDate={startDate}
                                />
                            </div>


                            <button
                                className='btn btn-primary'
                                type='submit'
                            >
                                Check Availability
                            </button>
                        </form>

                        <span>
                            {isRoomAvailable && (
                                <React.Fragment>
                                    <span className="label label-success">
                                        Room is available. Please enter following details
                                    </span>

                                    <form onSubmit={this._onBookRoom}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="name" className="form-control" id="name"
                                                   placeholder="Enter name"/>

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Agenda">Password</label>
                                            <input type="agenda" className="form-control" id="Agenda"
                                                   placeholder="Enter  Agenda"/>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Book</button>
                                    </form>
                                </React.Fragment>

                            )}
                        </span>
                    </div>
                </div>
            )
        )
    }

}

export default RoomDetails
