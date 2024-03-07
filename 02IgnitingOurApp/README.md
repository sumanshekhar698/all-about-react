# Namaste React


# Parcel
- Dev Build
- Local Server
- HMR (Hot Module Replacement/ Hot Reloading) Live Updates with the help of Parcel Watcher
    - It does so via File Watching Algo written in C++
- Caching
   - `The build time will reduce on each subsequent build due to caching done in .parcel-cache`
- Image Optimzation
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling
    - Ensuring Cross browser compatiblity and for the legacy browser too like IE
- Error Handling and Diagnostics
- HTTPS Hosting Support
- Tree Shaking - remove unsused code
- Different dev and prod builds

https://github.com/parcel-bundler/watcher

@parcel/watcher
A native C++ Node module for querying and subscribing to filesystem events. Used by Parcel 2.

Features
- Watch - subscribe to realtime recursive directory change notifications when files or directories are created, updated, or deleted.
- Query - performantly query for historical change events in a directory, even when your program is not running.
- Native - implemented in C++ for performance and low-level integration with the operating system.
- Cross platform - includes backends for macOS, Linux, Windows, FreeBSD, and Watchman.
- Performant - events are throttled in C++ so the JavaScript thread is not overwhelmed during large filesystem changes (e.g. git checkout or npm install).
- Scalable - tens of thousands of files can be watched or queried at once with good performance



