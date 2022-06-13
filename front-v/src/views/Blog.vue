<template>
<NavBar/>
<div >

<h1>Travel Blog</h1>
<div class="container ">
    <h1 class="mt-5 mb-5">Never stop exploring</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident ea laudantium officiis ab, delectus nam sint, quos enim ipsum praesentium aut cupiditate similique, accusantium nihil optio ad velit ullam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident ea laudantium officiis ab, delectus nam sint, quos enim ipsum praesentium aut cupiditate similique, accusantium nihil optio ad velit ullam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident ea laudantium officiis ab, delectus nam sint, quos enim ipsum praesentium aut cupiditate similique, accusantium nihil optio ad velit ullam!</p>
</div>
<div class="containercards">
        <div class="card" >
          <div class="card__header"></div>
          <div class="card__body">
          <h3></h3>
         <img
                src="../assets/images/grotte.jpg"
                alt=""

                style="height: 450px; width: 450px"
              />
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident ea laudantium officiis ab, delectus nam sint, quos enim ipsum praesentium aut cupiditate similique, accusantium nihil optio ad velit ullam!</p>
            <div class="card__footer">
              <div style="display: inline" class="user__info">
                <div>
                  <button
                      href="#"
                      type="button"
                      id="crud"
                      class="btn btn-outline-dark"
                    >
                      Read More...
                    </button>
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card" >
          <div class="card__header"></div>
          <div class="card__body">
          <h3></h3>
         <img
                src="../assets/images/savane.jpg"
                alt=""

                style="height: 450px; width: 450px"
              />
            </div>
            <div class="card__footer">
              <div style="display: inline" class="user__info">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident ea laudantium officiis ab, delectus nam sint, quos enim ipsum praesentium aut cupiditate similique, accusantium nihil optio ad velit ullam!</p>
                <div>
                  <button
                      href="#"
                      type="button"
                      id="crud"
                      class="btn btn-outline-dark"
                    >
                      Read More...
                    </button>
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card" >
          <div class="card__header"></div>
          <div class="card__body">
          <h3></h3>
         <img
                src="../assets/images/trip.jpg"
                alt=""

                style="height: 450px; width: 450px"
              />
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident ea laudantium officiis ab, delectus nam sint, quos enim ipsum praesentium aut cupiditate similique, accusantium nihil optio ad velit ullam!</p>
            <div class="card__footer">
              <div style="display: inline" class="user__info">
                <div>
                  <button
                      href="#"
                      type="button"
                      id="crud"
                      class="btn btn-outline-dark"
                    >
                      Read More...
                    </button>
                  >
                </div>
              </div>
            </div>
          </div>
  </div>
</div>
<FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
name: 'Blog',
components: {
  NavBar,
  FooterBar
}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");
.containercards {
  font-family: 'Quicksand', Georgia, 'Times New Roman', Times, serif;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}
img {
  max-width: 100%;
  display: block;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}
.card {
  display: flex;
  flex-direction: column;
  width: 500px;
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
}
.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
p{
    padding: 2em;
}
.container{

    border-radius:10px;
    background-color: white;
    opacity: 0.8;
}
</style>