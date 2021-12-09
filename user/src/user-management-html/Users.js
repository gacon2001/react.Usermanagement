import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderListUser = () => {
    const { listUser } = this.props;
    return listUser.map((user) => {
      return (
        <UserItem
          key={user.id}
          user={user}
          handleDeleteUser={this.props.handleDeleteIndex}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderListUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
