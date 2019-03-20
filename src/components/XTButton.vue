<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'XTButton',
        props: {

        }
    }
</script>

<style scoped>
    button{
        background-color: #ff6f00; 
        border: 0;
        border-radius: .25rem;
        color: #fff;
        display: inline-block;
        font-size: 1rem;
        font-weight: 400;
        height: 80px;
        line-height: 1.5;
        text-align: center;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        vertical-align: middle;
        white-space: nowrap;
        width: 80px;
    }
    button:hover{
        background-color: #c43e00;
    }
    button:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
</style>