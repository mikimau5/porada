const addBtn = document.body.querySelector('.add');
const resetBtn = document.body.querySelector('.clean');
const adviceBtn = document.body.querySelector('.showAdvice');
const optionsBtn = document.body.querySelector('.showOptions');

const h1 = document.body.querySelector('h1');

const abilitys = ["Walcz", "Przemyśl to jeszcze raz"];


const addAbility = (e) => {
    e.preventDefault();
    const input = document.body.querySelector('input');
    abilitys.push(input.value);
    alert(`Dodałeś ${input.value}`);
    input.value = "";
};


const resetAbility = (e) => {
    e.preventDefault();
    abilitys.length = 0;
    h1.textContent = "";
}

const abilityGenerate = () => {
    const index = Math.floor(Math.random() * abilitys.length);
    h1.textContent = abilitys[index];
};

const showOptions = () => {
    alert(`Możliwe opcje to: ${abilitys.join("; ")}`);
};

addBtn.addEventListener('click', addAbility);

resetBtn.addEventListener('click', resetAbility);

adviceBtn.addEventListener('click', abilityGenerate);

optionsBtn.addEventListener('click', showOptions);