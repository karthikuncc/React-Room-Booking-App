import React from 'react'
import RoomsService from '../services/RoomsService'

class Rooms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomsList: []
        }
    }

    componentDidMount() {
        const roomsService = new RoomsService();

        const rooms = roomsService.getRooms();

        this.setState({
            roomsList: rooms
        })
    }

    _onClickBookRoom = (index) => {
        const selectedRoom = this.state.roomsList[index];
        this.props.history.push(`/rooms/${selectedRoom.getRoomId()}`);
    };

    render() {
        return (
            <React.Fragment>
                <h1>Rooms</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>RoomId</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.roomsList.map((room, index) => {
                            return <tr key={index}>
                                <th>{index +1}</th>
                                <td>
                                    {room.getRoomId()}
                                </td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => this._onClickBookRoom(index)}
                                    >
                                        Book Room
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>

                </table>
            </React.Fragment>
        )
    }
}

export default Rooms
