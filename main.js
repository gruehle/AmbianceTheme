/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */


/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, $, window */

define(function (require, exports, module) {
    'use strict';
    
    // Brackets modules
    var DocumentManager         = brackets.getModule("document/DocumentManager");
    
    // Load the theme stylesheet
    var cssUrl = require.toUrl("./ambiance.css");
    var fileRef = window.document.createElement("link");
    fileRef.setAttribute("rel", "stylesheet");
    fileRef.setAttribute("type", "text/css");
    fileRef.setAttribute("href", cssUrl);
    window.document.getElementsByTagName("head")[0].appendChild(fileRef);
    
    var themeName = null;
    
    // Assigne the theme to the editor.
    function setTheme() {
        var name = themeName || "default";
        var currentDoc = DocumentManager.getCurrentDocument();
        
        if (currentDoc) {
            currentDoc._masterEditor._codeMirror.setOption("theme", name);
        }
    }
    
    // Whenever a new document is opened, make sure the theme is set
    $(DocumentManager).on("currentDocumentChange", function () {
        setTheme();
    });
    
    // Add menu item
    var COMMAND_NAME = "experimental.ambience";
    
    var $menuItem = $("<li><a href='#'>Theme: Ambiance</a></li>");
    $("#menu-debug-show-developer-tools").closest("ul").append($menuItem);

        
    function toggleTheme() {
        if (themeName) {
            themeName = null;
        } else {
            themeName = "ambiance";
        }
        setTheme();
        $("a", $menuItem).toggleClass("selected");
    }
    
    $menuItem.click(toggleTheme);
    
    // TODO: Add keyboard shortcut once API is available
});
