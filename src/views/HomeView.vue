
<template>
    <div id="Menu" class="menu-bg">
        <div class="container">
            <div class="box-menu">
                <img src="../assets/game1.png" alt="imagem do primeiro menu">
                <select v-model="DifSelecionada"  @change="pegaSelect">
                    <option
                        v-for="item in dificuldades" 
                        :value="item.value"
                        :key="item.value"
                    >
                    {{item.dificuldade}}
                    </option>
                </select>
            </div>

        </div>

    </div>




</template>



<script>
export default {
    name: 'MenuIndex',
    data() {
        return {
            dificuldades : [
                {
                    value: "normal",
                    dificuldade: "Normal"
                }, 
                {
                    value: "dificil",
                    dificuldade: "Difícil"
                },
                {
                    value: "maisDeOitoMil",
                    dificuldade: "Mais DE OITO MIL!"
                }
            ],
            DifSelecionada: "normal"
        }
    },
    watch: {
    },
    methods: {
       pegaSelect(e){
         console.log(e.target.value)
       }
    }

}
</script>

<style>
.menu-bg {
    background-image: url(../assets/bg.png);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.box-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.box-menu>img {
    width: 450px;
}
</style>