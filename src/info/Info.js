import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jorge",
    lastName: "Jaime",
    initials: "JLJS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🪙',
            text: 'web3 developer'
        },
        {
            emoji: '🌎',
            text: 'based in the Mexico'
        },
        {
            emoji: "💼",
            text: "Freelancer"
        },
        {
            emoji: "📧",
            text: "jorge.jaime@proton.me"
        }
    ],
    socials: [{
            link: "https://www.facebook.com/jorgeluis.jaime.7712",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/Traka-Dev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jorge-luis-jaime-s%C3%A1nchez-6a136a75/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/trakadev",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Jorge. I'm a self-tough full-stack developer with six years of experience. I studied industrial engineering, but my passion is building software. I enjoy working with teams to develop projects that impact people's lives and learning new things. Let's work together.",
    skills: {
        proficientWith: ['javascript', 'react', 'java', 'github', 'bootstrap', 'html5', 'css3', 'nodejs', 'php', 'react-native', 'mysql', 'mongodb'],
        exposedTo: ['python', 'adobe photoshop']
    },
    hobbies: [{
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Cybersecurity',
            emoji: '💻'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        }
    ],
    portfolio: [{
            title: "Sargatxet",
            live: "https://sargatxet.cloud/",
            source: "https://github.com/Traka-Dev",
            image: mock1
        },
        {
            title: "Bearded Buddies",
            live: "https://www.beardedbuddies.net/",
            source: "https://github.com/Traka-Dev/bearded-buddies-front-end-main",
            image: mock2
        },
        {
            title: "Rebel Racoons",
            live: "https://www.rebelracoons.com/",
            source: "https://github.com/Traka-Dev",
            image: mock3
        },
        {
            title: "Pixel Colors",
            live: "https://mint.pixelcolors.io/",
            source: "https://github.com/Traka-Dev",
            image: mock4
        },
        {
            title: "NFTIGZ",
            live: "https://mint.nftigz.com/",
            source: "https://github.com/Traka-Dev",
            image: mock5
        },
        {
            title: "WP Plugin Sargapay",
            live: "https://wordpress.org/plugins/sargapay/",
            source: "https://github.com/sargatxet/WooCommerce-sargapay",
            image: mock6
        },
        {
            title: "Ingenio Digital México",
            live: "https://www.ingeniodigitalmexico.com/",
            source: "https://github.com/Traka-Dev",
            image: mock7
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}