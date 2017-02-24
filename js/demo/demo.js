/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {

    // Initialize the Gallery as image carousel:
	var carouselLinks = []
	carouselLinks.push({
        href: 'img/activity/104迎新茶會.jpg',
        title: '104迎新茶會'
	})
	carouselLinks.push({
        href: 'img/activity/系女籃2.jpg',
        title: '系女籃'
	})
	carouselLinks.push({
        href: 'img/activity/系女籃3.jpg',
        title: '系女籃'
	})
	carouselLinks.push({
        href: 'img/activity/系排1.jpg',
        title: '系排'
	})
	carouselLinks.push({
        href: 'img/activity/系排2.jpg',
        title: '系排'
	})
	carouselLinks.push({
        href: 'img/activity/系運壘球冠軍賽.JPG',
        title: '系運壘球冠軍賽'
	})
	carouselLinks.push({
        href: 'img/activity/系壘1.jpg',
        title: '系壘'
	})
	carouselLinks.push({
        href: 'img/activity/系籃1.jpg',
        title: '系籃'
	})
	carouselLinks.push({
        href: 'img/activity/制服日.jpg',
        title: '制服日'
	})
	carouselLinks.push({
        href: 'img/activity/新生營1.jpg',
        title: '新生營'
	})
	carouselLinks.push({
        href: 'img/activity/楓橋之夜.jpg',
        title: '楓橋之夜'
	})
	carouselLinks.push({
        href: 'img/activity/楓橋之夜2.jpg',
        title: '楓橋之夜'
	})
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })


})
