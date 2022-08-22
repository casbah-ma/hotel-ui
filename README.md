## Introduction

---

<img src='https://res.cloudinary.com/casbah/image/upload/v1660900235/logos/1660584751398_dpb1ll.png' alt='Hotel UI logo' width="300" style="margin-left: 600px; margin-top:20px;" >

<h1 style="margin-left: 720px; border-bottom: 0px;">Hotel UI</h1>

---

- **Hotel UI** is a NextJS components Library that provides you with modern, reusable, fully tested UIs that follow accessibility best practices to help you build your amazing Hotel website.
- You can check the different components, or even ready sections, that are available at [hotels-storybook](https://hotels-storybook.vercel.app/].)
- The [hotels-storybook](https://hotels-storybook.vercel.app/].) contains the docs for each component and the proprieties it takes.
- If you want to take a glance at how some pages would come out, you can check them under the **pages** section at [hotels-storybook](https://hotels-storybook.vercel.app/].)
- Styled with `styled components` and `tailwindcss`

## Installation

**Hotel UI** is straightforward to setup and use:

1.  Install **Hotel Ui**:

    ```
    yarn add @redapy/hotels-components-casbah styled-components react-dates swiper
    ```

    - As we said before, this Library is using styled-components that's why we need to install it.
    - If you want to use our bookingBar, react-dates should be installed.
    - we are using [Swiper](https://swiperjs.com/react) for our sliders.

2.  Import styles and initialize reat-dates:

    - This is mainly to apply some tailwind classes that are passed directly with the `className` attribute. also, it's useful for the swiper and date picker styles.
    - In your `_app.js` page, after importing your global styles:

           ```
           import "react-dates/initialize";
           import "../styles/globals.css"; //your globale styles
           import "@redapy/hotels-components-casbah/index.css";
           import 'swiper/css'
           import 'swiper/css/navigation'
           ```

That's all to it, now you can import components

## How to use

You can import components in two ways:

```
import Button from "@redapy/hotels-components-casbah/Button";
```

or

```
import {Button, Dropdown} from "@redapy/hotels-components-casbah/";
```
