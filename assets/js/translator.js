var translator = (function() {
  return {
    /**
     *  Config settings for the translate functions
     */
    config: function(language, translationContent) {
      this.language = language;
      this.translationContent = translationContent;
      return this;
    },

    /**
     *  To translate the particular key based on the current language
     */
    translateByKey: function(keyName) {
      let result = keyName;
      try {
        result = this.translationContent[keyName][this.language];
      } catch (error) {
        return keyName;
      } finally {
        if (result) {
          return result;
        }
        return keyName;
      }
    },
    /**
     * Translate function to convert the text into translated content
     */
    translate: function() {
      let content = $("body");
      let self = this;
      content.find(".translate-init").each(function(i) {
        var $this = $(this);
        var translationKey = $this.attr("data-translation-key");
        if (!translationKey) {
          translationKey = $this.html();
          $this.attr("data-translation-key", translationKey);
        }
        $this.html(self.translateByKey(translationKey));
      });
    },

    setLanguage(language) {
      this.language = language;
      return this;
    }
  };
})();
