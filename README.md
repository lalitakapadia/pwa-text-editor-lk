# pwa-text-editor-lk

## Description
The purpose of the assignment was to add DB, local caching, and PWA installation capabilities to the JATE starter code.

The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use. The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection. This application allows the user to access visited pages even if the application is offline.

This program is a text editor that can be run in-browser, or be installed to the PC or mobile device with the "install" button at the top-right of the display.

This text editor require a number of methods and store data to an IndexedDB database to be builded up.

This program has has dependencies, and requires their installation via npm. This project has both a server and a client component, with the client component requiring a build. This can all be invoked via Node at the command prompt using npm start