import React from 'react';

const CheckBox = ({ name, label, onChange, selectedOptions, options }) => {

  // potential improvement may be change this component to a class so we don't recreate this function in all rendering?
  const onChangeLocal = (event) => {
    let newSelectionArray = [];
    document.getElementsByName(name).forEach(item => {
      if (item.checked) {
        newSelectionArray.push(item.value);
      }
    });

    // call generic callback with my fake an 'synthetic' event.
    return onChange({
      target: {
        name,
        value: newSelectionArray
      }
    })
  }

  return(
    <div>
      <label className="form-label">{label}</label>
      <div className="checkbox-group">
        {options.map(option => {
          return (
            <label key={option.value} className="form-label capitalize">
              <input
                className="form-checkbox"
                name={name}
                onChange={onChangeLocal}
                value={option.value}
                checked={selectedOptions.indexOf(option.value) > -1}
                type='checkbox' /> {option.text}
            </label>
          );
        })}
      </div>
    </div>
  )
};

CheckBox.defaultProps = {
  selectedOptions: []
}

CheckBox.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  })).isRequired,
  selectedOptions: React.PropTypes.arrayOf(React.PropTypes.string),
  onChange: React.PropTypes.func.isRequired
};

export default CheckBox;
