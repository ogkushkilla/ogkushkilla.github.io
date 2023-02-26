import style from './Catalog.module.css'

export const Catalog = () => {
  return (
    <section class="catalog">
      <div class="container catalog__container">
        <div class="catalog__order order">
          <section class="order__wrapper">
            <div class="order__header" tabindex="0" role="button">
              <h2 class="order__title">Корзина</h2>

              <span class="order__count">4</span>
            </div>

            <div class="order__wrap_list">
              <ul class="order__list">
                <li class="order__item">
                  <img class="order__image" src="img/burger_1.jpg" alt="Супер сырный" />

                  <div class="order__goods goods">
                    <h3 class="goods__title">Супер сырный</h3>

                    <p class="goods__weight">512г</p>

                    <p class="goods__price">1279
                      <span class="currency">₽</span>
                    </p>
                  </div>

                  <div class="count">
                    <button class="count__minus">-</button>
                    <p class="count__amount">1</p>
                    <button class="count__plus">+</button>
                  </div>
                </li>

                <li class="order__item">
                  <img class="order__image" src="img/free_1.jpg" alt="Картошка фри" />

                  <div class="order__goods goods">
                    <h3 class="goods__title">Картошка фри</h3>

                    <p class="goods__weight">180г</p>

                    <p class="goods__price">245
                      <span class="currency">₽</span>
                    </p>
                  </div>

                  <div class="count">
                    <button class="count__minus">-</button>
                    <p class="count__amount">2</p>
                    <button class="count__plus">+</button>
                  </div>
                </li>

                <li class="order__item">
                  <img class="order__image" src="img/hot-dog_1.jpg" alt="Жгучий хот-дог" />

                  <div class="order__goods goods">
                    <h3 class="goods__title">Жгучий хот-дог</h3>

                    <p class="goods__weight">245г</p>

                    <p class="goods__price">239
                      <span class="currency">₽</span>
                    </p>
                  </div>

                  <div class="count">
                    <button class="count__minus">-</button>
                    <p class="count__amount">1</p>
                    <button class="count__plus">+</button>
                  </div>
                </li>
              </ul>

              <div class="order__total">
                <p>Итого</p>
                <p>
                  <span class="order__amount">1279</span>
                  <span class="currency">₽</span>
                </p>
              </div>

              <button class="order__submit">Оформить заказ</button>

              <div class="order__apeal">
                <p class="order__text">Бесплатная доставка</p>
                <button class="order__close">Свернуть</button>
              </div>
            </div>
          </section>
        </div>

        <div class="catalog__wrapper">
          <h2 class="catalog__title">Бургеры</h2>

          <div class="catalog__wrap_list">
            <ul class="catalog__list">
              <li class="catalog__item">
                <article class="product">
                  <img src="img/photo-5.jpg" alt="Мясная бомба" class="product__image" />

                  <p class="product__price">689<span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">Мясная бомба</button>
                  </h3>

                  <p class="product__weight">520г</p>

                  <button class="product__add" type="button">Добавить</button>
                </article>
              </li>

              <li class="catalog__item">
                <article class="product">
                  <img src="img/photo-1.jpg" alt="Супер сырный" class="product__image" />

                  <p class="product__price">550<span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">Супер сырный</button>
                  </h3>

                  <p class="product__weight">512г</p>

                  <button class="product__add" type="button">Добавить</button>
                </article>
              </li>

              <li class="catalog__item">
                <article class="product">
                  <img src="img/photo-3.jpg" alt="Сытный" class="product__image" />

                  <p class="product__price">639<span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">Сытный</button>
                  </h3>

                  <p class="product__weight">580г</p>

                  <button class="product__add" type="button">Добавить</button>
                </article>
              </li>

              <li class="catalog__item">
                <article class="product">
                  <img src="img/photo.jpg" alt="Тяжелый удар" class="product__image" />

                  <p class="product__price">480<span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">Тяжелый удар</button>
                  </h3>

                  <p class="product__weight">470г</p>

                  <button class="product__add" type="button">Добавить</button>
                </article>
              </li>

              <li class="catalog__item">
                <article class="product">
                  <img src="img/photo-2.jpg" alt="Вечная классика" class="product__image" />

                  <p class="product__price">450<span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">Вечная классика</button>
                  </h3>

                  <p class="product__weight">450г</p>

                  <button class="product__add" type="button">Добавить</button>
                </article>
              </li>

              <li class="catalog__item">
                <article class="product">
                  <img src="img/photo-4.jpg" alt="Итальянский" class="product__image" />

                  <p class="product__price">560<span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">Итальянский</button>
                  </h3>

                  <p class="product__weight">510г</p>

                  <button class="product__add" type="button">Добавить</button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}