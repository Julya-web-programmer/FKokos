document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const goalkeeper = document.getElementById('goalkeeper');
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');

    const leftButton = document.getElementById('left-button');
    const centerButton = document.getElementById('center-button');
    const rightButton = document.getElementById('right-button');

    let selectedDirection = null;
    let goals = 0;

    // document.addEventListener('keydown', (event) => {
    //     switch (event.key) {
    //         case 'ArrowLeft':
    //             selectedDirection = 'left';
    //             break;
    //         case 'ArrowRight':
    //             selectedDirection = 'right';
    //             break;
    //         case 'ArrowUp':
    //             selectedDirection = 'center';
    //             break;
    //     }
    // });

    leftButton.addEventListener('click', () => {
        selectedDirection = 'left';
    });

    centerButton.addEventListener('click', () => {
        selectedDirection = 'center';
    });

    rightButton.addEventListener('click', () => {
        selectedDirection = 'right';
    });

    ball.addEventListener('click', () => {
        if (!selectedDirection) {
            result.textContent = 'Сначала выберите направление!';
            return;
        }

        const goalkeeperPosition = ['left', 'center', 'right'][Math.floor(Math.random() * 3)];

        if (selectedDirection === goalkeeperPosition) {
            result.textContent = 'Вратарь спас!';
        } else {
            result.textContent = 'Гол!';
            goals = Math.min(goals + 1, 10);
            scoreDisplay.textContent = `${goals}/10`;
        }

        selectedDirection = null;

        moveGoalkeeper(goalkeeperPosition);
    });

    function moveGoalkeeper(position) {
        const positions = {
            left: '20%',
            center: '50%',
            right: '80%'
        };
        goalkeeper.style.left = positions[position];
        goalkeeper.style.transform = `translateX(-${positions[position]})`;
    }
});


//Кнопка свернуть
document.getElementById('hide').onclick = hide();

function hide() {
    var Game = document.getElementById('game-container');
    var button = document.getElementById('hide');

    if (Game.style.right === '-26vw') {
        Game.style.right = "0vw";
        
    }
    else {
        Game.style.right = "-26vw";
        
    }
}

