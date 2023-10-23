import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
    notification: {
      notificationNew: null,
      notificationDel: null
    }
  },
  getters: {
    contacts: state => {
      return state.contacts;
    },
    contactById: s => id =>s.contacts.find(t => s.contacts.indexOf(t) === id),
    notification: state => {
      return state.notification;
    }
  },
  mutations: {
    createContact(state, contact) {
      const contacts = state.contacts.concat();
      contacts.push(contact)
      state.contacts = contacts;
      //state.contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      state.notification.notificationNew = true;
    },
    updateContact(state, contact) {
      const contacts = state.contacts.concat();
      const idx = contacts.findIndex(t => contacts.indexOf(t) === contact.id);
      const { name, phone, email, category, id } = contact;

      const nContact = contacts[idx];
      contacts[idx] = {...nContact, phone, email, category, name, id};

      state.contacts = contacts;
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    },
    deleteContact(state, contact) {
      const contacts = state.contacts.concat();
      const idx = contacts.findIndex(t => contacts.indexOf(t) === contact.id);
      contacts.splice(idx, 1);
      state.notification.notificationDel = true;
      state.contacts = contacts;
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    },
    notificationChange(state, notification) {
      state.notification = notification;
    }
  },
  actions: {
    createContact({commit}, contact) {
      commit('createContact', contact)
    },
    updateContact({commit}, contact) {
      commit('updateContact', contact)
    },
    deleteContact({commit}, contact) {
      commit('deleteContact', contact)
    },
    notificationChange({commit}, notification) {
      commit('notificationChange', notification)
    }
  },
  modules: {
  }
})
