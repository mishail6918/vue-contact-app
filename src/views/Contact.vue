<template>
    <header class="header">
        <div class="header__container">
            <div class="header__initial">{{contact.name.charAt(0).toUpperCase()}}</div>
            <h1 class="header__title">{{contact.name}}</h1>
            <div class="header__close">
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M7.05703 7.05752C7.57773 6.53682 8.42195 6.53682 8.94265 7.05752L15.9998 14.1147L23.057 7.05752C23.5777 6.53682 24.4219 6.53682 24.9426 7.05752C25.4633 7.57822 25.4633 8.42244 24.9426 8.94313L17.8855 16.0003L24.9426 23.0575C25.4633 23.5782 25.4633 24.4224 24.9426 24.9431C24.4219 25.4638 23.5777 25.4638 23.057 24.9431L15.9998 17.8859L8.94265 24.9431C8.42195 25.4638 7.57773 25.4638 7.05703 24.9431C6.53633 24.4224 6.53633 23.5782 7.05703 23.0575L14.1142 16.0003L7.05703 8.94313C6.53633 8.42244 6.53633 7.57822 7.05703 7.05752Z" fill="#939393"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </header>
    <section class="section">
        <div class="container">
            <div class="form">
                <h1 class="form__title">Контакт</h1>
                <form action="#" @submit.prevent="submitHandler">
                    <div class="input-group" :class="{invalid: errors.invalid && errors.name.error}">
                        <label for="name">Имя</label>
                        <input type="text" id="name" v-model="contact.name" placeholder="Например «Андрей»...">
                        <div class="err-msg">{{errors.name.errorText}}</div>
                    </div>
                    <div class="input-group" :class="{invalid: errors.invalid && errors.phone.error}">
                        <label for="phone">Телефон</label>
                        <input type="text" id="phone" v-imask="mask" :value="contact.phone" placeholder="+7(___)-___-__-__" @accept="onAccept"
                               @complete="onComplete" @focus="mask.lazy = false" @blur="mask.lazy = true">
                        <div class="err-msg">{{errors.phone.errorText}}</div>
                    </div>
                    <div class="input-group" :class="{invalid: errors.invalid && errors.email.error}">
                        <label for="mail">E-mail</label>
                        <input type="email" id="mail" v-model="contact.email" placeholder="Например «pochta@domain.ru»...">
                        <div class="err-msg">{{errors.email.errorText}}</div>
                    </div>
                    <div class="input-group" :class="{invalid: errors.invalid && errors.category.error}">
                        <label>Категория</label>
                        <div class="select" data-state="">
                            <div class="select__title" data-default="Option 0">
                                <div class="select__title-text">{{contact.category}}</div>
                                <div class="select__arrow">
                                    <svg v-if="errors.invalid && errors.category.error" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.0026 14.6654C4.32071 14.6654 1.33594 11.6806 1.33594 7.9987C1.33594 4.3168 4.32071 1.33203 8.0026 1.33203C11.6845 1.33203 14.6693 4.3168 14.6693 7.9987C14.6652 11.6789 11.6828 14.6613 8.0026 14.6654ZM8.0026 9.9987C7.63441 9.9987 7.33594 10.2972 7.33594 10.6654C7.33594 11.0336 7.63441 11.332 8.0026 11.332C8.37079 11.332 8.66927 11.0336 8.66927 10.6654C8.66927 10.2972 8.37079 9.9987 8.0026 9.9987ZM8.0026 4.66536C7.63441 4.66536 7.33594 4.96384 7.33594 5.33203V7.9987C7.33594 8.36689 7.63441 8.66536 8.0026 8.66536C8.37079 8.66536 8.66927 8.36689 8.66927 7.9987V5.33203C8.66927 4.96384 8.37079 4.66536 8.0026 4.66536Z" fill="#EB5757"/>
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M10.9037 7C11.0733 7 11.1659 7.19777 11.0574 7.32804L8.15104 10.8156C8.07108 10.9116 7.92371 10.9116 7.84375 10.8156L4.93743 7.32804C4.82887 7.19777 4.9215 7 5.09107 7H10.9037Z" fill="#A9A9A9"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="select__content">
                                <input :id="idx" class="select__input" type="radio" :value="item" v-model="contact.category" v-for="(item, idx) of categoryList"/>
                                <label :for="idx" class="select__label" v-for="(item, idx) of categoryList">{{item}}</label>
                            </div>
                        </div>
                        <div class="err-msg">{{errors.category.errorText}}</div>
                    </div>
                    <div class="input-group">
                        <label>Создан</label>
                        <p class="date">{{contact.date}}</p>
                    </div>
                    <div class="input-group submit">
                        <button class="submit__btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2 3.33333C2 2.59695 2.59695 2 3.33333 2H11.0572C11.4108 2 11.75 2.14048 12 2.39052L13.8047 4.19526C13.9298 4.32029 14 4.48986 14 4.66667V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333ZM6 12.6667H10V8.66667H6V12.6667ZM11.3333 12.6667H12.6667V4.94281L11.3333 3.60948V4.66667C11.3333 5.40305 10.7364 6 10 6H6C5.26362 6 4.66667 5.40305 4.66667 4.66667V3.33333H3.33333V12.6667H4.66667V8.66667C4.66667 7.93029 5.26362 7.33333 6 7.33333H10C10.7364 7.33333 11.3333 7.93029 11.3333 8.66667V12.6667ZM6 3.33333V4.66667H10V3.33333H6Z" fill="#545454"/>
                            </svg>
                            Сохранить
                        </button>
                        <a class="delete-btn" @click="deleteContact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3.5 2C3.5 1.44772 3.94772 1 4.5 1H7.5C8.05228 1 8.5 1.44772 8.5 2V3H9.49484C9.49793 2.99997 9.50103 2.99997 9.50413 3H10.5C10.7761 3 11 3.22386 11 3.5C11 3.77614 10.7761 4 10.5 4H9.96556L9.5319 10.0712C9.49452 10.5946 9.05908 11 8.53444 11H3.46556C2.94092 11 2.50548 10.5946 2.4681 10.0712L2.03444 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H2.49587C2.49897 2.99997 2.50207 2.99997 2.50516 3H3.5V2ZM4.5 3H7.5V2H4.5V3ZM3.03699 4L3.46556 10H8.53444L8.96301 4H3.03699Z" fill="#2F80ED"/>
                            </svg>
                            Удалить контакт
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <div class="notification notification--delete" v-if="this.notification">
        <div class="notification__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0039 3.99805C7.58563 3.99805 4.00391 7.57977 4.00391 11.998C4.00391 16.4163 7.58563 19.998 12.0039 19.998C16.4222 19.998 20.0039 16.4163 20.0039 11.998C20.0039 7.57977 16.4222 3.99805 12.0039 3.99805ZM2.00391 11.998C2.00391 6.4752 6.48106 1.99805 12.0039 1.99805C17.5268 1.99805 22.0039 6.4752 22.0039 11.998C22.0039 17.5209 17.5268 21.998 12.0039 21.998C6.48106 21.998 2.00391 17.5209 2.00391 11.998ZM16.6683 8.75064C17.0811 9.11756 17.1182 9.74963 16.7513 10.1624L11.418 16.1624C11.2282 16.3759 10.9562 16.498 10.6706 16.498C10.3849 16.498 10.1129 16.3759 9.92316 16.1624L7.2565 13.1624C6.88958 12.7496 6.92676 12.1176 7.33954 11.7506C7.75233 11.3837 8.3844 11.4209 8.75132 11.8337L10.6706 13.9928L15.2565 8.83368C15.6234 8.4209 16.2555 8.38372 16.6683 8.75064Z" fill="#6FCF97"/>
            </svg>
        </div>
        <span class="notification__text">Контакт успешно изменён</span>
    </div>
</template>

<script>
    import {IMaskDirective} from "vue-imask";

    export default {
        name: "Contact",
        components: {
            'imask-input': IMaskDirective
        },
        data() {
            return {
                mask: {
                    mask: '+{7}(000)000-00-00',
                    lazy: false
                },
                categoryList: ['Родственники', 'Коллеги'],
                errors: {
                    count: 0,
                    invalid: false,
                    name: {
                        error: false,
                        errorText: 'Слишком короткое имя'
                    },
                    phone: {
                        error: false,
                        errorText: 'Некорректный номер'
                    },
                    email: {
                        error: false,
                        errorText: 'Некорректный e-mail'
                    },
                    category: {
                        error: false,
                        errorText: 'Поле не может быть пустым'
                    },
                },
                notification: null
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
        methods: {
            onAccept (e) {
                const maskRef = e.detail;
                this.value = maskRef.value;
                this.contact.phone = maskRef.unmaskedValue;
            },
            onComplete (e) {
                const maskRef = e.detail;
                this.contact.phone = maskRef.value;
            },
            submitHandler() {
                if (this.errors.count > 0) {
                    this.errors.invalid = true;
                }
                if (this.errors.count == 0) {
                    const contact = {
                        name: this.contact.name,
                        phone: this.contact.phone,
                        email: this.contact.email,
                        category: this.contact.category,
                        id: +this.$route.params.id
                    }
                    this.$store.dispatch('updateContact', contact);
                    this.notification = true;
                    setTimeout(() => {
                        this.notification = false;
                    }, 3000);
                }
            },
            deleteContact() {
                const contact = {
                    id: +this.$route.params.id
                }
                this.$router.push('/');
                setTimeout(() => {
                    this.$store.dispatch('deleteContact', contact);
                }, 0);
            }
        },
        computed: {
            contact() {
                return this.$store.getters.contactById(+this.$route.params.id);
            }
        },
        directives: {
            imask: IMaskDirective
        }
    }
</script>

<style scoped lang="scss">
    .header {
        position: relative;
        justify-content: center;
        &__container {
            justify-content: center;
        }
        &__logo {
            height: auto;
            margin-right: 10px;
        }
        &__title {
            font-size: 20px;
            text-transform: initial;
        }
        &__close {
            position: absolute;
            right: 32px;
        }
        &__initial {
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
    .form {
        .input-group {
            .date {
                width: 408px;
                display: inline-block;
                padding-left: 8px;
                text-align: left;
            }
            .select {
                height: 40px;
                &__title {
                    height: 40px;
                }
                &__title-text {
                    font-weight: 400;
                }
            }
        }
        .delete-btn {
            margin-left: 24px;
            color: #2F80ED;
            font-size: 12px;
            border: none;
            background-color: transparent;
            cursor: pointer;
            svg {
                margin-right: 2px;
            }
        }
    }
    @media screen and (max-width: 768px){
        .form {
            .input-group {
                .date {
                    width: 71%;
                }
            }
        }
    }
    @media screen and (max-width: 576px){
        .form {
            .input-group {
                .date {
                    width: 70%;
                }
            }
        }
    }
</style>
