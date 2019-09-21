# Fomalhaut

The goal of this project is to implement a basic framework using Angular, using a plugin architecture.
Using this, anyone could create a basic admin app, with authentication and user modules, and basic themeing capabilities.
I named this project Fomalhaut because it's a stellar name!

## Motivation

I wanted to create a simple blog, and was considering using WordPress for that purpose, but due to my disdain for PHP I could't go through with this idea.
So I though to myself how it would be awesome if I could have some kinda of platform with the bare minimum, where I could then add some modules and make any backoffice app to my liking.
I could make a blog admin app by adding maybe a Posts and Comments module, and those modules could be integrated on the platform, or perhaps loaded dynamically. Considering each module as a separate entity with it's own API and data storage, like a microservice, this platform could be of great value, or just a cool project for me to improve my coding skills.

## Roadmap

- Implement basic authentication using Firebase Auth
- Implement users module, also integrated with Firebase Auth
- Implement Posts and Comments module. Kind need some basic modules to test
- Implement plugin architecture, which should be able to load dynamically any remote NgModule
- Implement themeing with Angular Material and CSS variables
- Implement service discovery. Any modules going offline, or any new compatible modules going live, should be reflected on the platform
- Platform should have two approaches to module loading: modules loaded as npm packages or loaded dynamically using service discovery
- Maybe finally create a fully functional blog platform using this!
