import { Component, OnInit, Output } from '@angular/core';

const video = {
    title: String,
    publisher: String,
    views: String,
    timesincerelease: String,
    verified: Boolean,
    duration: String,
    url: String
};

@Output()
export class Othervideos implements OnInit {

    public othervideos = [
        {
            title: 'Hermitcraft S9 Episode 1: MEGA Start!',
            publisher: 'GoodTimesWithScar',
            views: '1.1M',
            timesincerelease: '6 days',
            verified: true,
            isnew: true,
            duration: '31:20',
            url: 'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/'
        },
        {
            title: 'e (Euler\'s Number) - Numberphile',
            publisher: 'Numberphile',
            views: '3.8M',
            timesincerelease: '5 years',
            verified: true,
            isnew: false,
            duration: '10:42',
            url: '../othervideos/clickbait2.jpg'
        },
        {
            title: 'Origins Plus - Minecraft Origins Mod',
            publisher: 'Krzair',
            views: '2.3k',
            timesincerelease: '11 hours',
            verified: false,
            isnew: true,
            duration: '8:09',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techsmith.com%2Fblog%2Fwhat-are-video-thumbnails%2F&psig=AOvVaw0TuGn44ZHlVoT2uRctwlyY&ust=1647307437076000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICFm6i5xPYCFQAAAAAdAAAAABAD'
        },
        {
            title: 'the BEST bad movie I\'ve ever seen',
            publisher: 'Cody Ko',
            views: '3.3M',
            timesincerelease: '1 year',
            verified: true,
            isnew: false,
            duration: '18:13',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techsmith.com%2Fblog%2Fwhat-are-video-thumbnails%2F&psig=AOvVaw0TuGn44ZHlVoT2uRctwlyY&ust=1647307437076000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICFm6i5xPYCFQAAAAAdAAAAABAD'
        },
        {
            title: 'Hermitcraft 9: Archer Statue! Episode 2',
            publisher: 'GeminiTay',
            views: '475k',
            timesincerelease: '4 days',
            verified: true,
            isnew: true,
            duration: '20:02',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techsmith.com%2Fblog%2Fwhat-are-video-thumbnails%2F&psig=AOvVaw0TuGn44ZHlVoT2uRctwlyY&ust=1647307437076000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICFm6i5xPYCFQAAAAAdAAAAABAD'
        },
    ]

    constructor() { }
  
    ngOnInit(): void { }
}