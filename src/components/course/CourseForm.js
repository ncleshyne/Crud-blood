import React from 'react';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';
import RadioGroup from './../commons/RadioGroup';
import CheckBox from './../commons/CheckBox';


const CourseForm = ({ course, allAuthors, onChange, onSave, loading, staticLists, errors }) => {
  return (
    <form className="container">
      <h2>Request form</h2>

      <TextInput
        name="title"
        label="Blood Type"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Requester"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextArea
        name="description"
        label="Description"
        rows={6}
        value={course.description}
        onChange={onChange}
        error={errors.description}
      />

      <TextInput
        name="location"
        label="Location"
        rows={6}
        value={course.location}
        onChange={onChange}
        error={errors.location}
      />

      <input type="submit" className="btn btn-primary" value="Save" onClick={onSave}/>
    </form>
  )
}

export default CourseForm;
