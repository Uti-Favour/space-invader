// import shooter from '../public/shooter.png'
const canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'black';
document.body.appendChild(canvas);




class Shooter {

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    x: number;
    y: number;


    createImage() {

        let right = 10, left = 10;

        const img = new Image;
        img.addEventListener('load', () => {
            ctx?.drawImage(img, right * this.x, left * this.y);
        })
        img.src = 'public/shooter.png'


        document.addEventListener('keydown' , (e) => {
         switch (e.key) {
            //Move up
            case 'ArrowRight':
                this.x++;
                break;

            case 'ArrowLeft':
                this.y++;
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
            bullet.addEventListener('load' , ()=> {
            ctx?.drawImage(bullet , 10, 10)
            });
    }

    //Checks collition of the invader and shooter
    checkCollition() {

    }
}


