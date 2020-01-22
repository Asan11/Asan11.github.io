function getName(){
	let name = prompt("Введите своё имя...")

	if (name == "" || name == null){
		name = "Человек №13"
	}
	alert(name + ", нажми ОК чтобы начать тест.");
	return name
}

function test(){
	const name = getName();

	const questions = ["one","two"]
	const answers = ["wow","three"]

	let score = 0;
	for(let i = 0; i < questions.length; i++){
		let q = questions[i];
		let a = answers[i];
		let otvet = prompt("Вопрос №" + (i+1) + ":" + q);

		if (otvet == a) {
			score++;
		}
	}
	alert(name + ", вы набрали " + score + "/" + questions.length + "очков.");
}