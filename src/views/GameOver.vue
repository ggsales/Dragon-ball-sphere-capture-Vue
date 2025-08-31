<template>
    <div class="menu-bg">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="../assets/game-over.png" alt="" tabindex="-1" class="game-over-img">
                <b-button 
                    variant="danger"
                    class="btn-home"
                    @click="redirectMenu"
                >
                    Tentar novamente
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data()  {
       return {

       } 
    },
    
    mounted(){
      console.log(this.$route)
    },
    methods:{
        redirectMenu(){
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>
<style>
.game-over-img{
    width: 60% !important;
    height: 60%;
    pointer-events: none;
}
*:focus {
  caret-color: transparent !important; /* esconde o cursor */
  outline: none !important; /* esconde a borda de foco */
}
</style>