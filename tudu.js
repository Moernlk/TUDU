
let tudu;

const savedTuDus = JSON.parse(localStorage.getItem('tudu'));

if(Array.isArray(savedTuDus)) {
  tudu = savedTuDus;
  render();
} else {
  tudu = [
  {
    title: "Primeiro Tudu",
    duedate: "28/02/2024",
    time: acttime,
    id: id,
  },
  ];
  render();
}
function createTuDu(subject, duedate, acttime) {
  const id = '' + new Date().getTime();

  tudu.push({
    title: subject,
    duedate: duedate,
    time: acttime,
    id: id,
  });
  saveTuDu();
}



//--Delete TuDu
function removeTuDu(idtoDelete) {
  tudu = tudu.filter(function (x) {
    if (x.id === idtoDelete) {
      return false; 
    } else {
      return true;
    };
  });
  saveTuDu();
}

function saveTuDu() {
  localStorage.setItem("tudu", JSON.stringify(tudu));
}

function render() {


  const doc = document.getElementById("listTuDu");
  doc.innerHTML = '';

  tudu.forEach(function (x) {

    var scrollableDiv = document.getElementById("listTuDu");
    console.log("Vertical scroll position:", scrollableDiv.scrollTop);
    console.log("Horizontal scroll position:", scrollableDiv.scrollLeft);


    //subject.innerText = x.title + " || " + x.time + " || " + x.duedate;
    const subject = document.createElement("div");
    subject.className = "line";

 
    const note = document.createElement("div");
    note.innerText = x.title;
    note.className = "tuDu-content";

    const time = document.createElement("div");
    time.innerText = x.time;
    time.className = "tuDu-TimeContent";

    const date = document.createElement("div");
    date.innerText = x.duedate;

    date.className = "tuDu-DateContent";

    const div = document.getElementById("listTuDu");

    
    const dellButton = document.createElement("button");
    dellButton.innerHTML =
      '<img style="position: center; width: 15px; height: 15px;" src="img/dellButton.png" />';
    dellButton.className = "dellbutt";

    const w = x.id;
    dellButton.onclick = function (){
      dellTuDu(w);
    };


    div.appendChild(subject);
    subject.appendChild(note);
    subject.appendChild(time);
    subject.appendChild(date);
    subject.appendChild(dellButton);

  });
}

function addTuDu(x) {
  document.getElementById("listTuDu").innerHTML = "";

  /*
  // ativa o botao com clicando na tecla "enter".
  const botao = document.getElementByClassName("add-button");
  document.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
      botao.click();
    }
  });
*/

  const sub = document.getElementById("subjectTuDu");
  const subject = sub.value;

  const date = document.getElementById("dateTuDu");
  const duedate = date.value;

  const time = document.getElementById("timeTuDu");
  const acttime = time.value;

  createTuDu(subject, duedate, acttime);

  render();
}

function dellTuDu(x) {
  const deleteBUTT = x;
  removeTuDu(deleteBUTT);
  render();
}
