var char, char2, walkDown_withoutWeapon, walkUp_withoutWeapon, walkRight_withoutWeapon, walkLeft_withoutWeapon, idleDown_withoutWeapon, idleUp_withoutWeapon, idleRight_withoutWeapon, idleLeft_withoutWeapon, deadth_anim, death2;
var walkDown_withWeapon, walkUp_withWeapon, walkRight_withWeapon, walkLeft_withWeapon, idleDown_withWeapon, idleUp_withWeapon, idleRight_withWeapon, idleLeft_withWeapon, attackDown_withWeapon, attackRight_withWeapon, attackLeft_withWeapon, attackUp_withWeapon;
var attackDown_withoutWeapon, attackUp_withoutWeapon, attackRight_withoutWeapon, attackLeft_withoutWeapon;
var rollDown_withoutWeapon, rollUp_withoutWeapon, rollRight_withoutWeapon, rollLeft_withoutWeapon, bg;
var y = null, y_char2 = null, speed = 4, walking_char = false, walking_char2 = false, char_dead = false, char2_dead = false, char_gun = false, char2_gun = false;;
var gunImg, gun, gunGRP, bullet, bullet2, bulletIMG;
var meds, medImg, medsGRP;
var hp_char = 100, hp_char2 = 100, char_score = 0, char2_score = 0, deathAnim_WAIT = 0, a = 5;
var bulletSound,bGrp,bGrp2;

function preload() {
    bg = loadImage("Images/Ground.png");
    gunImg = loadImage("Images/gun.png");
    medImg = loadImage("Images/Medikit.png");
    bulletIMG = loadImage("Images/Bullet.jpg")
    bulletSound = loadSound("Sound/gunshot.mp3")

    deadth_anim = loadAnimation("Images/Player/death animation/death1.png", "Images/Player/death animation/death2.png", "Images/Player/death animation/death3.png", "Images/Player/death animation/death4.png");//die

    idleDown_withoutWeapon = loadAnimation("Images/Player/Character without weapon/idle/idle down1.png", "Images/Player/Character without weapon/idle/idle down2.png", "Images/Player/Character without weapon/idle/idle down2.png", "Images/Player/Character without weapon/idle/idle down4.png");
    idleUp_withoutWeapon = loadAnimation("Images/Player/Character without weapon/idle/idle up1.png", "Images/Player/Character without weapon/idle/idle up2.png", "Images/Player/Character without weapon/idle/idle up3.png", "Images/Player/Character without weapon/idle/idle up4.png");
    idleRight_withoutWeapon = loadAnimation("Images/Player/Character without weapon/idle/idle right1.png", "Images/Player/Character without weapon/idle/idle right2.png", "Images/Player/Character without weapon/idle/idle right3.png", "Images/Player/Character without weapon/idle/idle right4.png");
    idleLeft_withoutWeapon = loadAnimation("Images/Player/Character without weapon/idle/idle left1.png", "Images/Player/Character without weapon/idle/idle left2.png", "Images/Player/Character without weapon/idle/idle left3.png", "Images/Player/Character without weapon/idle/idle left4.png");

    walkDown_withoutWeapon = loadAnimation("Images/Player/Character without weapon/walk/walk down1.png", "Images/Player/Character without weapon/walk/walk down2.png", "Images/Player/Character without weapon/walk/walk down3.png", "Images/Player/Character without weapon/walk/walk down4.png");
    walkUp_withoutWeapon = loadAnimation("Images/Player/Character without weapon/walk/walk up1.png", "Images/Player/Character without weapon/walk/walk up2.png", "Images/Player/Character without weapon/walk/walk up3.png", "Images/Player/Character without weapon/walk/walk up4.png");
    walkRight_withoutWeapon = loadAnimation("Images/Player/Character without weapon/walk/walk right1.png", "Images/Player/Character without weapon/walk/walk right2.png", "Images/Player/Character without weapon/walk/walk right3.png", "Images/Player/Character without weapon/walk/walk right4.png");
    walkLeft_withoutWeapon = loadAnimation("Images/Player/Character without weapon/walk/walk left1.png", "Images/Player/Character without weapon/walk/walk left2.png", "Images/Player/Character without weapon/walk/walk left3.png", "Images/Player/Character without weapon/walk/walk left4.png");

    attackDown_withoutWeapon = loadAnimation("Images/Player/Character without weapon/attack/attack down1.png", "Images/Player/Character without weapon/attack/attack down2.png", "Images/Player/Character without weapon/attack/attack down3.png", "Images/Player/Character without weapon/attack/attack down4.png");
    attackUp_withoutWeapon = loadAnimation("Images/Player/Character without weapon/attack/attack up1.png", "Images/Player/Character without weapon/attack/attack up2.png", "Images/Player/Character without weapon/attack/attack up3.png", "Images/Player/Character without weapon/attack/attack up4.png");
    attackRight_withoutWeapon = loadAnimation("Images/Player/Character without weapon/attack/attack right1.png", "Images/Player/Character without weapon/attack/attack right2.png", "Images/Player/Character without weapon/attack/attack right3.png", "Images/Player/Character without weapon/attack/attack right4.png");
    attackLeft_withoutWeapon = loadAnimation("Images/Player/Character without weapon/attack/attack left1.png", "Images/Player/Character without weapon/attack/attack left2.png", "Images/Player/Character without weapon/attack/attack left3.png", "Images/Player/Character without weapon/attack/attack left4.png");

    rollDown_withoutWeapon = loadAnimation("Images/Player/Character without weapon/roll/roll down1.png", "Images/Player/Character without weapon/roll/roll down2.png", "Images/Player/Character without weapon/roll/roll down3.png", "Images/Player/Character without weapon/roll/roll down4.png");
    rollUp_withoutWeapon = loadAnimation("Images/Player/Character without weapon/roll/roll up1.png", "Images/Player/Character without weapon/roll/roll up2.png", "Images/Player/Character without weapon/roll/roll up3.png", "Images/Player/Character without weapon/roll/roll up4.png");
    rollRight_withoutWeapon = loadAnimation("Images/Player/Character without weapon/roll/roll right1.png", "Images/Player/Character without weapon/roll/roll right2.png", "Images/Player/Character without weapon/roll/roll right3.png", "Images/Player/Character without weapon/roll/roll right4.png");
    rollLeft_withoutWeapon = loadAnimation("Images/Player/Character without weapon/roll/roll left1.png", "Images/Player/Character without weapon/roll/roll left2.png", "Images/Player/Character without weapon/roll/roll left3.png", "Images/Player/Character without weapon/roll/roll left4.png");

    walkDown_withWeapon = loadAnimation("Images/Player/Character with pistol/walk/walk down1.png", "Images/Player/Character with pistol/walk/walk down2.png", "Images/Player/Character with pistol/walk/walk down3.png", "Images/Player/Character with pistol/walk/walk down4.png")
    walkUp_withWeapon = loadAnimation("Images/Player/Character with pistol/walk/walk up1.png", "Images/Player/Character with pistol/walk/walk up2.png", "Images/Player/Character with pistol/walk/walk up3.png", "Images/Player/Character with pistol/walk/walk up4.png")
    walkRight_withWeapon = loadAnimation("Images/Player/Character with pistol/walk/walk right1.png", "Images/Player/Character with pistol/walk/walk right2.png", "Images/Player/Character with pistol/walk/walk right3.png", "Images/Player/Character with pistol/walk/walk right4.png")
    walkLeft_withWeapon = loadAnimation("Images/Player/Character with pistol/walk/walk left1.png", "Images/Player/Character with pistol/walk/walk left2.png", "Images/Player/Character with pistol/walk/walk left3.png", "Images/Player/Character with pistol/walk/walk left4.png")

    idleDown_withWeapon = loadAnimation("Images/Player/Character with pistol/idle/idle down1.png", "Images/Player/Character with pistol/idle/idle down2.png", "Images/Player/Character with pistol/idle/idle down3.png", "Images/Player/Character with pistol/idle/idle down4.png")
    idleUp_withWeapon = loadAnimation("Images/Player/Character with pistol/idle/idle up1.png", "Images/Player/Character with pistol/idle/idle up2.png", "Images/Player/Character with pistol/idle/idle up3.png", "Images/Player/Character with pistol/idle/idle up4.png")
    idleRight_withWeapon = loadAnimation("Images/Player/Character with pistol/idle/idle right1.png", "Images/Player/Character with pistol/idle/idle right2.png", "Images/Player/Character with pistol/idle/idle right3.png", "Images/Player/Character with pistol/idle/idle right4.png")
    idleLeft_withWeapon = loadAnimation("Images/Player/Character with pistol/idle/idle left1.png", "Images/Player/Character with pistol/idle/idle left2.png", "Images/Player/Character with pistol/idle/idle left3.png", "Images/Player/Character with pistol/idle/idle left4.png")

    attackDown_withWeapon = loadAnimation("Images/Player/Character with pistol/attack/shoot down1.png", "Images/Player/Character with pistol/attack/shoot down2.png", "Images/Player/Character with pistol/attack/shoot down3.png", "Images/Player/Character with pistol/attack/shoot down4.png")
    attackUp_withWeapon = loadAnimation("Images/Player/Character with pistol/attack/shoot up1.png", "Images/Player/Character with pistol/attack/shoot up2.png", "Images/Player/Character with pistol/attack/shoot up3.png", "Images/Player/Character with pistol/attack/shoot up4.png")
    attackRight_withWeapon = loadAnimation("Images/Player/Character with pistol/attack/shoot right1.png", "Images/Player/Character with pistol/attack/shoot right2.png", "Images/Player/Character with pistol/attack/shoot right3.png", "Images/Player/Character with pistol/attack/shoot right4.png")
    attackLeft_withWeapon = loadAnimation("Images/Player/Character with pistol/attack/shoot left1.png", "Images/Player/Character with pistol/attack/shoot left2.png", "Images/Player/Character with pistol/attack/shoot left3.png", "Images/Player/Character with pistol/attack/shoot left4.png")

}

function setup() {
    createCanvas(displayWidth - 30, displayHeight - 140);

    char_1();
    char_2();

    gunGRP = new Group();
    bGrp = new Group();
    bGrp2 = new Group();
    medsGRP = new Group();
}

function draw() {
    background(bg);

    if (char_gun === false) {
        walk_without_weapon_char();
        atttack_without_weapon_char();
        roll_without_weapon_char();
    } else if (char_gun === true) {
        walk_with_weapon_char();
        atttack_with_weapon_char();
    }

    if (char2_gun === false) {
        walk_without_weapon_char2();
        atttack_without_weapon_char2();
        roll_without_weapon_char2();
    } else if (char2_gun === true) {
        walk_with_weapon_char2();
        atttack_with_weapon_char2();
    }

    spawn_guns();
    spawn_meds();
    spwan_char();
    spwan_char2();

    drawSprites();

    textSize(24)
    fill("yellow")
    stroke("black");
    if (hp_char > 0) {
        text(`Player 1 HEALTH: ${Math.round(hp_char)}%`, displayWidth - 300, 50)
    } else {
        text(`Player 1 HEALTH: 0%`, displayWidth - 300, 50)
    }
    if (hp_char2 > 0) {
        text(`Player 2 HEALTH: ${Math.round(hp_char2)}%`, displayWidth - 1520, 50)
    }
    else {
        text(`Player 2 HEALTH: 0%`, displayWidth - 1520, 50)
    }

    text(`Player 1 SCORE: ${Math.round(char_score)}`, displayWidth - 300, 80)
    text(`Player 2 SCORE: ${Math.round(char2_score)}`, displayWidth - 1520, 80)
}

function char_1() {
    char = createSprite(width / 2, height / 2, 10, 10);
    char.scale = 4;
    char.setCollider("rectangle", 0, 0, 10, 10);

    char.addAnimation("idleDown_withoutWeapon", idleDown_withoutWeapon);
    char.addAnimation("idleUp_withoutWeapon", idleUp_withoutWeapon);
    char.addAnimation("idleRight_withoutWeapon", idleRight_withoutWeapon);
    char.addAnimation("idleLeft_withoutWeapon", idleLeft_withoutWeapon);

    char.addAnimation("walkDown_withoutWeapon", walkDown_withoutWeapon);
    char.addAnimation("walkUp_withoutWeapon", walkUp_withoutWeapon);
    char.addAnimation("walkRight_withoutWeapon", walkRight_withoutWeapon);
    char.addAnimation("walkLeft_withoutWeapon", walkLeft_withoutWeapon);

    char.addAnimation("attackDown_withoutWeapon", attackDown_withoutWeapon);
    char.addAnimation("attackUp_withoutWeapon", attackUp_withoutWeapon);
    char.addAnimation("attackRight_withoutWeapon", attackRight_withoutWeapon);
    char.addAnimation("attackLeft_withoutWeapon", attackLeft_withoutWeapon);

    char.addAnimation("rollDown_withoutWeapon", rollDown_withoutWeapon);
    char.addAnimation("rollUp_withoutWeapon", rollUp_withoutWeapon);
    char.addAnimation("rollRight_withoutWeapon", rollRight_withoutWeapon);
    char.addAnimation("rollLeft_withoutWeapon", rollLeft_withoutWeapon);

    char.addAnimation("walkDown_withWeapon", walkDown_withWeapon);
    char.addAnimation("walkUp_withWeapon", walkUp_withWeapon);
    char.addAnimation("walkRight_withWeapon", walkRight_withWeapon);
    char.addAnimation("walkLeft_withWeapon", walkLeft_withWeapon);

    char.addAnimation("idleDown_withWeapon", idleDown_withWeapon);
    char.addAnimation("idleUp_withWeapon", idleUp_withWeapon);
    char.addAnimation("idleRight_withWeapon", idleRight_withWeapon);
    char.addAnimation("idleLeft_withWeapon", idleLeft_withWeapon);

    char.addAnimation("attackDown_withWeapon", attackDown_withWeapon)
    char.addAnimation("attackUp_withWeapon", attackUp_withWeapon)
    char.addAnimation("attackRight_withWeapon", attackRight_withWeapon)
    char.addAnimation("attackLeft_withWeapon", attackLeft_withWeapon)

    char.addAnimation("death_anim", deadth_anim);
}

function char_2() {
    char2 = createSprite(width / 4, height / 4, 10, 10);
    char2.scale = 4;
    char2.setCollider("rectangle", 0, 0, 10, 10)
    char2.debug = true

    char2.addAnimation("idleDown_withoutWeapon", idleDown_withoutWeapon);
    char2.addAnimation("idleUp_withoutWeapon", idleUp_withoutWeapon);
    char2.addAnimation("idleRight_withoutWeapon", idleRight_withoutWeapon);
    char2.addAnimation("idleLeft_withoutWeapon", idleLeft_withoutWeapon);

    char2.addAnimation("walkDown_withoutWeapon", walkDown_withoutWeapon);
    char2.addAnimation("walkUp_withoutWeapon", walkUp_withoutWeapon);
    char2.addAnimation("walkRight_withoutWeapon", walkRight_withoutWeapon);
    char2.addAnimation("walkLeft_withoutWeapon", walkLeft_withoutWeapon);

    char2.addAnimation("attackDown_withoutWeapon", attackDown_withoutWeapon);
    char2.addAnimation("attackUp_withoutWeapon", attackUp_withoutWeapon);
    char2.addAnimation("attackRight_withoutWeapon", attackRight_withoutWeapon);
    char2.addAnimation("attackLeft_withoutWeapon", attackLeft_withoutWeapon);

    char2.addAnimation("rollDown_withoutWeapon", rollDown_withoutWeapon);
    char2.addAnimation("rollUp_withoutWeapon", rollUp_withoutWeapon);
    char2.addAnimation("rollRight_withoutWeapon", rollRight_withoutWeapon);
    char2.addAnimation("rollLeft_withoutWeapon", rollLeft_withoutWeapon);

    char2.addAnimation("walkDown_withWeapon", walkDown_withWeapon);
    char2.addAnimation("walkUp_withWeapon", walkUp_withWeapon);
    char2.addAnimation("walkRight_withWeapon", walkRight_withWeapon);
    char2.addAnimation("walkLeft_withWeapon", walkLeft_withWeapon);

    char2.addAnimation("idleDown_withWeapon", idleDown_withWeapon);
    char2.addAnimation("idleUp_withWeapon", idleUp_withWeapon);
    char2.addAnimation("idleRight_withWeapon", idleRight_withWeapon);
    char2.addAnimation("idleLeft_withWeapon", idleLeft_withWeapon);

    char2.addAnimation("attackDown_withWeapon", attackDown_withWeapon)
    char2.addAnimation("attackUp_withWeapon", attackUp_withWeapon)
    char2.addAnimation("attackRight_withWeapon", attackRight_withWeapon)
    char2.addAnimation("attackLeft_withWeapon", attackLeft_withWeapon)

    char2.addAnimation("death_anim", deadth_anim);
}

function walk_without_weapon_char() {
    if (keyDown("right")) {
        char.x += speed;
        y = "right";
        walking_char = true;
        char.changeAnimation("walkRight_withoutWeapon", walkRight_withoutWeapon);
    } else if (y === "right") {
        char.changeAnimation("idleRight_withoutWeapon", idleRight_withoutWeapon);
        walking_char = false
    }
    if (keyDown("left")) {
        char.x -= speed;
        y = "left";
        walking_char = true
        char.changeAnimation("walkLeft_withoutWeapon", walkLeft_withoutWeapon);
    } else if (y === "left") {
        char.changeAnimation("idleLeft_withoutWeapon", idleLeft_withoutWeapon);
        walking_char = false
    }
    if (keyDown("up")) {
        char.y -= speed;
        y = "up";
        walking_char = true
        char.changeAnimation("walkUp_withoutWeapon", walkUp_withoutWeapon);
    } else if (y === "up") {
        char.changeAnimation("idleUp_withoutWeapon", idleUp_withoutWeapon);
        walking_char = false
    }
    if (keyDown("down")) {
        char.y += speed;
        y = "down";
        walking_char = true
        char.changeAnimation("walkDown_withoutWeapon", walkDown_withoutWeapon);
    } else if (y === "down") {
        char.changeAnimation("idleDown_withoutWeapon", idleDown_withoutWeapon);
        walking_char = false
    }
}

function walk_without_weapon_char2() {
    if (keyDown("d")) {
        char2.x += speed;
        y_char2 = "right";
        walking_char2 = true;
        char2.changeAnimation("walkRight_withoutWeapon", walkRight_withoutWeapon);
    } else if (y_char2 === "right") {
        char2.changeAnimation("idleRight_withoutWeapon", idleRight_withoutWeapon);
        walking_char2 = false
    }
    if (keyDown("a")) {
        char2.x -= speed;
        y_char2 = "left";
        walking_char2 = true
        char2.changeAnimation("walkLeft_withoutWeapon", walkLeft_withoutWeapon);
    } else if (y_char2 === "left") {
        char2.changeAnimation("idleLeft_withoutWeapon", idleLeft_withoutWeapon);
        walking_char2 = false
    }
    if (keyDown("w")) {
        char2.y -= speed;
        y_char2 = "up";
        walking_char2 = true
        char2.changeAnimation("walkUp_withoutWeapon", walkUp_withoutWeapon);
    } else if (y_char2 === "up") {
        char2.changeAnimation("idleUp_withoutWeapon", idleUp_withoutWeapon);
        walking_char2 = false
    }
    if (keyDown("s")) {
        char2.y += speed;
        y_char2 = "down";
        walking_char2 = true
        char2.changeAnimation("walkDown_withoutWeapon", walkDown_withoutWeapon);
    } else if (y_char2 === "down") {
        char2.changeAnimation("idleDown_withoutWeapon", idleDown_withoutWeapon);
        walking_char2 = false
    }
}

function atttack_without_weapon_char() {
    if (keyDown("shift")) {
        if (y === "down") {
            char.changeAnimation("attackDown_withoutWeapon", attackDown_withoutWeapon);
        }

        if (y === "up") {
            char.changeAnimation("attackUp_withoutWeapon", attackUp_withoutWeapon);
        }

        if (y === "right") {
            char.changeAnimation("attackRight_withoutWeapon", attackRight_withoutWeapon);
        }

        if (y === "left") {
            char.changeAnimation("attackLeft_withoutWeapon", attackLeft_withoutWeapon);
        }

        if (char.isTouching(char2)) {
            hp_char2 -= 1.5;
        }
    }

    if (hp_char2 < 0) {
        char2.changeAnimation("death_anim", deadth_anim);
        deathAnim_WAIT += 1
        if (deathAnim_WAIT > 16) {
            char2.destroy();
            hp_char2 = 0
            char_score += 1
            char2_dead = true;
            deathAnim_WAIT = 0
        }
    }
}

function atttack_without_weapon_char2() {
    if (keyDown("space")) {
        if (y_char2 === "down") {
            char2.changeAnimation("attackDown_withoutWeapon", attackDown_withoutWeapon);
        }

        if (y_char2 === "up") {
            char2.changeAnimation("attackUp_withoutWeapon", attackUp_withoutWeapon);
        }

        if (y_char2 === "right") {
            char2.changeAnimation("attackRight_withoutWeapon", attackRight_withoutWeapon);
        }

        if (y_char2 === "left") {
            char2.changeAnimation("attackLeft_withoutWeapon", attackLeft_withoutWeapon);
        }

        if (char2.isTouching(char)) {
            hp_char -= 1.5;
        }
    }
    if (hp_char < 0) {
        char.changeAnimation("death_anim", deadth_anim);
        deathAnim_WAIT += 1
        if (deathAnim_WAIT > 16) {
            char.destroy();
            hp_char = 0
            char2_score += 1
            char_dead = true;
            deathAnim_WAIT = 0
        }
    }
}

function roll_without_weapon_char() {
    if (keyDown("l") && walking_char === true) {
        if (y === "down") {
            char.changeAnimation("rollDown_withoutWeapon", rollDown_withoutWeapon);
        }

        if (y === "up") {
            char.changeAnimation("rollUp_withoutWeapon", rollUp_withoutWeapon);
        }

        if (y === "right") {
            char.changeAnimation("rollRight_withoutWeapon", rollRight_withoutWeapon);
        }

        if (y === "left") {
            char.changeAnimation("rollLeft_withoutWeapon", rollLeft_withoutWeapon);
        }
    }
}

function roll_without_weapon_char2() {
    if (keyDown("r") && walking_char2 === true) {
        if (y_char2 === "down") {
            char2.changeAnimation("rollDown_withoutWeapon", rollDown_withoutWeapon);
        }

        if (y_char2 === "up") {
            char2.changeAnimation("rollUp_withoutWeapon", rollUp_withoutWeapon);
        }

        if (y_char2 === "right") {
            char2.changeAnimation("rollRight_withoutWeapon", rollRight_withoutWeapon);
        }

        if (y_char2 === "left") {
            char2.changeAnimation("rollLeft_withoutWeapon", rollLeft_withoutWeapon);
        }
    }
}

function walk_with_weapon_char() {
    if (keyDown("right")) {
        char.x += speed;
        y = "right";
        walking_char = true;
        char.changeAnimation("walkRight_withWeapon", walkRight_withWeapon);
    } else if (y === "right") {
        char.changeAnimation("idleRight_withWeapon", idleRight_withWeapon);
        walking_char = false
    }
    if (keyDown("left")) {
        char.x -= speed;
        y = "left";
        walking_char = true
        char.changeAnimation("walkLeft_withWeapon", walkLeft_withWeapon);
    } else if (y === "left") {
        char.changeAnimation("idleLeft_withWeapon", idleLeft_withWeapon);
        walking_char = false
    }
    if (keyDown("up")) {
        char.y -= speed;
        y = "up";
        walking_char = true
        char.changeAnimation("walkUp_withWeapon", walkUp_withWeapon);
    } else if (y === "up") {
        char.changeAnimation("idleUp_withWeapon", idleUp_withWeapon);
        walking_char = false
    }
    if (keyDown("down")) {
        char.y += speed;
        y = "down";
        walking_char = true
        char.changeAnimation("walkDown_withWeapon", walkDown_withWeapon);
    } else if (y === "down") {
        char.changeAnimation("idleDown_withWeapon", idleDown_withWeapon);
        walking_char = false
    }
}

function walk_with_weapon_char2() {
    if (keyDown("d")) {
        char2.x += speed;
        y_char2 = "right";
        walking_char2 = true;
        char2.changeAnimation("walkRight_withWeapon", walkRight_withWeapon);
    } else if (y_char2 === "right") {
        char2.changeAnimation("idleRight_withWeapon", idleRight_withWeapon);
        walking_char2 = false
    }
    if (keyDown("a")) {
        char2.x -= speed;
        y_char2 = "left";
        walking_char2 = true
        char2.changeAnimation("walkLeft_withWeapon", walkLeft_withWeapon);
    } else if (y_char2 === "left") {
        char2.changeAnimation("idleLeft_withWeapon", idleLeft_withWeapon);
        walking_char2 = false
    }
    if (keyDown("w")) {
        char2.y -= speed;
        y_char2 = "up";
        walking_char2 = true
        char2.changeAnimation("walkUp_withWeapon", walkUp_withWeapon);
    } else if (y_char2 === "up") {
        char2.changeAnimation("idleUp_withWeapon", idleUp_withWeapon);
        walking_char2 = false
    }
    if (keyDown("s")) {
        char2.y += speed;
        y_char2 = "down";
        walking_char2 = true
        char2.changeAnimation("walkDown_withWeapon", walkDown_withWeapon);
    } else if (y_char2 === "down") {
        char2.changeAnimation("idleDown_withWeapon", idleDown_withWeapon);
        walking_char2 = false
    }
}

function atttack_with_weapon_char() {
    if (keyDown("o")) {
        if (y === "down" && hp_char > 0) {
            char.changeAnimation("attackDown_withWeapon", attackDown_withWeapon);
            bullets_char()
            bGrp.setVelocityEach(0,30);
        }

        if (y === "up" && hp_char > 0) {
            char.changeAnimation("attackUp_withWeapon", attackUp_withWeapon);
            bullets_char()
            bGrp.setVelocityEach(0,-30);
        }

        if (y === "right" && hp_char > 0) {
            char.changeAnimation("attackRight_withWeapon", attackRight_withWeapon);
            bullets_char()
            bGrp.setVelocityEach(30,0);
        }

        if (y === "left" && hp_char > 0) {
            char.changeAnimation("attackLeft_withWeapon", attackLeft_withWeapon);
            bullets_char()
            bGrp.setVelocityEach(-30,0);
        }

        if (char.isTouching(char2)) {
            hp_char2 -= 1.5;
        }

        if (bGrp.isTouching(char2)) {
            hp_char2 -= 10;
        }
    }



    if (hp_char2 < 0) {
        char2.changeAnimation("death_anim", deadth_anim);
        deathAnim_WAIT += 1
        if (deathAnim_WAIT > 16) {
            char2.destroy();
            hp_char2 = 0
            char_score += 1
            char2_dead = true;
            deathAnim_WAIT = 0
        }
    }
}

function atttack_with_weapon_char2() {
    if (keyDown("space")) {
        if (y_char2 === "down" && hp_char2 != 0) {
            char2.changeAnimation("attackDown_withWeapon", attackDown_withWeapon);
            bullets_char2()
            bGrp2.setVelocityEach(0,30);
        }

        if (y_char2 === "up" && hp_char2 != 0) {
            char2.changeAnimation("attackUp_withWeapon", attackUp_withWeapon);
            bullets_char2()
            bGrp2.setVelocityEach(0,-30);
        }

        if (y_char2 === "right" && hp_char2 != 0) {
            char2.changeAnimation("attackRight_withWeapon", attackRight_withWeapon);
            bullets_char2()
            bGrp2.setVelocityEach(30,0);
        }

        if (y_char2 === "left" && hp_char2 != 0) {
            char2.changeAnimation("attackLeft_withWeapon", attackLeft_withWeapon);
            bullets_char2()
            bGrp2.setVelocityEach(-30,0);
        }

        if (char2.isTouching(char)) {
            hp_char -= 1.5;
        }
        
        if (bGrp2.isTouching(char)) {
            hp_char -= 10;
        }
    }

    if (hp_char < 0) {
        char.changeAnimation("death_anim", deadth_anim);
        deathAnim_WAIT += 1
        if (deathAnim_WAIT > 16) {
            char.destroy();
            hp_char = 0
            char2_score += 1
            char_dead = true;
            deathAnim_WAIT = 0
        }
    }
}

function bullets_char() {
    if (frameCount % 14 === 0) {
        bullet = createSprite(char.x,char.y,10,10);
        //bullet.visible = false;
        bullet.debug = true
        bullet.setCollider("rectangle", 0, 0, 30, 30);
        console.log(a);
        //bullet.visible = true
        bulletSound.play();
        bullet.addImage(bulletIMG);
        // bullet.x = char.x
        // bullet.y = char.y
        bullet.lifetime = width/30;
        bullet.scale = 0.02
        a = 1
        bGrp.add(bullet);
    }
}

function bullets_char2() {
    if (frameCount % 15 === 0) {
        bullet2 = createSprite(char2.x, char2.y, 10, 10);
        //bullet2.visible = false
        bullet2.debug = true
        bullet2.setCollider("rectangle", 0, 0, 30, 30);
        console.log(a);
        bulletSound.play();
        bullet2.addImage(bulletIMG);
        // bullet2.x = char2.x
        // bullet2.y = char2.y
        bullet2.lifetime = width/30;
        bullet2.scale = 0.02
        bGrp2.add(bullet2);
    }
}

function spawn_guns() {
    if (frameCount % 30 === 0) {
        gun = createSprite(Math.round(random(0, 1080)), Math.round(random(0, 1920)), 10, 10);
        gun.addImage(gunImg);
        gun.scale = 0.15;
        gun.lifetime = 200;
        gunGRP.add(gun);
    }
    if (gunGRP.isTouching(char)) {
        console.log("Character 1 is now holding gun")
        char_gun = true;
        gunGRP.destroyEach();
    }
    if (gunGRP.isTouching(char2)) {
        console.log("Character 2 is now holding gun")
        char2_gun = true;
        gunGRP.destroyEach();
    }
}

function spawn_meds() {
    if (frameCount % 300 === 0) {
        meds = createSprite(Math.round(random(0, 1080)), Math.round(random(0, 1920)), 10, 10);
        meds.addImage(medImg);
        meds.scale = 0.15;
        meds.lifetime = 200;
        medsGRP.add(meds);
    }
    if (medsGRP.isTouching(char)) {
        console.log("Healed Chatacter 1")
        hp_char = 100
        medsGRP.destroyEach();
    }
    if (medsGRP.isTouching(char2)) {
        console.log("Healed Chatacter 2");
        hp_char2 = 100
        medsGRP.destroyEach();
    }
}

function spwan_char() {
    if (char_dead === true) {
        if (frameCount % 180 === 0) {
            char_dead = false;
            console.log("all ok")
            hp_char = 100
            char_1();
        }
    }
}

function spwan_char2() {
    if (char2_dead === true) {
        if (frameCount % 180 === 0) {
            char2_dead = false
            hp_char2 = 100
            char_2();
        }
    }
}