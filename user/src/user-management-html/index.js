import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";

import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
      detailUser: data[0],
      listArr: [],
    };
  }

  handleDetailUser = (user) => {
    this.setState({
      detailUser: user,
    });
  };

  _findIndex = (id) => {
    return this.state.listArr.findIndex((item)=>{
      return item.id === id;
    })
  }

  handleDelete = (user) => {
    const index = this._findIndex(user.id);

    let listArr = [...this.state.listArr];
    listArr.splice(index, 1);

    this.setState({
      listArr,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users
          listUser={this.state.listUser}
          detailUser={this.handleDetailUser}
          handleDeleteIndex={this.handleDelete}
        />
        <Modal />
      </div>
    );
  }
}

export default Home;
