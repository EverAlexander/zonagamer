const CLIENT_ID = '199068632078-jqqce2lab71plomvblqlj60p05d7siam.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAs8iEM2khSPKICutk0A-Zf7EulMpq5c1I'; // opcional para hojas públicas
const SPREADSHEET_ID = '1jcP5Kwh903YSN4sXV4CCC6EAUOwxM1rTmk339Evlh-I';
const RANGE = 'prestamosnivel6!A1:Z1000';

const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function initClient() {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,       // útil si la hoja es pública
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      document.getElementById('login').onclick = handleAuthClick;
    });
  });
}

function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn().then(fetchSheetData);
}

function fetchSheetData() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE
  }).then(response => {
    const datos = response.result.values;
    mostrarDatos(datos);
  }, err => {
    document.getElementById('mensaje').textContent = "Error: " + err.result.error.message;
  });
}

function mostrarDatos(datos) {
  const mensaje = document.getElementById("mensaje");
  const tabla = document.getElementById("tabla");
  const thead = tabla.querySelector("thead");
  const tbody = tabla.querySelector("tbody");

  thead.innerHTML = "";
  tbody.innerHTML = "";
  mensaje.textContent = "";

  if (!datos || datos.length === 0) {
    mensaje.textContent = "No hay datos para mostrar";
    return;
  }

  const headers = datos[0];
  const trHead = document.createElement("tr");
  headers.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  for (let i = 1; i < datos.length; i++) {
    const tr = document.createElement("tr");
    datos[i].forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
}

window.onload = initClient;
