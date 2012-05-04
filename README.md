This is an **EXPERIMENTAL** extension for Brackets that adds a new code editor theme. The theme is 
based on the Ambiance theme from [CodeMirror] (https://github.com/marijnh/CodeMirror2)

To use, copy the AmbienceTheme folder into the src/extensions/user directory in Brackets 
and restart Brackets. You will see a new "Theme: Ambiance" item at the bottom of the Debug 
menu. Select the item to enable the theme.

##Known issues

As mentioned above, the is an experimental extension, and it has many issues:

* The theme is only applied to the main editor, and is not applied to any inline editor
* This extension is using "private" properties in Brackets, and it **will** break in the future.
* The theme setting is not rememebered when you quit Brackets

##Future

Brackets should have built-in support for code editor themes. Once that happens, code editor
themes like this can be done as pure CSS and will not require an extension.