import React from 'react';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';


const RequestForm = ({ request, allBloods, onChange, onSave, loading, staticLists, errors }) => {
  return (
    <div className="col-md-6 col-md-offset-3 container">
    <form className="container">
      <h2>Request form</h2>

      <TextInput
        name="title"
        label="Requester"
        value={request.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="bloodId"
        label="Blood Type"
        value={request.bloodId}
        defaultOption="Select Bloodtype"
        options={allBloods}
        onChange={onChange}
        error={errors.bloodId}
      />

      <TextArea
        name="description"
        label="Description"
        rows={6}
        value={request.description}
        onChange={onChange}
        error={errors.description}
      />

      <TextInput
        name="location"
        label="Location"
        rows={6}
        value={request.location}
        onChange={onChange}
        error={errors.location}
      />

      <input type="submit" className="btn btn-primary" value="Post Request" onClick={onSave}/>
    </form>
    </div>
  )
}

export default RequestForm;
