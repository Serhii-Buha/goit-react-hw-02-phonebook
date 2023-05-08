import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './ContactForm/ContactForm.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);

    const { contacts } = this.state;
    const isExist = contacts.some(contact => contact.name === data.name); // ищет первое совпадение по name

    if (isExist) {
      alert(`${data.name} is already in contacts.`); // если true нашел совпадение  по name пишет ошибку и возврат
      return;
    }

    const newContact = {
      // форма добавления нового контакта
      id: nanoid(), // генерация уникального id
      name: data.name, // это имя нового контакта, которое было введено пользователем в форму
      number: data.number, // это номер телефона нового контакта, который также был введен пользователем в форму.
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts], // Выражение [newContact, ...prevState.contacts] создает новый массив контактов, в котором первым элементом является новый контакт (newContact), а остальные элементы берутся из предыдущего состояния массива контактов (prevState.contacts).
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value, //извлекается значение, введенное пользователем в поле фильтрации и перезаписывается state.filter
    });
  };

  // фильтрует контакты на основе текущего значения фильтра.
  getVisibleFilter = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase(); //  устанавливается в значение filter, полученное из текущего состояния фильтра и переведенное в нижний регистр с помощью метода

    return contacts.filter(
      todo => todo.name.toLowerCase().includes(normalizeFilter) // для получения нового массива контактов, который содержит только те контакты, чьи имена (также переведенные в нижний регистр) содержат подстроку, заданную в фильтре
    );
  };

  //  это функция, которая удаляет контакт из списка контактов, на основе переданного contactId..
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId), // filter(), который создает новый массив контактов, содержащий только те контакты, у которых id не равен переданному contactId. Таким образом, из списка контактов удаляется контакт с указанным id.
    }));
  };

  render() {
    const filterContacts = this.getVisibleFilter();
    const { contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        {contacts.length > 0 && (
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </Container>
    );
  }
}
