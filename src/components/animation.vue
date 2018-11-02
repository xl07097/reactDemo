<template>
    <div>
        <div class="popping-menu">
            <input class="checkbox" id="checkbox" type="checkbox" />
            <button>手机</button>
            <button>设置</button>
            <button>房子</button>
            <button>车马</button>
            <button>钱</button>
            <label class="label" for="checkbox">Click Me</label>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.popping-menu {
  position: relative;
  left: 200px;
  width: 10em;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    position: absolute;
    display: block;
    width: 4em;
    height: 4em;
    padding: 0 1em;
    appearance: none;
    background: #FFB66F;
    border: none;
    transition: all 0.3s ease-in-out;
    transform: translate(0, 0) rotate(360deg);
    opacity: 0;
    border-radius: 50%;
    color: white;
  }  
}
.popping-menu {
  .checkbox {
    display: none;
  }
  .checkbox:checked ~.item:nth-of-type(1){
    opacity: 1;
    transition-delay: 0.1s;
    transform: translate(-9em, 0) rotate(0deg);
  }
  .checkbox:checked ~.item:nth-of-type(2){
    opacity: 1;
    transition-delay: 0.2s;
    transform: translate(-6em, -6em) rotate(0deg);
  }
  .checkbox:checked ~.item:nth-of-type(3){
    opacity: 1;
    transition-delay: 0.3s;
    transform: translate(0, -9em) rotate(0deg);
  }
  .checkbox:checked ~.item:nth-of-type(4){
    opacity: 1;
    transition-delay: 0.4s;
    transform: translate(6em, -6em) rotate(0deg);
  }
  .checkbox:checked ~.item:nth-of-type(5){
    opacity: 1;
    transition-delay: 0.5s;
    transform: translate(9em, 0) rotate(0deg);
  }
}

.popping-menu {
  .label {
    left: 200px;
    z-index: 10;
    border-radius: 50%;
    background: #4791FF;
    width: 6em;
    height: 6em;
    line-height: 6em;
    text-align: center;
    display: block;
    color: white;
    cursor: pointer;
    user-select: none;
  }
}
</style>
