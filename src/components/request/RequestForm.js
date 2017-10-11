import React from 'react';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';


const RequestForm = ({ request, allAuthors, onChange, onSave, loading, staticLists, errors }) => {
  return (
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
        name="authorId"
        label="Blood Type"
        value={request.authorId}
        defaultOption="Select Bloodtype"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
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

      <input type="submit" className="btn btn-primary" value="Save" onClick={onSave}/>
    </form>
  )
}

export default RequestForm;
