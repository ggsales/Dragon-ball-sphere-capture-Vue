<template>
    <div class="menu-bg">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="../assets/game-win.png" alt="" tabindex="-1" class="game-win-img">
                <b-button 
                    variant="danger"
                    class="btn-home"
                    @click="redirectMenu"
                >
                    Reiniciar
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
.game-win-img{
    width: 60% !important;
    height: 60%;
    pointer-events: none;
}

@media (max-width:600px){
    .game-win-img{
        margin-top: 50% !important;
        width: 100% !important;
        height: 490px;
    }   
}
*:focus {
  caret-color: transparent !important; /* esconde o cursor */
  outline: none !important; /* esconde a borda de foco */
}
</style>