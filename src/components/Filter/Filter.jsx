import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const Filter = ({ value, onChange }) => {
  return (
    <Form.Group controlId="formFilter">
      <Form.Label className="mb-2 fs-5">Find contacts by name</Form.Label>
      <Form.Control
        type="search"
        name="filter"
        value={value} //  это свойство, которое связывает значение поля ввода с текущим значением фильтра, которое было передано в компонент через пропсы
        onChange={onChange} //  это функция обратного вызова, которая будет вызываться каждый раз, когда пользователь изменит значение поля ввода. Она передает новое значение поля ввода в родительский компонент, чтобы он мог обновить свой стейт.
      ></Form.Control>
    </Form.Group>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
