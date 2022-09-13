<template>
    <header class="header">
        <transition name="header__notes" mode="out-in">
            <div class="header__notes" v-if="header">
                <h2 class="header__title">Заметки</h2>
                <button class="header__search" @click="header = false">
                    <img src="@/assets/img/search.svg" alt="">
                </button>
            </div>
            <form class="header__form" v-else>
                <a href="#" class="back" @click.prevent="header = true; search = ''">
                    <img src="@/assets/img/back.svg" alt="">
                </a>
                <input type="text" placeholder="Поиск..." name="search" class="header__input" required v-model="search">
                <a href="#" class="close" @click.prevent="header = true; search = ''">
                    <img src="@/assets/img/close.svg" alt="">
                </a>
            </form>
        </transition>
    </header>
</template>

<script>
export default {
    data(){
        return {
            search: '',
            header: true
        }
    },
    watch: {
        search(val) {
            this.$emit('find', val);
        } 
    }
}
</script>