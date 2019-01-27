$(document).ready(function() {
  let translationData = $("#translation-value").data("translate-value");
  let translationSetup = translator.config("en", translationData);
  translationSetup.translate();

  $(document).on("change", "#language-selection", function() {
    translationSetup.setLanguage(this.value);
    translationSetup.translate();
  });
});
