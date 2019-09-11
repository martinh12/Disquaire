import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './AddVinyl.scss';

class AddVinyl extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  submitVinyl = (values) => {
    console.log(values)
  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitVinyl)}>
        <div>
          <label>Nom du vinyl</label>
          <div>
            <Field
              name="vinylName"
              component="input"
              type="text"
              placeholder="Nom du vinyl"
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field
              name="vinylDescription"
              component="input"
              type="textarea"
              placeholder="Description du vinyl"
            />
          </div>
        </div>
        <div>
          <label>Nom du groupe</label>
          <div>
            <Field
              name="vinylGroup"
              component="input"
              type="text"
              placeholder="Nom du groupe"
            />
          </div>
        </div>
        <div>
          <label>Image du vinyl n1</label>
          <div>
            <Field
              name="vinylImage1"
              component="input"
              type="text"
              placeholder="URl"
            />
          </div>
        </div>
        <div>
          <label>Image du vinyl n2</label>
          <div>
            <Field
              name="vinylImage2"
              component="input"
              type="text"
              placeholder="URl"
            />
          </div>
        </div>
        <div>
        <label>Type de musique</label>
        <div>
          <Field name="musiqueType" component="select">
            <option/>
            <option value="Rock">Rock</option>
            <option value="Funk">Funk</option>
            <option value="Electro">Electro</option>
          </Field>
        </div>
      </div>
        <div>
          <label>date de sortie</label>
          <div>
            <Field
              name="vinylDate"
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
  form: 'vinyl-form'
})(AddVinyl)