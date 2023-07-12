<script>
  import Card from "./Card.svelte";
  //   function showModal() {
  //     document.getElementsByClassName("overlay").style.opacity = 0.7;
  //   }
  //   var btnclick = document.querySelector(".click");
  //   btnclick.addEventListener("click", showModal);
</script>

<!-- SideBar -->
<div class="border-2 sm:w-1/5 w-1/3 h-screen">
  <div class="my-5 flex justify-center">
    <input type="text" placeholder="Search" class="border border-black" />
  </div>
  <div class="grid gap-5 grid-cols-2 border w-full">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>

  <div class="click my-10 text-white flex justify-center">
    <div
      class="flex flex-col border py-5 w-10/12 justify-around items-center bg-orange-500 rounded-lg"
    >
      <div class="text-6xl">+</div>
      <p class="">Add Card</p>
    </div>
  </div>
</div>

<!-- modal window -->

<div
  class="overlay h-screen w-full fixed top-0 z-10 bg-black opacity-0 duration-1000"
/>
<div
  class="prompt w-1/3 p-3 bg-white text-black z-20 absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
>
  <p class=" mb-2">
    Do you Really want to create a <span class="font-bold">New Card!</span>
  </p>
  <div class="flex justify-evenly">
    <button class="bg-black text-white p-2 my-2 rounded-lg">Create</button>
    <button class="bg-red-500 text-white p-2 my-2 rounded-lg">Cancle</button>
  </div>
</div>
