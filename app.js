function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 


let campoPesquisa = document.getElementById
("campo-pesquisa").value

// se o campoPesquisa for uma String sem nada
// if (dado.string.includes(campoPesquisa))
if(!campoPesquisa == "" ){
  section.innerHTML = "<p>Tá maluco fi? coloca o negócio direito rapaz<p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = ""; 


    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // se título includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {  
     // cria um novo elemento
        section.innerHTML += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais Sobre</a> </div>
      `;

      }
    }


  }




    