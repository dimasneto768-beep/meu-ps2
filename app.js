const fileInput = document.getElementById("game-file");
const fileResult = document.getElementById("file-result");
const buttonStatus = document.getElementById("button-status");
const infoButton = document.getElementById("connect-info");
const info = document.getElementById("integration-info");
const screen = document.getElementById("screen");
const screenMessage = document.getElementById("screen-message");

fileInput.addEventListener("change", () => {
  const file = fileInput.files && fileInput.files[0];
  if (!file) {
    fileResult.textContent = "Nenhum arquivo selecionado.";
    return;
  }
  const mb = (file.size / (1024 * 1024)).toFixed(1);
  fileResult.textContent = `Selecionado: ${file.name} · ${mb} MB. Arquivo escolhido localmente; ainda não foi carregado em um emulador.`;
  screenMessage.textContent = "Arquivo selecionado, mas nenhum emulador está conectado.";
});

infoButton.addEventListener("click", () => {
  info.hidden = !info.hidden;
  infoButton.textContent = info.hidden ? "COMO INTEGRAR O PLAY!.JS" : "FECHAR INFORMAÇÕES";
});

document.getElementById("fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (screen.requestFullscreen) {
      await screen.requestFullscreen();
    } else {
      buttonStatus.textContent = "Tela cheia não é suportada por este navegador nesta área.";
    }
  } catch {
    buttonStatus.textContent = "O navegador não permitiu tela cheia. Tente novamente após tocar na página.";
  }
});

document.querySelectorAll("[data-key]").forEach((button) => {
  const name = button.dataset.key;
  const press = (event) => {
    event.preventDefault();
    button.classList.add("pressed");
    buttonStatus.textContent = `Botão pressionado: ${name.toUpperCase()}. Demonstração apenas — ainda não controla um jogo.`;
  };
  const release = () => button.classList.remove("pressed");
  button.addEventListener("pointerdown", press);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("pointerleave", release);
  button.addEventListener("contextmenu", (event) => event.preventDefault());
});
