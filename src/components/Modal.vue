<template>
   <transition name="modal">
        <div class="modal" @click="clean">
            <div class="modal__content" @click.stop>
                <h3 class="modal__title">{{curNote.id ? 'Изменить' : 'Добавить'}} заметку</h3>
                <form action="" class="modal__form" @submit.prevent="send">
                    <input type="text" placeholder="Заголовок" required class="modal__input" v-model="user.title">
                    <textarea class="modal__input modal__area" placeholder="Заметка" required v-model="user.text"></textarea>
                    <div class="modal__btns">
                        <a href="#" class="modal__cancel" @click.prevent="clean">Отмена</a>
                        <button class="modal__btn">{{curNote.id ? 'Изменить' : 'Добавить'}}</button>
                    </div>
                    <!-- slots -->
                    <!-- <div class="some__content0">
                       <slot>Ничего не передано</slot>
                    </div>
                    <div class="some__content1">
                       <slot name="one">Ничего не передано</slot>
                    </div>
                    <div class="some__content2">
                       <slot name="two">Ничего не передано</slot>
                    </div> -->
                </form>
            </div>
        </div>
   </transition>
</template>
<script>
export default {
    data(){
        return {
            user: {
                title: '',
                text: ''
            }
        }
    },
    methods: {
        send(){
            const note = {...this.user};
            note.id = this.curNote.id || null
            this.$emit('addNote', note);
            this.clean();
        },
        clean(){
            this.$emit('showOrClose');
            for (const key in this.user) this.user[key] = '';
        }
    },
    props: {
        curNote: {
            type: Object,
            default: {}
        }
    },
    watch: {
        curNote(){ 
            if(this.curNote.id) {
                this.user.title = this.curNote.title;
                this.user.text = this.curNote.text;
            }
        }
    }
}
</script>