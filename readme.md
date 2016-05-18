# Webstorage Demo

With web storage, web applications can store data locally within the user's browser.
Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
Local storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

## Use Case

I would like to save my favorite shirt with nerdy text, so i can see it the next time i use the site. - Webstorage

## Feature Detection

Webstorage is a widely adopted feature is supported in almost every browser exept Opera Mini so why bother building a fallback?

- In private browsing mode, Safari, iOS Safari and the Android browsers do not support setting sessionStorage or localStorage.

- In iOS 5 & 6 localStorage data is stored in a location that may occasionally be cleared out by the OS.

- In IE attempting to access localStorage on HTML files served from the file system results in the localStorage object being undefined

So how do you check if the browser has acces to a working local storage?

```javascript
function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

if(lsTest() === true)
  {
```


The function lsTest tries to set a item in the localstorage and removes it instantly, if this works the function returns a true.
At the check if lsTest = true (meaning that the localstorage works) invoke the next functions.


## Fallback without javascript/Localstorage

How do you save something if saving doesn't work? Well you could write it down on paper, but this is the 21st century we don't use those anymore.
If the localstorage fails in anyway possible, the user can send the product to himself with a email. The save button disapears and a email icon will show up instead.

After clicking the email icon the product link will be in the body of the mail. So the user don't has to go trough all the trouble of copy the link and do it all himself.


## Other Accesability features

- Works on screenreaders
- Works for the colorblind
- Works without a mouse
- Works without images

## Link to the Demo
[bestDemoEver](http://jesperhonders.github.io/accesDemo/index.html)
