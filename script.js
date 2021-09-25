const caution = document.querySelector(".caution");
const time = document.querySelector(".time");
const buzzer = document.querySelector(".buzzer");
const lock = document.querySelector(".check");
const reset = document.querySelector(".reset");
const sound = document.querySelector(".sound");

reset.addEventListener("mousedown", () => {
	if (lock.classList.contains("lock")) {
		lock.classList.remove("lock");
		unlockTimer();
		time.innerText = "Buzzer!!";
	}
});

lock.addEventListener("mousedown", () => {
	lock.classList.toggle("lock");
	if (lock.classList.contains("lock")) {
		lockTimer();
	} else {
		unlockTimer();
	}
});

buzzer.addEventListener("mousedown", () => {
	if (!lock.classList.contains("lock")) {
		let curr = new Date();
		let m = formatTime(curr.getMinutes());
		let s = formatTime(curr.getSeconds());
		let ms = formatTime(curr.getMilliseconds());
		sound.src = document.querySelector(".sound-select").value;
		sound.currentTime = 0;
		sound.play();
		time.innerText = `${m}:${s}:${ms}`;

		lock.classList.add("lock");
		lockTimer();
	}
});

function lockTimer() {
	lock.style.backgroundColor = "red";
	lock.innerHTML = `<i class="fas fa-lock"></i>`;
	caution.style.opacity = "1";
}

function unlockTimer() {
	sound.pause();
	lock.style.backgroundColor = "yellow";
	lock.innerHTML = `<i class="fas fa-lock-open"></i>`;
	caution.style.opacity = "0";
}

function formatTime(time) {
	if (time > 99) return `${parseInt(time / 10)}`;
	return time < 10 ? `0${time}` : time;
}

function changeSound(e) {
	const selectionValue = e.target.value;
	switch (selectionName) {
		case "kick-select":
			this.kickAudio.src = selectionValue;
			break;
		case "snare-select":
			this.snareAudio.src = selectionValue;
			break;
		case "hihat-select":
			this.hihatAudio.src = selectionValue;
			break;
	}
}
