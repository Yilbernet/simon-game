
const whileTime = time => (
    new Promise(resolve => 
        setTimeout(() => resolve(time), time)
    )
);

const sequence = async(colors) => {
    const yellow = document.querySelector('.yellow');
    const blue = document.querySelector('.blue');
    const red = document.querySelector('.red');
    const green = document.querySelector('.green');
    for (const item of colors) {
        const effect = new Audio('../../assets/button.mp3');
        // effect.volume = 0.5;
        effect.play();
        switch (item) {
            case 1: yellow.classList.toggle('active');
                    await whileTime(500);
                    console.log('yellow');
                    yellow.classList.toggle('active');
                    await whileTime(500);
                continue;
            case 2: blue.classList.toggle('active');
                    await whileTime(500);
                    console.log('blue');
                    blue.classList.toggle('active');
                    await whileTime(500);
                continue;
            case 3: red.classList.toggle('active');
                    await whileTime(500);
                    console.log('red');
                    red.classList.toggle('active');
                    await whileTime(500);
                continue;
            case 4: green.classList.toggle('active');
                    await whileTime(500);
                    console.log('green');
                    green.classList.toggle('active');
                    await whileTime(500);
        }
    }
    return false;
}

export default sequence;