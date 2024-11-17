import React, { Component } from 'react';
import Image from '../image/Image';
import './styles/style.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.n = 1;
    this.targetIndex = (this.n % 10) + 1;
  }

  toggleColor(element, colorClass) {
    element.classList.toggle(colorClass);
  }

  componentDidMount() {
    const targetElementId = document.getElementById(`item-${this.targetIndex}`);
    const nextElement = document.querySelector(`#item-${this.targetIndex + 1}`);

    // Клік з getElementById
    if (targetElementId) {
      targetElementId.addEventListener('click', () => {
        this.toggleColor(targetElementId, 'bg-color-1');
      });
    }

    // Клік з querySelector
    if (nextElement) {
      nextElement.addEventListener('click', () => {
        this.toggleColor(nextElement, 'bg-color-2');
      });
    }

    const imageContainer = document.querySelector('a[href="https://www.wien.info/de"]');

    const addImage = () => {
      if (!document.getElementById('image')) {
        const newImage = document.createElement('img');
        newImage.id = 'image';
        newImage.src = 'http://surl.li/zevevg';
        newImage.alt = 'Відень, Австрія';
        newImage.width = 600;
        imageContainer.appendChild(newImage);
      }
    };

    const increaseImage = () => {
      const image = document.getElementById('image');
      if (image) {
        image.width += 50;
      }
    };

    const decreaseImage = () => {
      const image = document.getElementById('image');
      if (image && image.width > 50) {
        image.width -= 50;
      }
    };

    const removeImage = () => {
      const image = document.getElementById('image');
      if (image) {
        image.remove();
      }
    };

    document.getElementById('add').addEventListener('click', addImage);
    document.getElementById('increase').addEventListener('click', increaseImage);
    document.getElementById('decrease').addEventListener('click', decreaseImage);
    document.getElementById('remove').addEventListener('click', removeImage);
  }

  render() {
    return (
      <div>
        <p id="item-2">Дата народження: 09 жовтня 2004 року<br />Місце народження: Київ, Україна</p>
        <p id="item-3">Освіта: Гімназія №267, м.Київ<br />
          &emsp; &emsp; НТУУ "КПІ ім. Ігоря Сікорсього" ФІОТ, група ІА-21</p>
        <h3>Мої хобі:</h3>
        <ul>
          <li>Подорожування</li>
          <li>Плавання</li>
          <li>Комп'ютерні ігри</li>
        </ul>
        <h3>Мої улюблені книги або фільми:</h3>
        <ol>
          <li>Фільм: «Гаррі Поттер»</li>
          <li>Книга: «Список запрошених»</li>
          <li>Книга: «Етюд в багряних тонах»</li>
        </ol>
        <h3>Моє улюблене місто:</h3>
        <p>Одним з моїх улюблених міст є Відень. Це місто пейзажів та архітектури, що захоплюють дух, гастрономічних досліджень,
          цікавої і насиченої історії.</p>
        <Image />
        <div>
          <button id="add">Додати зображення</button>
          <button id="increase">Збільшити зображення</button>
          <button id="decrease">Зменшити зображення</button>
          <button id="remove">Видалити зображення</button>
        </div>
      </div>
    );
  }
}

export default Content;