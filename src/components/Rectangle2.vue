<template>
    <input type="text" class="searchlink" placeholder="Copy and paste link here" />
</template>

<script>
    export default {
        name: "Rectangle2",
        props: ["children"],
    };
</script>

<style>
    .searchlink {
        /*align-self: center;*/
        background-color: var(--white);
        border-radius: 5px;
        display: flex;
        height: 62px;
        /*margin-left: 129px;*/
        margin-top: 11px;
        width: 669px;
        border: 0;
        outline: 0;
        letter-spacing: 0;
        text-align: center;
        color: var(--delta);
        font-family: var(--font-family-roboto);
        font-size: var(--font-size-m);
        font-weight: 400;
        font-style: normal;
    }

    .text-1 {
        text-align: center;
        height: 27px;
        letter-spacing: 0;
        margin-top: 18px;
        width: 404px;
        color: var(--delta);
        font-family: var(--font-family-roboto);
        font-size: var(--font-size-m);
        font-weight: 400;
        font-style: normal;
    }
</style>

