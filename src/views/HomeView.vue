
<template>
    <div id="Menu" class="menu-bg">
        <div class="container">
            <div class="box-menu">
                <img src="../assets/game1.png" alt="imagem do primeiro menu">
                <select 
                    v-model="DifSelecionada"  
                    class="select-dif"
                    
                >
                    <option
                        v-for="item in dificuldades" 
                        :value="item.value"
                        :key="item.value"
                    >
                    {{item.dificuldade}}
                    </option>
                </select>

                 <b-button 
                    variant="danger"
                    class="btn-home"
                    @click="pegaDificuldade(DifSelecionada)"
                >
                    Jogar
                </b-button>
            </div>
        </div>

    </div>




</template>



<script>
import router from '@/router'

export default {
    name: 'MenuIndex',
    data() {
        return {
            dificuldades : [
                {
                    value: '',
                    dificuldade: "Selecione uma dificuldade"

                },
                {
                    value: 'normal',
                    dificuldade: 'Normal'
                }, 
                {
                    value: 'dificil',
                    dificuldade: 'Difícil'
                },
                {
                    value: 'maisDeOitoMil',
                    dificuldade: 'Mais DE OITO MIL!'
                }
            ],
            DifSelecionada: '',
        }
    },
    watch: {
    },
    methods: {

       pegaDificuldade(dificuldade){
        if(dificuldade !== ''){
            router.push(`/game/${dificuldade}`)
        } else{
            alert("Selecione uma dificuldade para iniciar")
        }
        

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

.select-dif{
    padding: 3px 10px;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
}
.btn-home{
    margin-top: 10px;
    padding: 5px 45px;
    animation: btn-animation 2s linear infinite alternate;
    transition: .5s linear;
}

@keyframes btn-animation{
    0%{
          box-shadow: 0 3px 10px 5px #f4f4f4;
    }
    100%{
            box-shadow: 0 3px 10px 1px #ba0606;
    }
}
</style>