# Angular unsaved changes directive

Display an alert when the user modified a form field and try to leave the page without save.

## To use it

### Install with bower


```sh
Bower install angular-unsaved-changes-directive --save
```

### Add in your scripts


```html
<script src="bower_components/unsaved-changes/dist//unsavedChanges.js"></script>
```

### Add into your app

```javascript
    angular
    .module('demoApp', ['unsavedChanges'])
```

### Use it

**leave-page** with **leaving-page-message** in the last one you can change the mmesage to show in the confirm alert.

**leave-page**
**leaving-page-message** on this you can add your leaving message
**changes-saved** This is for reset the flag to show the alert or not False => show alert && true don't show the alert.


```html
<form leaving-page leaving-page-message="Sure to leave the page?" changes-saved="changesAlreadySaved">
```
**unsaved-element** use on each input to validate the changes
```html
 <input unsaved-element type="text" class="form-control"  placeholder="Could type your name :)" ng-model="yourName">
```
