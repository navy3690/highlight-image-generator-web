<template>
    <button class="submitbtn">
        <div class="text-2" align-text-middle>{{ generate }}</div>
    </button>
</template>

<script>
    export default {
        name: "Rectangle3",
        props: ["generate", "className"],
    };
</script>

<style>
    .submitbtn {
        background-color: #FCB449;
        background-size: 100% 100%;
        display: flex;
        height: 62px;
        width: 211px;
        border: 0;
        outline: 0;
        align-items: center;
    }

    .text-2 {
        text-align: center;
        height: 46px;
        letter-spacing: 0;
        /*margin-left: 8px;*/
        /*margin-top: 8px;*/
        width: 195px;
        color: var(--black);
        font-family: var(--font-family-roboto);
        font-size: var(--font-size-m);
        font-weight: 400;
        font-style: normal;
    }

    .submitbtn.downloadbtn {
        background-image: unset;
        margin-left: 182px;
    }
</style>