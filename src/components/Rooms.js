//To Do--- ALl rooms in table view
//Table will have RoomNum,checkAvailabilty

import React, { Component } from "react";

class Rooms extends Component {
    constructor() {
        super(props);

        this.state = {
            roomsList: []
        }
    }

    componentDidMount() {
        //service calls
    }


    _onClickCheckAvailability = () => {
        //history.push to Roomm details.
    }


    render() {

        return (
            <React.Fragment>
                <table>
                    <tr>
                        <th>
                            Room
                    </th>
                        <th>
                            status
                    </th>
                    </tr>
                    {
                        this.state.roomsList.map((room) => {
                            <React.Fragment><tr>room.getRoomId() </tr>
                                <tr><button
                                    onClick={this._onClickCheckAvailability}
                                >checkAvailabilty </button> </tr> </React.Fragment>
                        })
                    }
                </table>

            </React.Fragment>

        )
    }
}