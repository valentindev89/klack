import React, { Component } from 'react';
import { render } from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const data = [
  {
    id: '5a0d50d5fc13ae33490000e6',
    firstName: 'Ester',
    lastName: 'Lemmens',
    email: 'elemmens0@goo.gl',
  },
  {
    id: '5a0d513ffc13ae336000002b',
    firstName: 'Geordie',
    lastName: 'Langfitt',
    email: 'glangfitt1@phpbb.com',
  },
  {
    id: '5a0d513ffc13ae336000003c',
    firstName: 'Lindsey',
    lastName: 'Fromont',
    email: 'lfromont2@hugedomains.com',
  },
  {
    id: '5a0d513ffc13ae336000004b',
    firstName: 'Kayne',
    lastName: 'Fountain',
    email: 'kfountain3@miibeian.gov.cn',
  },
  {
    id: '5a0d513ffc13ae336000007f',
    firstName: 'Marty',
    lastName: 'Bough',
    email: 'mbough4@berkeley.edu',
  },
];

const ToastUndo = ({ id, undo, closeToast }) => {
  function handleClick() {
    undo(id);
    closeToast();
  }

  return (
    <div>
      <h3>
        Row Deleted
        <button type="button" onClick={handleClick}>
          UNDO
        </button>
      </h3>
    </div>
  );
};

class App extends Component {
  state = {
    collection: data,
    // Buffer
    toRemove: [],
  };

  // Remove the row id from the buffer
  undo = id => {
    this.setState({
      toRemove: this.state.toRemove.filter(v => v !== id),
    });
  };

  // Remove definetly
  cleanCollection = () =>
    this.setState({
      // Return element which are not included in toRemove
      collection: this.state.collection.filter(v => !this.state.toRemove.includes(v.id)),
      // Cleanup the buffer
      toRemove: [],
    });

  /**
   * Remove row from render process
   * then display the toast with undo action available
   */
  removeRow = e => {
    const id = e.target.dataset.rowId;
    this.setState({
      toRemove: [...this.state.toRemove, id],
    });
    toast(<ToastUndo undo={this.undo} id={id} />, {
      // hook will be called whent the component unmount
      onClose: this.cleanCollection,
    });
  };

  renderRows() {
    const { collection, toRemove } = this.state;

    // Render all the element wich are not present in toRemove
    // Im using data-attribute to grab the row id
    return collection
      .filter(v => !toRemove.includes(v.id))
      .map(v => (
        <tr key={v.id}>
          <td>{v.firstName}</td>
          <td>{v.lastName}</td>
          <td>{v.email}</td>
          <td>
            <button onClick={this.removeRow} data-row-id={v.id}>
              Delete
            </button>
          </td>
        </tr>
      ));
  }

  render() {
    // Dont close the toast on click
    return (
      <div style={styles}>
        <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>firstname</th>
              <th>gender</th>
              <th />
            </tr>
            {this.renderRows()}
          </tbody>
        </table>
        <ToastContainer closeOnClick={false} position="bottom-right" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
