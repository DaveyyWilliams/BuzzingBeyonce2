function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  let mood = "";
  let emoji = "";

  if (mouseX < width / 3) {
    // Chill Beyoncé
    background(255, 220, 240); // pink
    mood = "🎶 “I’m feelin’ myself.”";
    emoji = "😎";
  } else if (mouseX > width * 2 / 3) {
    // Fierce Beyoncé
    background(255, 100, 100); // red
    mood = "🔥 “Bow down, b******.”";
    emoji = "👠";
  } else {
    // Confident Beyoncé
    background(200, 230, 255); // light blue
    mood = "💁 “I woke up like this.”";
    emoji = "💅";
  }

  // Show emoji
  textSize(80);
  text(emoji, width / 2, height / 2 - 40);

  // Show lyric
  textSize(16);
  fill(50);
  text(mood, width / 2, height / 2 + 40);

  // Show title
  fill(0);
  textSize(24);
  text("Which Beyoncé Are You Today?", width / 2, 40);
}
