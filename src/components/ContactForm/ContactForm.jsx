import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Form } from 'react-bootstrap';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  // это метод обработчика события, который вызывается каждый раз, когда пользователь вводит или изменяет значение в текстовом поле формы. Он получает событие event, из которого извлекаются два свойства: name и value. Свойство name представляет имя поля, которое было изменено пользователем, а свойство value содержит новое значение поля. Затем этот метод использует setState для установки нового значения поля состояния компонента this.state, используя переменную name как ключ и переменную value как значение. Таким образом, когда пользователь вводит что-то в поле формы, это значение сохраняется в состояние компонента. Это позволяет обновлять значение поля в реальном времени и передавать его в другие компоненты для дальнейшей обработки.

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state); //  вызываем функцию, переданную через props с родительского компонента (в данном случае, onSubmit). Мы передаем ему текущее состояние компонента формы, которое содержит введенные пользователем данные.

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className="mb-2 fs-5">Name</Form.Label>
          <Form.Control
            className="mb-2"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Form.Group>
        <Form.Group controlId="formNumber">
          <Form.Label className="mb-2 fs-5">Number</Form.Label>
          <Form.Control
            className="mb-2"
            value={this.state.number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
