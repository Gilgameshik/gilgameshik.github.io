var USN5n, USN6n, ENVDn, OSNOn, PATENTn, OSNOENVDn, USNENVDn, Itogon, workersn;
USN5n = 0;
USN6n = 0;
ENVDn = 0;
OSNOn = 0;
OSNOENVDn = 0;
USNENVDn = 0;
workersn = 0;
PATENTn = 0;
Itogon = 0;
function USN5() {
		if (USN5n==10000) {
			document.getElementById('USN5').style.backgroundColor = "#D6D6D6";
			USN5n=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('USN6').disabled = false;
			document.getElementById('OSNO').disabled = false;
		}
		else {
			USN5n=10000;
			document.getElementById('USN5').style.backgroundColor = "#7D8B8E";
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('USN6').disabled = true;
			document.getElementById('OSNO').disabled = true;
		}
	};
function USN6() {
		if (USN6n==5000) {
			document.getElementById('USN6').style.backgroundColor = "#D6D6D6";
			USN6n=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('USN5').disabled = false;
			document.getElementById('OSNO').disabled = false;
		}
		else {
			document.getElementById('USN6').style.backgroundColor = "#7D8B8E";
			USN6n=5000;
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('USN5').disabled = true;
			document.getElementById('OSNO').disabled = true;
		}
	};
function ENVD() {
		if (ENVDn==4000) {
			document.getElementById('ENVD').style.backgroundColor = "#D6D6D6";
			ENVDn=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('PATENT').disabled = false;
				if (USN5n == 0){
					if (USN6n == 0){
						if (OSNOn == 0){
							document.getElementById('PATENT').disabled = false;
						}
					}
				}
		}
		else {
			document.getElementById('ENVD').style.backgroundColor = "#7D8B8E";
			ENVDn=4000;
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('PATENT').disabled = true;
		}
	};
function OSNO() {
		if (OSNOn==15000) {
			document.getElementById('OSNO').style.backgroundColor = "#D6D6D6";
			OSNOn=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('USN5').disabled = false;
			document.getElementById('USN6').disabled = false;
		}
		else {
			document.getElementById('OSNO').style.backgroundColor = "#7D8B8E";
			OSNOn=15000;
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('USN5').disabled = true;
			document.getElementById('USN6').disabled = true;
		};
};
function PATENT() {
		if (PATENTn==4000) {
			document.getElementById('PATENT').style.backgroundColor = "#D6D6D6";
			PATENTn=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('ENVD').disabled = false;
		}
		else {
			document.getElementById('PATENT').style.backgroundColor = "#7D8B8E";
			PATENTn=4000;
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
			document.getElementById('ENVD').disabled = true;
		};
};
function workers (){
		Itogon = Number(Itogon) - Number(workersn);
		workersn = document.getElementById('workers').value;
		workersn = Number(workersn)*1500;
		Itogon = Number(Itogon) + Number(workersn);
		document.getElementById('main22').innerHTML = Itogon;
}
/*function OSNOENVD() {
		if (OSNOENVDn==20000) {
			document.getElementById('OSNOENVD').style.backgroundColor = "#D6D6D6";
			OSNOENVDn=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
		}
		else {
			document.getElementById('OSNOENVD').style.backgroundColor = "#7D8B8E";
			OSNOENVDn=20000;
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
		}
	};
function USNENVD() {
		if (USNENVDn==15000) {
			document.getElementById('USNENVD').style.backgroundColor = "#D6D6D6";
			USNENVDn=0;
			Itogon = Number(Itogon) - 10000;
			document.getElementById('main22').innerHTML = Itogon;
		}
		else {
			document.getElementById('USNENVD').style.backgroundColor = "#7D8B8E";
			USNENVDn=15000;
			Itogon = Number(Itogon) + 10000;
			document.getElementById('main22').innerHTML = Itogon;
		}
	};
function Itogo () {
	workersn = document.getElementById('workers').value;
	workersn = Number(workersn);
	workersn = workersn * 1500;
	Itogon = USN6n + USN5n + ENVDn + OSNOn + OSNOENVDn + USNENVDn + PATENTn;
	Itogon = Number(Itogon);
	Itogon = Itogon + workersn;
	document.getElementById('main22').innerHTML = Itogon;
}*/