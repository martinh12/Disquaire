import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './AddEvent.scss';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  submitEvent = (values) => {
    console.log(values)
  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitEvent)}>
        <div>
          <label>Nom de l'évènement</label>
          <div>
            <Field
              name="eventName"
              component="input"
              type="text"
              placeholder="Nom de l\'évènement"
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field
              name="eventDescription"
              component="input"
              type="textarea"
              placeholder="Description de l'évènement"
            />
          </div>
        </div>
        <div>
          <label>date de l'évènement</label>
          <div>
            <Field
              name="eventDate"
              component="input"
              type="date"
            />
          </div>
        </div>
        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    )
  }
}


export default reduxForm({
  form: 'event-form'
})(AddEvent)