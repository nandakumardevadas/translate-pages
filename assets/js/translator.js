var translator = (function() {
  return {
    config: function(language, translationContent) {
      this.language = language;
      this.translationContent = translationContent;
      return this;
    },

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
