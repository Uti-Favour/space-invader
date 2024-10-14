// import shooter from '../public/shooter.png'
const canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'black';
document.body.appendChild(canvas);

//function to move the shooter
class moveShooter {
    x: string;
    y: string;

    constructor(x: string, y: string) {
        this.x = x;
        this.y = y;
    }
}

let move = () => {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                console.log('Clicked Up');
                break;
            case 'ArrowDown':
                console.log('Clicked Down');
                break;
            case 'ArrowRight':
                console.log('Clicked Right');
                break;
            case 'ArrowLeft':
                console.log('Clicked Left');
                break;
                
                
            default:
                break;
        }
    })
}

move();




//Invader
const invader = new Image();
invader.addEventListener('load', () => {
    ctx?.drawImage(invader, 10, 10);
});
invader.src = '/public/invader.png'


//Shooter
const shooter = new Image();
shooter.addEventListener('load', () => {
    ctx?.drawImage(shooter, innerWidth / 2, innerHeight / 1.1);
});
shooter.src = '/public/shooter.png'





