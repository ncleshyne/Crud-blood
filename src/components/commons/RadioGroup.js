import React from 'react';

const RadioGroup = ({ name, label, onChange, selectedOption = '', options }) => (
  <div>
    <label className="form-label">{label}</label>
    <div className="checkbox-group">
      {options.map(option => {
        return (
          <label key={option.value} className="form-label capitalize">
            <input
              className="form-checkbox"
              name={name}
              onChange={onChange}
              value={option.value}
              checked={selectedOption === option.value}
              type='radio' /> {option.text}
          </label>
        );
      })}
    </div>
  </div>
);

RadioGroup.defaultProps = {
  type: 'radio'
}

RadioGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  })).isRequired,
  selectedOption: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

export default RadioGroup;
