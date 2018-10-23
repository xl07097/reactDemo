<template>
    <div>
        <div class="popping-menu">
            <input class="checkbox" id="checkbox" type="checkbox" />
            <button>手机</button>
            <button>设置</button>
            <button>房子</button>
            <button>马</button>
            <button>钱</button>
            <label class="label" for="checkbox">Click Me</label>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 此处要sass
$d: 9em;
*,
*::before,
*::aftre {
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.popping-menu {
  position: relative;
  width: 10em;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
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
  .checkbox:checked {
    ~button {
      $per: 180 / 4;
      @for $i from 1 through 6 {
        &:nth-of-type(#{$i}) {
          $angle: $per * ($i - 1) * 1deg + 180deg;
          $x: cos($angle) * $d;
          $y: sin($angle) * $d;
          opacity: 1;
          transition-delay: 0.1s * $i;
          transform: translate($x, $y) rotate(0deg) ;
        }
      }
    }
  }
// .checkbox:checked ~button:nth-of-type(1){

// }

}

.popping-menu {
  .label {
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
