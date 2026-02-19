const animals = [
    {
        img: "animal_images/animal_01.png",
        sound: "animal_sounds/animal_sound_01.wav",
        name: "sola sola nyvu"
    },
    {
        img: "animal_images/animal_02.png",
        sound: "animal_sounds/animal_sound_02.wav",
        name: "loma loma vyen"
    },
    {
        img: "animal_images/animal_03.png",
        sound: "animal_sounds/animal_sound_03.wav",
        name: "uwany wany selu"
    },
    {
        img: "animal_images/animal_04.png",
        sound: "animal_sounds/animal_sound_04.wav",
        name: "nylu nylu mavon"
    }
];

const img = document.getElementById("animalImage");
const nameText = document.getElementById("animalName");
const audio = document.getElementById("audioPlayer");
const volumeSlider = document.getElementById("volumeSlider");
const startButton = document.getElementById("startButton");

let index = 0;

function playAnimal(i) {
    const animal = animals[i];

    img.src = animal.img;
    nameText.textContent = animal.name;

    audio.src = animal.sound;
    audio.volume = volumeSlider.value;
    return audio.play();
}

audio.addEventListener("ended", () => {
    index = (index + 1) % animals.length;
    playAnimal(index);
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

startButton.addEventListener("click", async () => {
    startButton.disabled = true;
    startButton.textContent = "playing...";
    try {
        await playAnimal(index);
    } catch (err) {
        startButton.disabled = false;
        startButton.textContent = "start sounds";
        console.error("Autoplay blocked or failed:", err);
    }
});
