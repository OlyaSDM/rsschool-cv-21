# **Olya Safronova**

### Frontend Developer/Web Designer
![Photo](/rsschool-cv/avatar/photo.png)

### Contacts
* Location: Belarus
* GitHub: Olya2125
* Email: olyasafronova2125@gmail.com
* [Linkedin](https://www.linkedin.com/in/olya-safronova-42b560190/)

---

### About me

I am passionate about learning and developing intuitive and user-friendly apps. Fast learner who is focused on customer needs. I seek an environment and company that will allow me to fully exercise my passion for software development to build great products and drive maximum value for the business. I am constantly learning because I never settle.

---

### Technical Skills
* HTML5/CSS3
* JavaScript 
* Software testing
* SQL
* Bootstrap5
* React
* Git
* GitHub
* Redux
* Next.js
* Figma/Sketch
* After Effects
* Adobe Illustrator
* Adobe Photoshop

---

### Code Example

```
function myHappyBirthday() {
    const birthdayDate = new Date('October 23, 2024 00:00');
    const now = new Date();
    const days = birthdayDate - now;
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 *1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(days / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((days % msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((days % msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((days % msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (days <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timer);
        myBiirthday();
    }
}

let timer = setInterval(myHappyBirthday, 1000);

function myBiirthday() {
    const heading = document.querySelector('#heading');
    heading.textContent = ('My party is today')
}
```
---

### Experience

* Lead Engineer for Advertising, Marketing and Sales Management  (Oct 2007 — Oct 2008)  
* Entrepreneur (June 2009  – Nov 2020)  
* UX/UI Designer (Nov 2020  – Dec 2022)
* Frontend developer (Sept 2023 - current time)

---

### Projects 

* [Visainusa](https://visainusa.com/)
* [The weather now](https://mobile-app-weather.glitch.me/)
* [Timer](https://kitchen-timer-by-olya-safronova.glitch.me/)
* [Shopping-list](https://my-shopping-list---by-olya-safronova.glitch.me/)
* [Bath-complecs](https://bath-complecs-hogshead.glitch.me/)

---

### English

**B1**

---