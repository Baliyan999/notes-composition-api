<template>
    <Header @find="search = $event"/>
    <Notes :notes="filterNotes" 
    @remove="removeNote"
    @edit="editNote"/>
    <Teleport to="body">
      <Modal v-show="showModal"
          @showOrClose="cleanModal"
          @addNote="addOrChangeNote"
          :curNote="curNote">
          <!-- slots -->
          <!-- <p>sdgsd</p>
          <p>sdgsd</p>
          <p>sdgsd</p>
          <p>sdgsd</p>
          <template #one>
              <p>one</p>
          </template>
          <template #two>
              <p>two</p>
          </template> -->
      </Modal>
    </Teleport>
    <a href="#" class="add__note" @click.prevent="showModal = true">
      <img src="@/assets/img/add-note.svg" alt="">
    </a>
</template>
<script>
import '@/assets/styles/main.scss';
import Header from '@/components/Header.vue'
import Notes from '@/components/Notes.vue';
import Modal from '@/components/Modal.vue';
import { v4 as uuidv4 } from 'uuid';
export default {
  components: {
    Header,
    Notes,
    Modal
  },
  data(){
    return {
      showModal: false,
      search: '',
      notes: localStorage.notes ? JSON.parse(localStorage.notes) : [],
      curNote: {}
    }
  },
  computed: {
    filterNotes(){
      if(this.search) {
        let se = this.search.toLowerCase();
        const filterNotes = this.notes.filter(item => {
          const title = item.title.toLowerCase();
          if(title.includes(se)) return item;
        });
        return filterNotes;
      }
      else return this.notes;
    }
  },
  methods: {
    cleanModal(){
      this.showModal = false;
      this.curNote = {};
    },
    addOrChangeNote(obj){
      const note = {...obj};
      note.date = new Date().toLocaleString();
      note.id = obj.id || uuidv4();
      if(obj.id) {
        const idx = this.notes.findIndex(c => c.id == obj.id);
        if(idx != -1) this.notes[idx] = note;
      }
      else this.notes.push(note);
    },
    removeNote(id){
      const idx = this.notes.findIndex(c => c.id == id);
      this.notes.splice(idx, 1);
    },
    editNote(obj){
      this.curNote = obj;
      this.showModal = true;
    }
  },
  watch: {
    notes: {
        handler() {
            localStorage.setItem('notes', JSON.stringify(this.notes));
        },
        deep: true
    }
  }
}
</script>