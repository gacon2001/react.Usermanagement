import React, { Component } from "react";

class UserItem extends Component {
  handleDetail = () => {
    // this.props.detailUser(this.props.user);
  }

  render() {
    const {user} = this.props;
    return (
      <tr>
        <td>{user.username}</td>
        <td>{user.fullname}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onclick={this.handleDetail}
          >
            Edit
          </button>
          <button className="btn btn-danger" onclick={this.props.handleDeleteUser}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
