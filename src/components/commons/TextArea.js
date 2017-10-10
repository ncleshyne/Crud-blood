import React from 'react';

const TextArea = ({ name, label, onChange, value, rows, resize, placeholder, error }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <div className="field">
      <textarea
        className="form-input"
        style={resize ? null : {resize: 'none'}}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder} />
    </div>
  </div>
);

TextArea.propTypes = {
  label: React.PropTypes.string.isRequired,
  rows: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  resize: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

export default TextArea;
