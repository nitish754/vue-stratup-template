<template>
    <div>
        <textarea ref="editor" class="form-control"></textarea>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "CkEditor",
    mounted() {
        ClassicEditor
            .create(this.$refs.editor, {
                toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
                language: 'en',
            })
            .then(editor => {
                console.log('Editor was initialized', editor);
            })
            .catch(error => {
                console.error('There was an error initializing the editor', error);
            });
    },
}
</script>