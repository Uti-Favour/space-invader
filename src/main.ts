// import shooter from '../public/shooter.png'
const canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'black';
document.body.appendChild(canvas);


//Game variables
let timeInterval = 100;


class Shooter {
    x: number;
    y: number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }



    createImage() {
        let position = 10;

        const img = new Image;
        img.addEventListener('load', () => {
            ctx?.drawImage(img, this.x, this.y);
        })
        img.src = 'public/shooter.png'


        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                //Move up
                case 'ArrowRight':
                    this.x + position;
                    console.log(this.x);

                    break;

                case 'ArrowLeft':
                    this.y + position;
                    console.log(this.y);
                    break;

                default:
                    break;
            }
        })
    }

    //This moves the shooter to left & right positions (x and y)
    moveShooter() {

    }

    //This releases bullets upon Arrow movement (For loop)
    releaseBullets() {
        let bullet = new Image();
        bullet.addEventListener('load', () => {
            ctx?.drawImage(bullet, this.x, this.y - 40, 30, 30)
        });
        bullet.src = 'public/bullets.png'
    }

    //Checks collition of the invader and shooter
    checkCollition() {

    }
}


const shot = new Shooter(window.innerWidth / 2, window.innerHeight / 1.1);
shot.createImage();
shot.releaseBullets();


//Logic for 
class Invader {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    generateInvader(){
        setInterval (() => {
         let invader = new Image();
         invader.addEventListener('load' , () => {
            ctx?.drawImage(invader , this.x, this.y++)
         })
        invader.src = '/public/invader.png'
         console.log('Hello World');
        } , timeInterval);
    }

    
}

const initInader = new Invader(50, 50);


initInader.generateInvader();

