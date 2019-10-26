import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public getMenu() {
    return [
      {
        "name": "Home",
        "link": ""
      },
      
      {
        "name": "Sobre nós",
        "link": ""
      },

      {
        "name": "Soluções",
        "link": "",
        "suboptions": [
          {
            "name": "Sistema Financeiro",
            "link": ""
          },

          {
            "name": "Upload de arquivos",
            "link": ""
          },

          {
            "name": "Marketing Digital",
            "link": ""
          },

          {
            "name": "Criação de Sites",
            "link": ""
          }
        ]
      },

      {
        "name": "Fale Conosco",
        "link": ""
      }
    ];
  }

  public getMenuFooter() {
    return [
      {
        "name": "Sobre nós",
        "link": ""
      },

      {
        "name": "FinSis",
        "link": ""
      },

      {
        "name": "Sonda.me",
        "link": ""
      },

      {
        "name": "Marketing Digital",
        "link": ""
      },

      {
        "name": "Criação de Sites",
        "link": ""
      },

      {
        "name": "Fale Conosco",
        "link": ""
      }
    ];
  }
}
