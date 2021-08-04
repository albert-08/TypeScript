"use strict";
// import { Album, PhotoOrientation, Picture, User } from './photo-app';
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'fribenitez', 'Frida', true);
const album = new album_1.Album(10, 'Frida Pictures');
const picture = new picture_1.Picture(1, 'Fri', '2020-03', photo_orientation_1.PhotoOrientation.Lanscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
// Borramos Album
user.removeAlbum(album);
console.log('user', user);
