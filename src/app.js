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
  }
});
