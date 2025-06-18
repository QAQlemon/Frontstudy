import {ref} from "vue";

export function mouseMove() {
  let x=ref(0)
  let y=ref(0)
  function track(event){
    x.value = event.pageX
    y.value = event.pageY

  }
  window.addEventListener("mousemove",track)
  return {x,y}
}
// export {mouseMove}