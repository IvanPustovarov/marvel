<template>
 <div class="button-container">
    <div class="left-corner"></div>
    <div class="text">{{ text }}</div>
</div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        text: {
            type: String,
            default: "Button"
        }
    }
}
</script>

<style lang="scss" scoped>
.button-container{
    text-transform: uppercase;
    color: white;
    font-size: 22px;
    min-width: 200px;
    height: 100px;
    background: linear-gradient(
            180deg,
            rgba(128, 70, 222),
            rgb(35, 14, 83)
          );
      background-size: 400% 400%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    clip-path: polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%);
    position: relative;
    border-radius: $indent-sm-px;
    .text{
        align-self: center;
    }
    .left-corner{
        position: absolute;
        width: 88px;
        height: 7px;
        background-color: rgb(96, 116, 188);
        top: $indent-md-px;
        right: 134px;
        transform: rotate(-24deg);
        box-shadow: 7px 1px 8px 4px rgb(153 153 217 / 50%);
    }
}
</style>
