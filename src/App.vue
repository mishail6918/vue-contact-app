<template>
    <router-view/>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
    @import url("https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/style.min.css");
    * {
        margin: 0;
        padding: 0;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    #app {
        color: #545454;
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: Proxima Nova, sans-serif;
        font-weight: 400;
        height: 100%;
        position: relative;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
    }
    a {
        text-decoration: none;
        color: inherit;
        font-weight: initial;
    }
    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 990px;
    }
    .header {
        height: 48px;
        background-color: #282828;
        display: flex;
        align-items: center;
        &__container {
            padding: 0px 48px;
            display: flex;
            align-items: center;
            justify-content: left;
            max-width: none;
        }
        &__logo {
            margin-right: 16px;
            height: 32px;
        }
        &__title {
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 700;
            color: #E0E0E0;
        }
    }
    .section {
        background: #F9FCFF;
        padding-top: 24px;
        height: 100vh;
    }
    .select {
        position: relative;
        width: 100%;
        height: 40px;
        margin: 0 auto;
        &[data-state="active"] {
            .select__title {
                &::before {
                    transform: translate(-3px, -50%) rotate(-45deg);
                }
                &::after {
                    transform: translate(3px, -50%) rotate(45deg);
                }
            }
            .select__content {
                opacity: 1;
            }
            .select__label {
                max-height: 40px;
            }
        }
        &__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 40px;
            padding: 0px 8px;
            border-radius: 4px;
            border: solid 1px #DDD;
            cursor: pointer;
            color: #545454;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            background-color: #fff;
            transition: 0.3s;
            &:hover {
                border-color: #2F80ED;
                font-weight: normal;

                &::before,
                &::after {
                    background-color: #0A0A0A;
                }
            }
        }
        &__arrow {
            position: absolute;
            right: 8px;
        }
    }
    .select__content {
        position: absolute;
        top: 48px;
        box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
        left: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #ffffff;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        opacity: 0;
        z-index: 8;
    }
    .select__input {
        display: none;

        &:checked + label {
            background-color: #dedede;
        }
        &:disabled + label {
            opacity: 0.6;
            pointer-events: none;
        }
    }
    .select__label {
        display: flex;
        align-items: center;
        width: auto;
        height: 40px;
        max-height: 0;
        padding: 0 16px;
        transition: all 0.2s ease-out;
        cursor: pointer;
        overflow: hidden;
        line-height: 20px;
        text-transform: uppercase;
        &:hover {
            background-color: #EAF2FD !important;
            color: #0A0A0A;
        }
    }
    @media screen and (max-width: 992px){
        .container {
            max-width: 928px;
        }
        .header {
            &__container {
                padding: 0;
            }
        }
    }
    @media screen and (max-width: 768px){
        .container {
            max-width: none;
            padding: 0px 32px;
        }
        .header {
            height: 40px;
            &__title {
                font-size: 14px;
            }
        }
        .select {
            height: 32px;
            &__title {
                height: 32px;
            }
        }
    }
    @media screen and (max-width: 576px){
        .container {
            padding: 0px 12px;
        }
    }
    @media screen and (max-width: 376px){
        .select {
            width: 219px;
        }
    }
</style>
