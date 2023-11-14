let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

const isHit = () => Math.random() > .5
const shipCanFire = () => shipHealth > 0 && shipAmmo > 0
const isDestroyed = health => health <= 0

function reloadShip() {
  shipHealth--
  shipAmmo += 3
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}