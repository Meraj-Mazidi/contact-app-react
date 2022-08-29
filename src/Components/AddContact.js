import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div>
        <div className="containerr">
          <div className="brand-logo">
            <i className="material-icons">
              contacts
            </i>
          </div>
          <form className="inputs" onSubmit={this.add}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />

            <button
              className='addContact-button'
              type="submit"
            >
              <i className="material-icons">
                person_add
              </i>
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
