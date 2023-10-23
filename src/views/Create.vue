<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2ZM2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 9.31371 11.3137 12 8 12C4.68629 12 2 9.31371 2 6ZM17 9C17.5523 9 18 9.44771 18 10V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H18V14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14V13H15C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11H16V10C16 9.44771 16.4477 9 17 9ZM4.5 16C3.24054 16 2 17.2135 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.3682 1.89347 14 4.5 14H11.5C14.1065 14 16 16.3682 16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 17.2135 12.7595 16 11.5 16H4.5Z" fill="#DDDDDD"/>
                </svg>
            </div>
            <h1 class="header__title">Добавить контакт</h1>
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
                <h1 class="form__title">Новый контакт</h1>
                <form action="#" @submit.prevent="submitHandler">
                    <div class="input-group" :class="{invalid: errors.invalid && errors.name.error}">
                        <label for="name">Имя</label>
                        <input type="text" id="name" v-model="name" placeholder="Например «Андрей»...">
                        <div class="err-msg">{{errors.name.errorText}}</div>
                    </div>
                    <div class="input-group" :class="{invalid: errors.invalid && errors.phone.error}">
                        <label for="phone">Телефон</label>
                        <input type="text" id="phone" v-imask="mask" :value="phone" placeholder="+7(___)-___-__-__" @accept="onAccept"
                               @complete="onComplete" @focus="mask.lazy = false" @blur="mask.lazy = true">
                        <div class="err-msg">{{errors.phone.errorText}}</div>
                    </div>
                    <div class="input-group" :class="{invalid: errors.invalid && errors.email.error}">
                        <label for="mail">E-mail</label>
                        <input type="email" id="mail" v-model="email" placeholder="Например «pochta@domain.ru»...">
                        <div class="err-msg">{{errors.email.errorText}}</div>
                    </div>
                    <div class="input-group" :class="{invalid: errors.invalid && errors.category.error}">
                        <label>Категория</label>
                        <div class="select" data-state="">
                            <div class="select__title" data-default="Option 0">
                                <div class="select__title-text">Не выбрано</div>
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
                                <input :id="idx" class="select__input" type="radio" :value="item" v-model="category" v-for="(item, idx) of categoryList"/>
                                <label :for="idx" class="select__label" v-for="(item, idx) of categoryList">{{item}}</label>
                            </div>
                        </div>
                        <div class="err-msg">{{errors.category.errorText}}</div>
                    </div>
                    <div class="input-group submit">
                        <button class="submit__btn">
                            <svg v-show="this.loader === false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2 3.33333C2 2.59695 2.59695 2 3.33333 2H11.0572C11.4108 2 11.75 2.14048 12 2.39052L13.8047 4.19526C13.9298 4.32029 14 4.48986 14 4.66667V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333ZM6 12.6667H10V8.66667H6V12.6667ZM11.3333 12.6667H12.6667V4.94281L11.3333 3.60948V4.66667C11.3333 5.40305 10.7364 6 10 6H6C5.26362 6 4.66667 5.40305 4.66667 4.66667V3.33333H3.33333V12.6667H4.66667V8.66667C4.66667 7.93029 5.26362 7.33333 6 7.33333H10C10.7364 7.33333 11.3333 7.93029 11.3333 8.66667V12.6667ZM6 3.33333V4.66667H10V3.33333H6Z" fill="#545454"/>
                            </svg>
                            <svg class="loader" v-show="this.loader" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.89812 3.58881C9.6139 3.46655 9.4095 3.19824 9.4095 2.88884C9.4095 2.43486 9.83479 2.09867 10.2572 2.26501C11.8473 2.89123 13.1093 4.15373 13.7353 5.74613C13.9015 6.16889 13.565 6.59435 13.1107 6.59435C12.8015 6.59435 12.5332 6.39035 12.411 6.10626C11.9247 4.97581 11.0254 4.07372 9.89812 3.58881ZM3.58881 6.1056C3.46657 6.38991 3.19819 6.59435 2.88871 6.59435C2.43474 6.59435 2.09846 6.16916 2.26451 5.74664C2.89056 4.15375 4.1533 2.8909 5.74613 2.26472C6.16889 2.09852 6.59435 2.435 6.59435 2.88926C6.59435 3.19851 6.39034 3.46684 6.1063 3.58915C4.97583 4.07597 4.07373 4.97772 3.58881 6.1056ZM6.10761 12.4153C6.3909 12.5372 6.59435 12.8048 6.59435 13.1132C6.59435 13.5662 6.17007 13.9017 5.74839 13.7362C4.15492 13.1105 2.89153 11.8481 2.26501 10.2572C2.09867 9.83479 2.43486 9.4095 2.88884 9.4095C3.19824 9.4095 3.46656 9.61389 3.58876 9.89813C4.07385 11.0265 4.97649 11.9286 6.10761 12.4153ZM12.4112 9.89814C12.5334 9.61389 12.8018 9.4095 13.1112 9.4095C13.5651 9.4095 13.9013 9.83478 13.735 10.2572C13.1089 11.847 11.847 13.1089 10.2572 13.735C9.83478 13.9013 9.4095 13.5651 9.4095 13.1112C9.4095 12.8018 9.61389 12.5334 9.89814 12.4112C11.0255 11.9266 11.9266 11.0255 12.4112 9.89814Z" fill="#545454"/>
                            </svg>
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import {IMaskDirective} from "vue-imask";

    export default {
        name: "Create",
        components: {
            'imask-input': IMaskDirective
        },
        data() {
          return {
              name: '',
              phone: '',
              email: '',
              category: '',
              categoryList: ['Родственники', 'Коллеги'],
              loader: false,
              mask: {
                  mask: '+{7}(000)000-00-00',
                  lazy: false
              },
              errors: {
                  count: 4,
                  invalid: false,
                  name: {
                      error: true,
                      errorText: 'Слишком короткое имя'
                  },
                  phone: {
                      error: true,
                      errorText: 'Некорректный номер'
                  },
                  email: {
                      error: true,
                      errorText: 'Некорректный e-mail'
                  },
                  category: {
                      error: true,
                      errorText: 'Поле не может быть пустым'
                  },
              }
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
                this.phone = maskRef.unmaskedValue;
            },
            onComplete (e) {
                const maskRef = e.detail;
                this.phone = maskRef.value;
            },
            submitHandler() {
                if (this.errors.count > 0) {
                    this.errors.invalid = true;
                }
                if (this.errors.count == 0) {
                    function formatDate() {
                        let date = new Date();
                        let dd = date.getDate();
                        if (dd < 10) dd = '0' + dd;
                        let mm = date.getMonth() + 1;
                        if (mm < 10) mm = '0' + mm;
                        let yy = date.getFullYear() % 100;
                        if (yy < 10) yy = '0' + yy;
                        return dd + '.' + mm + '.' + yy;
                    }
                    const contact = {
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        category: this.category,
                        date: formatDate()
                    }
                    this.loader = true;
                    setTimeout(()=> {
                        this.$store.dispatch('createContact', contact);
                        this.$router.push('/');
                        this.loader = false;
                    }, 3000);
                }
            }
        },
        watch: {
            name(n) {
                if (n.length < 4 && this.errors.name.error == false) {
                    this.errors.name.error = true;
                    this.errors.count++;
                }
                else if (n.length > 3 && this.errors.name.error == true){
                    this.errors.name.error = false;
                    this.errors.count--;
                }
            },
            phone(n) {
                if (n.length < 15 && this.errors.phone.error == false) {
                    this.errors.phone.error = true;
                    this.errors.count++;
                }
                else if (n.length >= 15 && this.errors.phone.error == true){
                    this.errors.phone.error = false;
                    this.errors.count--;
                }
            },
            email(n) {
                const regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if (regMail.test(n) === false && this.errors.email.error == false) {
                    this.errors.email.error = true;
                    this.errors.count++;
                }
                else if (regMail.test(n) !== false && this.errors.email.error == true) {
                    this.errors.email.error = false;
                    this.errors.count--;
                }
            },
            category(n) {
                if (n && this.errors.category.error == true) {
                    this.errors.category.error = false;
                    this.errors.count--;
                }
            }
        },
        directives: {
            imask: IMaskDirective
        }
    }
</script>

<style lang="scss" scoped>
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
    }
</style>
<style lang="scss">
    .form {
        box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
        background: #fff;
        width: 704px;
        padding: 48px 64px 64px 64px;
        margin: 0 auto;
        &__title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 24px;
        }
        .select {
            width: 408px;
            margin: 0;
            &__title {
                height: 40px;
            }
        }
        .input-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:not(:last-child) {
                margin-bottom: 16px;
            }
            label {
                font-weight: 700;
            }
            input {
                width: 408px;
                height: 40px;
                border-radius: 4px;
                border: 1px solid #DDDDDD;
                padding-left: 8px;
                outline: none;
                transition: 0.3s;
                color: #545454;
                &:focus {
                    border-color: #2F80ED;
                }
                &::placeholder {
                    color: #A9A9A9;
                }
                &:hover {
                    border-color: #2F80ED;
                }
            }
            .err-msg {
                display: none;
                position: absolute;
                right: 0;
                bottom: -16px;
                transition: 0.3s;
                color: #EB5757;
                font-size: 10px;
                line-height: 16px;
            }
        }
        @keyframes spin {
            from {transform:rotate(0deg);}
            to {transform:rotate(360deg);}
        }
        .loader {
            animation: spin 5s linear 0s infinite;
        }
        .invalid {
            position: relative;
            .err-msg {
                display: block;
            }
            input {
                border-color: #EB5757;
                color: #EB5757;
                background-image: url("/src/assets/icon.svg");
                background-repeat: no-repeat;
                background-position: center right 8px;
                &::placeholder {
                    color: #EB5757;
                }
            }
            .select {
                position: relative;
                &__title {
                    border-color: #EB5757;
                    color: #EB5757;
                }
            }
        }
        .submit {
            justify-content: flex-start;
            margin-left: auto;
            width: 408px;
            margin-top: 32px;
            align-items: center;
            &__btn {
                border-radius: 4px;
                background: #FFC700;
                padding: 12px 16px;
                border: none;
                display: flex;
                align-items: center;
                font-weight: 700;
                text-transform: uppercase;
                font-family: inherit;
                color: #545454;
                cursor: pointer;
                transition: 0.3s;
                &:hover {
                    background: #FFD84C;
                }
                &:active {
                    background: #F3C41E;
                }
                svg {
                    margin-right: 4px;
                }
            }
        }
    }
    @media screen and (max-width: 768px){
        .form {
            width: 100%;
            margin: 0 auto;
            .input-group {
                input {
                    width: 71%;
                }
                .select {
                    width: 71%;
                }
            }
            .submit {
                width: 71%;
            }
        }
    }
    @media screen and (max-width: 576px){
        .form {
            padding: 32px 48px;
            .input-group {
                input {
                    width: 70%;
                }
                .select {
                    width: 70%;
                }
            }
            .submit {
                width: 70%;
            }
        }
    }
    @media screen and (max-width: 505px){
        .form {
            .submit {
                width: 100%;
                justify-content: center;
            }
        }
    }
    @media screen and (max-width: 425px){
        .form {
            padding: 32px 20px;
        }
    }
</style>
