<template>
    <header class="header">
        <div class="header__container container">
            <div class="header__logo">
                <img src="../assets/logo.svg" alt="">
            </div>
            <h1 class="header__title">Книга контактов</h1>
        </div>
    </header>
    <div class="list">
        <div class="list__actions">
            <div class="container">
                <div class="filter">
                    <div class="select" data-state="">
                        <div class="select__title" data-default="Option 0">
                            <div class="select__title-text">Все</div>
                            <div class="select__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M10.9037 7C11.0733 7 11.1659 7.19777 11.0574 7.32804L8.15104 10.8156C8.07108 10.9116 7.92371 10.9116 7.84375 10.8156L4.93743 7.32804C4.82887 7.19777 4.9215 7 5.09107 7H10.9037Z" fill="#A9A9A9"/>
                                </svg>
                            </div>
                        </div>
                        <div class="select__content">
                            <input :id="idx" class="select__input" type="radio" :value="item" v-model="filter" v-for="(item, idx) of categoryList"/>
                            <label :for="idx" class="select__label" v-for="(item, idx) of categoryList">{{item}}</label>
                        </div>
                    </div>
                </div>
                <router-link to="/create" class="contact-add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99935 2.66699C8.36754 2.66699 8.66602 2.96547 8.66602 3.33366V7.33366H12.666C13.0342 7.33366 13.3327 7.63214 13.3327 8.00033C13.3327 8.36852 13.0342 8.667 12.666 8.667H8.66602V12.667C8.66602 13.0352 8.36754 13.3337 7.99935 13.3337C7.63116 13.3337 7.33268 13.0352 7.33268 12.667V8.667H3.33268C2.96449 8.667 2.66602 8.36852 2.66602 8.00033C2.66602 7.63214 2.96449 7.33366 3.33268 7.33366H7.33268V3.33366C7.33268 2.96547 7.63116 2.66699 7.99935 2.66699Z" fill="#2F80ED"/>
                    </svg>
                    Добавить КОНТАКТ
                </router-link>
            </div>
        </div>
        <div class="list__contact">
            <div class="container">
                <div class="contact-table" v-if="contacts.length">
                    <div class="contact-table__item contact-table__head">
                        <div class="cell">КОНТАКТ</div>
                        <div class="cell cell--desk">ТЕЛЕФОН</div>
                        <div class="cell cell--desk">E-MAIL</div>
                        <div class="cell--split">ТЕЛЕФОН / E-MAIL</div>
                        <div class="cell cell--right">СОЗДАН</div>
                    </div>
                    <router-link class="contact-table__item" :to="'/contact/' + idx" :key="idx" v-for="(item, idx) of displayContacts">
                        <div class="cell name">
                            <div class="cell__initial">{{item.name.charAt(0).toUpperCase()}}</div>
                            {{item.name}}
                        </div>
                        <div class="cell cell--desk">{{item.phone}}</div>
                        <div class="cell cell--desk">{{item.email}}</div>
                        <div class="cell--split">
                            <p>{{item.phone}}</p>
                            <p>{{item.email}}</p>
                        </div>
                        <div class="cell cell--right date">{{item.date}}</div>
                    </router-link>
                </div>
                <p v-else>Нет контактов</p>
            </div>
        </div>
        <div class="notification notification--delete" v-if="this.notificationDel">
            <div class="notification__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0039 3.99805C7.58563 3.99805 4.00391 7.57977 4.00391 11.998C4.00391 16.4163 7.58563 19.998 12.0039 19.998C16.4222 19.998 20.0039 16.4163 20.0039 11.998C20.0039 7.57977 16.4222 3.99805 12.0039 3.99805ZM2.00391 11.998C2.00391 6.4752 6.48106 1.99805 12.0039 1.99805C17.5268 1.99805 22.0039 6.4752 22.0039 11.998C22.0039 17.5209 17.5268 21.998 12.0039 21.998C6.48106 21.998 2.00391 17.5209 2.00391 11.998ZM16.6683 8.75064C17.0811 9.11756 17.1182 9.74963 16.7513 10.1624L11.418 16.1624C11.2282 16.3759 10.9562 16.498 10.6706 16.498C10.3849 16.498 10.1129 16.3759 9.92316 16.1624L7.2565 13.1624C6.88958 12.7496 6.92676 12.1176 7.33954 11.7506C7.75233 11.3837 8.3844 11.4209 8.75132 11.8337L10.6706 13.9928L15.2565 8.83368C15.6234 8.4209 16.2555 8.38372 16.6683 8.75064Z" fill="#6FCF97"/>
                </svg>
            </div>
            <span class="notification__text">Контакт удалён</span>
        </div>
        <div class="notification notification--add" v-if="this.notificationNew">
            <div class="notification__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0039 3.99805C7.58563 3.99805 4.00391 7.57977 4.00391 11.998C4.00391 16.4163 7.58563 19.998 12.0039 19.998C16.4222 19.998 20.0039 16.4163 20.0039 11.998C20.0039 7.57977 16.4222 3.99805 12.0039 3.99805ZM2.00391 11.998C2.00391 6.4752 6.48106 1.99805 12.0039 1.99805C17.5268 1.99805 22.0039 6.4752 22.0039 11.998C22.0039 17.5209 17.5268 21.998 12.0039 21.998C6.48106 21.998 2.00391 17.5209 2.00391 11.998ZM16.6683 8.75064C17.0811 9.11756 17.1182 9.74963 16.7513 10.1624L11.418 16.1624C11.2282 16.3759 10.9562 16.498 10.6706 16.498C10.3849 16.498 10.1129 16.3759 9.92316 16.1624L7.2565 13.1624C6.88958 12.7496 6.92676 12.1176 7.33954 11.7506C7.75233 11.3837 8.3844 11.4209 8.75132 11.8337L10.6706 13.9928L15.2565 8.83368C15.6234 8.4209 16.2555 8.38372 16.6683 8.75064Z" fill="#6FCF97"/>
                </svg>
            </div>
            <span class="notification__text">Контакт успешно создан</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                filter: null,
                categoryList: ['Все', 'Родственники', 'Коллеги'],
                notificationDel: this.$store.getters.notification.notificationDel,
                notificationNew: this.$store.getters.notification.notificationNew,
                oldLength: this.$store.getters.contacts.length
            }
        },
        mounted() {
            const selectSingle = document.querySelector('.select');
            const selectSingle_title = selectSingle.querySelector('.select__title');
            const selectSingle_text = selectSingle.querySelector('.select__title-text');
            const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
            selectSingle_title.addEventListener('click', () => {
                if ('active' === selectSingle.getAttribute('data-state')) {
                    selectSingle.setAttribute('data-state', '');
                } else {
                    selectSingle.setAttribute('data-state', 'active');
                }
            });
            for (let i = 0; i < selectSingle_labels.length; i++) {
                selectSingle_labels[i].addEventListener('click', (e) => {
                    selectSingle_text.textContent = e.target.textContent;
                    selectSingle.setAttribute('data-state', '');
                });
            }
        },
        computed: {
            contacts() {
                return this.$store.getters.contacts
            },
            displayContacts() {
                return this.contacts.filter(t => {
                    if (!this.filter) {
                        return true;
                    }
                    if (this.filter === 'Все') {
                        return true;
                    }
                    return t.category === this.filter;
                })
            },
            contactsLength() {
                return this.$store.getters.contacts.length;
            },
        },
        watch: {
            contactsLength: {
                deep: true,
                handler: function (n,o) {
                    if (this.oldLength > n) {
                        this.oldLength = n;
                        this.notificationDel = true;
                        setTimeout(() => {
                            this.notificationDel = false;
                        }, 3000);
                        const notification = {
                            notificationNew: false,
                            notificationDel: false
                        }
                        this.$store.dispatch('notificationChange', notification);
                    }
                }
            },
            notificationNew: {
                immediate: true,
                handler(n) {
                    console.log(n);
                    if (n) {
                        setTimeout(() => {
                            this.notificationNew = false;
                        }, 3000);
                        const notification = {
                            notificationNew: false,
                            notificationDel: false
                        }
                        this.$store.dispatch('notificationChange', notification);
                    }
                }
            },
        }
    }
</script>

<style lang="scss">
    .list {
        &__actions {
            border: 1px solid #EAF2FD;
            background: #F9FCFF;
            height: 54px;
            display: flex;
            align-items: center;
            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        .filter {
            width: 235px;
        }
        .contact-add {
            color: #2F80ED;
            border-radius: 28px;
            border: 1px solid #2F80ED;
            padding: 8px 16px;
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            svg {
                margin-right: 4px;
            }
        }
        &__contact {
            padding-top: 16px;
            .contact-table {
                .cell--right {
                    text-align: right;
                }
                &__item {
                    display: grid;
                    grid-template-columns: 296px 112px 208px 112px;
                    justify-content: space-between;
                    font-size: 12px;
                    align-items: center;
                    height: 48px;
                    &:not(:last-child) {
                        border-bottom: 1px solid #EAF2FD;
                    }
                    .cell--split {
                        display: none;
                    }
                }
                &__head {
                    font-size: 10px;
                    height: 24px;
                    color: #B5B5B5;
                    font-weight: 400;
                    &:not(:last-child) {
                        border-bottom: none;
                    }
                }
                .name {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }
                .date {
                    font-size: 14px;
                }
                .cell__initial {
                    margin-right: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    border-radius: 56px;
                    background: #FFC700;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
    .notification {
        position: fixed;
        bottom: 48px;
        left: 32px;
        border-radius: 4px;
        background: #FFF;
        box-shadow: 0px 0px 16px 0px rgba(176, 197, 222, 0.50);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 12px 16px 8px;
        &__icon {
            margin-right: 5px;
        }
    }
    @media screen and (max-width: 768px){
        .list {
            &__contact {
                .contact-table {
                    &__item {
                        grid-template-columns: 34% 17% 31% 16%;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 576px){
        .list {
            &__contact {
                .contact-table {
                    &__item {
                        grid-template-columns: 33% 44% 21%;
                        .cell--desk {
                            display: none;
                        }
                        .cell--split {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            p {
                                line-height: 16px;
                                &:first-child {
                                    margin-bottom: 2px;
                                }
                            }
                        }
                    }
                    .name {
                        font-size: 12px;
                    }
                    .date {
                        font-size: 12px;
                    }
                }
            }
        }
        .notification {
            position: absolute;
            background: #545454;
            color: #FFFFFF;
            border-radius: 40px;
            padding: 12px 16px;
            bottom: initial;
            top: 84px;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            &__icon {
                width: 16px;
                height: 16px;
                svg {
                    width: 16px;
                    height: 16px;
                }
            }
            &__text {
                font-weight: 400;
                font-size: 12px;
                line-height: 160%;
            }
        }
    }
    @media screen and (max-width: 376px){
        .list {
            &__contact {
                .contact-table {
                    &__item {
                        grid-template-columns: 42% 40% 18%;
                        .cell__initial {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>
