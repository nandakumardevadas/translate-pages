# To Start the Server:
    npm start

# To update the individual servers config or settings:
```json
{
    "translation-content": {
        "en": "Translation in English  - English Translation",
        "hi": "Translation in Hindi - Hindi Translation",
        "ka": "Translation in Kannada - Kannada Translation"
    }
}

```
# Default URL's generated on starting the servers:
    1. [http://localhost:4701]: http://localhost:4701

# Steps to do translation
    1. Add "class" attribute with the class name "translate-init"
    2. Add "data-translation-key" attribute with the translation key
    3. Add the translation key in the `translation.json` in the path `assets/json/translation.json` with the following formats,
    ```json
    {
        "keyname": {
            "en": "Translation content in English",
            "hi": "Translation content in Hindi",
            "ka": "Translation content in Kannada"
        }
    }

    ```
    4. Init the translation script in Js files
    ```javascript
    let translationData = $("#translation-value").data("translate-value"); // Holds the translation data
    let translationSetup = translator.config("en", translationData);
    translationSetup.translate();
    ```
    For the translator.config() - 
        Parameter 1 indicates the default language
        Parameter 2 indicates the translation content

    translate() translates the entire content

    5. To do translation on change or events:
        ```javascript
        $(document).on('change', '#language-selection', function() {
            translationSetup.setLanguage(this.value) // Set the language code
            translationSetup.translate();
        })
        ```
