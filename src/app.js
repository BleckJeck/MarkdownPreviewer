const app = new Vue({
  el: '#app',
  data: {
    inputText: '',
    outputText: '',
  },
  watch: {
    inputText: function() {
      this.outputText = this.markedText(this.inputText);
      document.getElementById('outputContent').innerHTML = this.outputText;
    }
  },
  methods: {
    markedText: function(text) {
      return marked(text);
    }
  },
  mounted: function() {
    this.inputText = "# Big Header\n\n### Smaller Header\n\nEmphasis: **bold**, *italic*, `monospace`, ~~strikethrough~~\n\nUnordered List:\n* Item 1\n* Item 2\n\nOrdered List:\n1. Item 1\n2. Item 2\n\nCoded by [BleckJeck](https://www.freecodecamp.org/bleckjeck)"
  }
});
