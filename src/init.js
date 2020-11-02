import game from './gameState';

const TICK_RATE = 3000;

const init = async () => {
  console.log( "Starting a game" );

  let nextTimeToTick = Date.now();

  const nextAnimationFrame = () => {
    const now = Date.now();

    if ( nextTimeToTick <= now ) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame( nextAnimationFrame );
  }

  requestAnimationFrame( nextAnimationFrame );
}

init();
