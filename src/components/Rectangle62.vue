<template>
    <input type="text" class="time" placeholder="00:00" />
<!--    <div class="time">-->
<!--        <div class="text" align-text-middle>{{ children }}</div>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "Rectangle62",
        props: ["children"],
    };
</script>

<style>
    .time {
        background-color: var(--white);
        border-radius: 30px;
        box-shadow: 0px 4px 4px
        #00000040;
        display: flex;
        height: 55px;
        width: 113px;
        border: 0;
        outline: 0;

        color: var(--delta);
        font-family: var(--font-family-roboto);
        font-size: var(--font-size-m);
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0;
        margin-top: 13px;
        text-align: center;
    }

    .text {
        color: var(--delta);
        font-family: var(--font-family-roboto);
        font-size: var(--font-size-m);
        font-weight: 400;
        font-style: normal;
        height: 28px;
        letter-spacing: 0;
        margin-top: 13px;
        text-align: center;
        width: 113px;
    }
</style>