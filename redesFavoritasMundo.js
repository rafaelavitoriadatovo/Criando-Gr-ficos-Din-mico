import getCSS {GetCSS, criarGrafico, incluirTexto } from "./common.js";

async function redesFavoritasMundo() {
    const url ="https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json";
    const res = await fetch(url);
    const dados = await res.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const data = [
        {
            values: valores,
            labels: redes,
            type: "pie",
            textinfo: "label+percent",
        },
    ];

    const layout = {
        plot_bgcolor: getCSS("--bg-color"),
        paper_bgcolor: getCSS("--bg-color"),
        height: 700, 
        title: {
            text: "Redes sociais que os usuários mais gostam",
            x: 0,
            font: {
                color: getCSS("--primary-color"),
                family: getCSS("--font"),
                size: 30,
            },
        }    
    },
        legend: {
            font: {
                color: getCSS("--primary-color"),
            size: 16,
      },
    },
  };

  const grafico = document.createElement("div");

  incluirTexto('Embora o <span>Instagram</span> ocupe a quarta posição em termos de numero total de usuarios entre as redes sociais, destaca-se como a <span>preerida pelos usuarios</span>. Supera  até mesmo o <span>Facebook </span>, a plataforma com mais usuarios, sendo a terceira opçao mais apreciada pelos usuarios. <br>essa preferencia evidencia  a forte conexão e apreço  que as pessoas tem pelo Instagram em comparação com outras redes sociais`)
}

redesFavoritasMundo();
