(()=>{"use strict";var t={790:(t,n,e)=>{e.d(n,{A:()=>c});var o=e(601),i=e.n(o),r=e(314),a=e.n(r)()(i());a.push([t.id,'* {\n\tpadding: 0px;\n\tmargin: 0px;\n\tborder: none;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* Links */\n\na, a:link, a:visited {\n\tmargin: 0;\n\tcolor: inherit;\n    text-decoration: none;\n\tcursor: pointer;\n}\n\na:hover {\n    text-decoration: none;\n}\n\n/* Common */\n\naside, nav, footer, header, section, main {\n\tdisplay: block;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    font-size: inherit;\n\tfont-weight: inherit;\n}\n\nul, ul li {\n\tlist-style: none;\n}\n\nimg {\n\tvertical-align: top;\n}\n\nimg, svg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\n/* Form */\n\ninput, textarea, button, select {\n\tfont-family: inherit;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n}\n\ninput::-ms-clear {\n\tdisplay: none;\n}\n\nbutton, input[type="submit"] {\n    display: inline-block;\n    box-shadow: none;\n    background-color: transparent;\n    background: none;\n    cursor: pointer;\n}\n\ninput:focus, input:active,\nbutton:focus, button:active {\n    outline: none;\n}\n\nbutton::-moz-focus-inner {\n\tpadding: 0;\n\tborder: 0;\n}\n\nlabel {\n\tcursor: pointer;\n}\n\nlegend {\n\tdisplay: block;\n}',""]);const c=a},16:(t,n,e)=>{e.d(n,{A:()=>T});var o=e(601),i=e.n(o),r=e(314),a=e.n(r),c=e(790),s=e(417),l=e.n(s),p=new URL(e(704),e.b),d=new URL(e(361),e.b),u=new URL(e(172),e.b),g=new URL(e(193),e.b),x=new URL(e(586),e.b),f=new URL(e(492),e.b),m=new URL(e(596),e.b),h=new URL(e(646),e.b),_=new URL(e(101),e.b),b=new URL(e(427),e.b),y=new URL(e(110),e.b),v=new URL(e(994),e.b),w=a()(i());w.i(c.A);var k=l()(p),L=l()(d),S=l()(u),E=l()(g),z=l()(x),q=l()(f),I=l()(m),j=l()(h),$=l()(_),C=l()(b),M=l()(y),A=l()(v);w.push([t.id,`@font-face {\n\tfont-family: 'TTHoves-Medium';\n\tsrc: url(${k});\n}\n\n@font-face {\n    font-family: 'Inter';\n    src: url(${L})\n}\n\n@font-face {\n    font-family: 'Inter';\n    src: url(${S})\n}\n\n@font-face {\n    font-family: 'Inter';\n    src: url(${E});\n}\n\n@font-face {\n    font-family: 'Inter';\n    src: url(${z})\n}\n\n:root {\n\t--black: #000;\n\t--dark-gray: #1F2020;\n\t--light-gray: #F2F2F2;\n\t--white: #FFFFFF;\n\t--accent-green: #7BB899;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tfont-family: 'Inter';\n\tfont-size: 16px;\n\tfont-weight: 300;\n}\n\n.header {\n\tbackground-color: var(--white);\n}\n\n.container {\n\tmargin: 0 auto;\n\tpadding: 0 64px;\n\tposition: relative;\n}\n\n.container-main {\n\tpadding: 0 64px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 64px;\n}\n\n.footer {\n\twidth: 100%;\n\theight: 320px;\n\tbackground-color: var(--black);\n}\n\n/* Nav section */\n\n.nav {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 110px;\n\tpadding: 30px 0;\n\tcolor: var(--dark-gray);\n}\n\n.burger {\n\tdisplay: none;\n}\n\n.burger__icon {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 4px;\n}\n\n.burger__item {\n\tbackground-color: var(--dark-gray);\n\twidth: 24px;\n\theight: 2px;\n}\n\n.burger__dropdown {\n\tdisplay: none;\n}\n\n.logo-mini {\n\tdisplay: none;\n}\n\n.logo__link {\n\tfont-family: 'TTHoves-Medium';\n\twidth: 120px;\n\theight: 26px;\n\tflex-shrink: 0;\n}\n\n.logo__link img {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: contain;;\n}\n\n.nav-media-phone {\n\tdisplay: none;\n}\n\n.nav__content {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 64px;\n\tflex: 1;\n}\n\n.nav-list {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tcolumn-gap: 24px;\n\tfont-size: 14px;\n\tletter-spacing: calc(14px * 0.06);\n}\n\n.nav__actions {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tgap: 64px;\n\tflex: 1;\n}\n\n.contacts {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n}\n\n.contacts__tel {\n\tfont-weight: 500;\n\tletter-spacing: calc(16px * -0.02);\n}\n\n.contacts__text {\n\tfont-size: 14px;\n\topacity: 0.3;\n}\n\n.icons {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tgap: 24px;\n}\n\n.icons-item__cart-button, .icons-item__cart-button-mini {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 24px;\n\theight: 24px;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tletter-spacing: calc(12px * 0.06);\n\tborder-radius: 50%;\n\tbackground-color: var(--accent-green);\n}\n\n.icons-item__cart-button-mini {\n\tdisplay: none;\n}\n\n.icons-item__img {\n\twidth: 22px;\n\theight: 22px;\n}\n\n/* Cart section */\n\n.cart {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpadding: 40px;\n\twidth: 600px;\n\theight: 100%;\n\tright: -600px;\n\ttop: 0;\n\tbackground-color: var(--white);\n\tposition: fixed;\n\ttransition: right 0.35s ease-out;\n\tz-index: 600;\n}\n\n.cart__main {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 80px;\n\tmin-height: 80%;\n}\n\n.cart__header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.cart__title {\n\tfont-size: 30px;\n\tfont-weight: 500;\n\tline-height: calc(30px * 0.88);\n\tletter-spacing: calc(30px * -0.04);\n}\n\n.cart__close-button {\n\twidth: 48px;\n\theight: 48px;\n\tposition: absolute;\n\ttop: 20px;\n\tright: 20px;\n\tborder-radius: 50%;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tcursor: pointer;\n}\n\n.cart__close-button::before {\n\tcontent: '';\n\twidth: 24px;\n\theight: 24px;\n\tleft: 12px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tbackground-image: url(${q});\n\tposition: absolute;\n}\n\n.cart__products {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tmin-height: 80%;\n}\n\n.cart__products-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.cart-count {\n\tfont-size: 14px;\n\tcolor: var(--dark-gray);\n\tline-height: calc(12px * 1.12);\n}\n\n.cart__clear {\n\tfont-size: 14px;\n\tcolor: var(--dark-gray);\n\tline-height: calc(12px * 1.12);\n\tfont-weight: 300;\n\topacity: 40%;\n}\n\n.cart_products-list {\n\tmax-height: 500px;\n\toverflow-y: auto;\n}\n\n.cart-item {\n\tpadding: 12px 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-top: 1px solid rgba(0, 0, 0, 0.1);\n\tcolor: var(--dark-gray);\n}\n\n.cart-item__image-text {\n\twidth: 50%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 8px;\n}\n\n.cart-item__image {\n\theight: 96px;\n\twidth: 96px;\n}\n\n.cart-item__details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tcolor: var(--dark-gray);\n}\n\n.cart-item__name {\n\tfont-weight: 300;\n\tline-height: calc(16px * 1.12);\n\tletter-spacing: calc(16px * 0.02);\n}\n\n.cart-item__price {\n\tfont-weight: 600;\n}\n\n.cart-item__button-section {\n\twidth: 50%;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tgap: 37px;\n}\n\n.cart-item__set-quantity {\n\twidth: 135px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 19px;\n}\n\n.button-decrease {\n\theight: 24px;\n\twidth: 40px;\n\tbackground-color: var(--light-gray);\n\tborder-radius: 4px;\n\tposition: relative;\n}\n\n.button-decrease::before {\n\tcontent: '';\n\tposition: absolute;\n\tbackground-image: url(${I});\n\twidth: 16px;\n\theight: 16px;\n\ttop: 50%;\n\tleft: 12px;\n\ttransform: translateY(-50%);\n}\n\n.button-increase {\n\theight: 24px;\n\twidth: 40px;\n\tbackground-color: var(--light-gray);\n\tborder-radius: 4px;\n\tposition: relative;\n}\n\n.button-increase::before {\n\tcontent: '';\n\tposition: absolute;\n\tbackground-image: url(${j});\n\twidth: 16px;\n\theight: 16px;\n\ttop: 50%;\n\tleft: 12px;\n\ttransform: translateY(-50%);\n}\n\n.button-increase:disabled, .button-decrease:disabled {\n\topacity: 0.5;\n\tcursor: not-allowed;\n}\n\n.cart-item__remove {\n\twidth: 24px;\n\theight: 24px;\n\tposition: relative;\n}\n\n.cart-item__remove::before {\n\tcontent: '';\n\tposition: absolute;\n\tbackground-image: url(${$});\n\twidth: 24px;\n\theight: 24px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tright: 0;\n}\n\n.cart-item__remove.out-of-stock::before {\n\tbackground-image: url(${C});\n}\n\n.cart_products-list::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.cart_products-list::-webkit-scrollbar-thumb {\n\tbackground-color: rgba(0, 0, 0, 0.2);\n\tborder-radius: 4px;\n}\n\n.cart_products-list::-webkit-scrollbar-thumb:hover {\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\n.cart__footer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.final-price {\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: var(--dark-gray);\n}\n\n.final-price__price {\n\tfont-size: 30px;\n\tfont-weight: 500;\n\tletter-spacing: calc(30px * -0.02);\n}\n\n.button-order {\n\twidth: calc(50% - 40px);\n\theight: 56px;\n\tbackground-color: var(--accent-green);\n\tborder-radius: 4px;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tletter-spacing: calc(12px * 0.06);\n}\n\n.cart-overlay {\n\tdisplay: none;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\topacity: 0;\n\ttransition: opacity 0.3s ease-in-out;\n\tz-index: 500;\n}\n\n.cart-open .cart {\n\tright: 0;\n}\n\n.cart-open .cart-overlay {\n\tdisplay: block;\n\topacity: 1;\n}\n\n/* Main section */\n\n.main {\n\twidth: 100%;\n\tpadding-bottom: 72px;\n\tflex: 1;\n}\n\n.slider {\n\theight: 560px;\n\tmargin-bottom: 72px;\n\tbackground-image: url(${M});\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: var(--white);\n\ttext-align: center;\n\tposition: relative;\n}\n\n/* Breadcrumbs section */\n\n.breadcrumbs {\n\tposition: absolute;\n\ttop: 32px;\n\tleft: 64px;\n}\n\n.breadcrumbs__item {\n\tposition: relative;\n\ttext-transform: uppercase;\n\tfont-size: 10px;\n\topacity: 30%;\n\tletter-spacing: calc(10px * 0.06);\n}\n\n.breadcrumbs__item::after {\n\tcontent: '';\n\tdisplay: inline-block;\n\twidth: 3px;\n\theight: 3px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tborder-radius: 50%;\n\tbackground-color: var(--white);\n\tmargin: 0 6px 0 10px;\n\tvertical-align: middle;\n}\n\n.breadcrumbs__item:last-child::after {\n\tcontent: none;\n}\n\n/* Slider section */\n\n.slider__arrow {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.slider__arrow_left {\n\tleft: 74px;\n}\n\n.slider__arrow_right {\n\tright: 74px;\n}\n\n.slider__content {\n\tmax-width: 470px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 24px;\n}\n\n.slider__title {\n\tfont-size: 72px;\n\tline-height: calc(72px * 0.88);\n\tletter-spacing: calc(72px* -0.02);\n}\n\n.slider__subtitle {\n\tfont-weight: 400;\n\tline-height: calc(16px * 1.3);\n\tletter-spacing: calc(16px * 0.02);\n}\n\n.slider__carousel-indicators {\n\tdisplay: flex;\n\tpadding: 13px 24px;\n\tbottom: 40px;\n\tborder-radius: 16px;\n\tbackground-color: rgba(0, 0, 0, 0.4);\n\tgap: 8px;\n\tposition: absolute;\n}\n\n.indicator {\n\theight: 6px;\n\twidth: 6px;\n\tborder-radius: 50%;\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\ttransition: background-color 1s ease;\n}\n\n.indicator.active {\n\tbackground-color: var(--white);\n}\n\n/* Filters-switchers section */\n\n.products__count-and-sort .filters-toggle-button {\n\tdisplay: none;\n\tcolor: var(--dark-gray);\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tletter-spacing: calc(12px* 0.06);\n}\n\n.filters__list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.switch-button {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 12px;\n}\n\n.switch__input {\n\tdisplay: none;\n}\n\n.switch__label {\n\theight: 22px;\n\twidth: 36px;\n\tborder-radius: 40px;\n\tbackground-color: var(--light-gray);\n\tposition: relative;\n\tcursor: pointer;\n\ttransition: background-color 0.5s;\n}\n\n.switch__label::after {\n\tcontent: '';\n\tposition: absolute;\n\theight: 8px;\n\twidth: 8px;\n\ttop: 7px;\n\tleft: 7px;\n\tborder-radius: 50%;\n\tbackground-color: var(--dark-gray);\n\ttransition: transform 0.3s;\n}\n\n.switch__input:checked + .switch__label {\n\tbackground-color: var(--accent-green);\n}\n\n.switch__input:checked + .switch__label::after {\n\ttransform: translateX(14px);\n}\n\n.switch__text {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tletter-spacing: calc(12px * 0.06);\n}\n\n/* Sort-dropdown with modal section */\n\n.sort-dropdown__button {\n\tcolor: var(--dark-gray);\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tletter-spacing: calc(12px * 0.06);\n}\n\n.sort-dropdown__button::after {\n\tcontent: '▼';\n\tmargin-left: 4px;\n\tfont-size: 10px;\n}\n\n.overlay {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\topacity: 0;\n\tz-index: 10;\n\ttransition: opacity 0.3s ease;\n\tpointer-events: none;\n}\n\n.modal {\n\twidth: 280px;\n\tposition: absolute;\n\tright: 64px;\n\ttop: 0;\n\topacity: 0;\n\tz-index: 100;\n\ttransform: translateY(-10px);\n\ttransition: opacity 0.5s ease-out, transform 0.5s ease-in;\n\tpointer-events: none;\n}\n\n.show-overlay {\n\topacity: 1;\n\tpointer-events: auto;\n}\n\n.show-modal {\n\topacity: 1;\n\ttransform: translateY(0);\n\tpointer-events: auto;\n}\n\n.modal__list {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.modal__item {\n\tpadding: 16px 24px;\n\tbackground-color: var(--white);\n\tcursor: pointer;\n\ttransition: background-color 0.5s;\n}\n\n.modal__item:hover {\n\tbackground-color: var(--accent-green);\n}\n\n/* Products section */\n\n.products {\n\twidth: 83%;\n\tmin-height: 400px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 44px;\n\tposition: relative;\n}\n\n.products__count-and-sort {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tcolor: var(--dark-gray);\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tletter-spacing: calc(12px * 0.06);\n}\n\n.products__list {\n\tmin-height: 400px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: flex-start;\n\trow-gap: 16px;\n\tcolumn-gap: 20px;\n}\n\n.no-products-message {\n\tdisplay: none;\n\tcolor: var(--dark-gray);\n\tfont-size: 18px;\n\tfont-weight: 500;\n\ttext-align: center;\n}\n\n.products__list.empty .no-products-message {\n\tdisplay: block;\n}\n\n.product-card {\n\tmax-width: 278px;\n\tpadding-bottom: 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 14px;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.product-card__img-wrapper {\n\twidth: 278px;\n\theight: 278px;\n}\n\n.product-card__content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 24px;\n}\n\n.product-card__title {\n\tcolor: var(--dark-gray);\n\tfont-weight: 200;\n\tline-height: calc(16px * 1.12);\n\tletter-spacing: calc(16px * 0.02);\n}\n\n.product-card__footer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.product-card__price {\n\tcolor: var(--dark-gray);\n\tfont-weight: 600;\n}\n\n.product-card__button {\n\topacity: 0;\n\theight: 32px;\n\twidth: 80px;\n\tbackground-color: var(--accent-green);\n\tcolor: var(--dark-gray);\n\tborder-radius: 8px;\n\tfont-size: 20px;\n\tposition: relative;\n\ttransition: opacity 0.5s, background-color 0.3s;\n}\n\n.product-card__button:active {\n\tbackground-color: var(--light-gray);\n}\n\n.product-card__button::before {\n\tcontent: '';\n\twidth: 20px;\n\theight: 20px;\n\tleft: 30px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tbackground-image: url(${A});\n\tposition: absolute;\n}\n\n.product-card:hover .product-card__button {\n\topacity: 1;\n}\n\n@media (max-width: 768px) {\n\t.container {\n\t\tpadding: 0 36px;\n\t}\n\n\t.container-main {\n\t\tpadding: 0 36px;\n\t\tflex-direction: column;\n\t\tgap: 36px;\n\t}\n\n\t.nav {\n\t\talign-items: flex-start;\n\t\tgap: 36px;\n\t}\n\n\t.logo__link {\n\t\twidth: 84px;\n\t\theight: 18px;\n\t}\n\n\t.nav__content, .nav__actions {\n\t\tgap: 24px;\n\t\talign-items: flex-start;\n\t}\n\n\t.nav-list {\n\t\tfont-size: 12px;\n\t\tcolumn-gap: 20px;\n\t}\n\n\t.contacts__tel {\n\t\tfont-size: 14px;\n\t}\n\n\t.icons {\n\t\tmax-width: 25%;\n\t\tgap: 16px;\n\t\tjustify-content: flex-end;\n\t}\n\n\t.products, .filters {\n\t\twidth: 100%;\n\t}\n\n\t.slider, .footer {\n\t\twidth: 100vw;\n\t}\n\n\t.slider {\n\t\theight: 400px;\n\t\tmargin-bottom: 30px;\n\t}\n\n\t.slider__arrow_left {\n\t\tleft: 44px;\n\t}\n\t\n\t.slider__arrow_right {\n\t\tright: 44px;\n\t}\n\n\t.breadcrumbs {\n\t\tleft: 36px;\n\t}\n\n\t.products__list {\n\t\tjustify-content: center;\n\t\tcolumn-gap: 36px;\n\t}\n\n\t.product-card {\n\t\tmax-width: 100%;\n\t}\n\n\t.slider__title {\n\t\tfont-size: 36px;\n\t}\n\n\t.slider__subtitle {\n\t\tfont-size: 12px;\n\t\tmax-width: 200px;\n\t}\n\n\t/* Cart section */\n\n\t.cart {\n\t\tmin-width: 70%;\n\t\tmax-width: 100%;\n\t}\n\t\n\t.cart__main {\n\t\tgap: 50px;\n\t\theight: 80%;\n\t}\n\t\n\t.cart__header {\n\t\talign-items: center;\n\t}\n\n\t.cart__products {\n\t\theight: 80%;\n\t}\n\t\n\t.cart__close-button {\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\t\n\t.cart-item__name {\n\t\tfont-size: 12px;\n\t}\n\t\n\t.cart-item__button-section {\n\t\tgap: 20px;\n\t}\n\t\n\t.cart-item__set-quantity {\n\t\twidth: 110px;\n\t\tgap: 5px;\n\t}\n\n\t.cart-item__quantity {\n\t\tfont-size: 14px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.container {\n\t\tpadding: 24px 25px 0 25px;\n\t}\n\t\n\t.nav {\n\t\tdisplay: none;\n\t}\n\n\t.nav-media-phone {\n\t\tpadding: 22px 0;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tborder-bottom: 1px solid rgba(0, 0, 0, 0.06);\n\t\tposition: relative;\n\t}\n\n\t.burger {\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t}\n\n\t.burger__dropdown {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\topacity: 0;\n\t\tposition: absolute;\n\t\ttop: 100%;\n\t\tleft: 0;\n\t\tbackground-color: var(--white);\n\t\twidth: 150px;\n\t\tborder-radius: 8px;\n\t\tz-index: 1000;\n\t\ttransform: translateY(-10px);\n\t\ttransition: transform 0.5s ease-in, opacity 0.5s ease;\n\t\tpointer-events: none;\n\t}\n\t\n\t.burger__option {\n\t\tpadding: 12px 16px;\n\t\tcolor: var(--dark-gray);\n\t\ttext-align: left;\n\t\tcursor: pointer;\n\t\ttransition: background-color 0.3s;\n\t}\n\t\n\t.burger__option:hover {\n\t\tbackground-color: var(--light-gray);\n\t}\n\t\n\t.burger__dropdown.show {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t\tpointer-events: auto;\n\t}\n\n\t.logo-mini {\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\tfont-family: 'TTHoves-Medium';\n\t\tfont-size: 22px;\n\t\tline-height: calc(22px * 0.88);\n\t}\n\n\t.logo-mini::after {\n\t\tcontent: '';\n\t\twidth: 8px;\n\t\theight: 8px;\n\t\tborder-radius: 50%;\n\t\tbackground-color: var(--dark-gray);\n\t\tposition: absolute;\n\t\tright: -9px;\n\t\ttop: 2px\n\t}\n\n\t.icons-item__img, .logo__link, .nav-list, .contacts {\n\t\tdisplay: none;\n\t}\n\n\t.icons-item__cart-button-mini {\n\t\tdisplay: flex;\n\t}\n\n\t.icons {\n\t\tmax-width: none;\n\t}\n\n\t.main {\n\t\twidth: 100%;\n\t\tpadding: 0 24px 40px;\n\t\tflex: 1;\n\t}\n\t\n\t.slider {\n\t\tpadding: 14px 0 48px 0;\n\t\tmargin: 0;\n\t\theight: auto;\n\t\twidth: auto;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: flex-start;\n\t\tbackground-image: none;\n\t\tgap: 48px;\n\t\tcolor: var(--dark-gray);\n\t}\n\t\n\t.breadcrumbs {\n\t\tposition: static;\n\t}\n\t\n\t.breadcrumbs__item {\n\t\tposition: relative;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 10px;\n\t\topacity: 30%;\n\t\tletter-spacing: calc(10px * 0.06);\n\t}\n\n\t.breadcrumbs__item::after {\n\t\tbackground-color: var(--dark-gray);\n\t}\n\t\n\t.breadcrumbs__item:last-child::after {\n\t\tcontent: none;\n\t}\n\t\n\t.slider__arrow, .slider__subtitle, .slider__carousel-indicators {\n\t\tdisplay: none;\n\t}\n\t\n\t.slider__content {\n\t\tmax-width: auto;\n\t\tgap: 48px;\n\t}\n\t\n\t.slider__title {\n\t\tfont-size: 36px;\n\t\tletter-spacing: calc(36px * -0.04);\n\t\tline-height: calc(36px * 0.88);\n\t\tfont-weight: 400;\n\t}\n\t\n\t.container-main {\n\t\tpadding: 0;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: 64px;\n\t}\n\n\t.products__count {\n\t\tdisplay: none;\n\t}\n\n\t.products__count-and-sort .filters-toggle-button {\n\t\tdisplay: block;\n\t}\n\t\n\t.overlay-mobile {\n\t\tvisibility: hidden;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\n\t\tz-index: 1900;\n\t\topacity: 0;\n\t\ttransition: opacity 0.5s ease, visibility 0.5s ease;\n\t}\n\t\n\t.filters {\n\t\tvisibility: hidden;\n\t\tposition: fixed;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 80%;\n\t\tbackground-color: var(--white);\n\t\tborder-top-left-radius: 24px;\n\t\tborder-top-right-radius: 24px;\n\t\tz-index: 10000;\n\t\tpadding: 20px;\n\t\ttransform: translateY(100%);\n\t\ttransition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;\n\t\topacity: 0;\n\t}\n\n\t.filters::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: var(--dark-gray);\n\t\topacity: 60%;\n\t\twidth: 28px;\n\t\theight: 4px;\n\t\tborder-radius: 40px;\n\t\ttop: 12px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t}\n\n\t.filters__list {\n\t\tpadding-top: 38px;\n\t}\n\t\n\t.filters.show {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\t\n\t.overlay-mobile.show {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\n\t/* Cart section */\n\n\t.cart {\n\t\tpadding: 40px 20px 20px 20px;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.cart__main {\n\t\theight: 90%;\n\t\tgap: 40px;\n\t}\n\n\t.cart__header {\n\t\talign-items: center;\n\t}\n\n\t.cart__close-button {\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\n\t.cart-count {\n\t\tfont-size: 14px;\n\t\tcolor: var(--dark-gray);\n\t\tline-height: calc(12px * 1.12);\n\t}\n\n\t.cart__clear {\n\t\tfont-size: 14px;\n\t\tcolor: var(--dark-gray);\n\t\tline-height: calc(12px * 1.12);\n\t\tfont-weight: 300;\n\t\topacity: 40%;\n\t}\n\n\t.cart__products {\n\t\theight: 80%;\n\t\tgap: 20px;\n\t}\n\n\t.cart-item {\n\t\tpadding: 12px 12px;\n\t\tgap: 20px;\n\t}\n\n\t.cart-item__image-text {\n\t\twidth: auto;\n\t\tgap: 12px;\n\t}\n\n\t.cart-item__image {\n\t\theight: 60px;\n\t\twidth: 60px;\n\t}\n\n\t.cart-item__details {\n\t\tfont-size: 10px;\n\t}\n\n\t.cart-item__button-section {\n\t\tflex-direction: column;\n\t\tgap: 15px;\n\t}\n\n\t.cart-item__set-quantity {\n\t\twidth: 110px;\n\t\talign-items: center;\n\t\tgap: 5px;\n\t}\n\n\t.cart-item__quantity {\n\t\tfont-size: 12px;\n\t}\n\n\t.cart-item__remove {\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tposition: relative;\n\t}\n\t\n\t.final-price {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tcolor: var(--dark-gray);\n\t}\n\t\n\t.final-price__price {\n\t\tfont-size: 28px;\n\t\tfont-weight: 500;\n\t\tletter-spacing: calc(30px * -0.02);\n\t}\n\t\n\t.button-order {\n\t\theight: 40px;\n\t}\n\n\t.cart_products-list::-webkit-scrollbar {\n\t\twidth: 4px;\n\t}\n\n\t.filters-modal {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: flex-end;\n\t\tposition: fixed;\n\t}\n\t\n\t.filters-modal.show-modal {\n\t\topacity: 1;\n\t\tpointer-events: auto;\n\t}\n\t\n\t.filters-modal-content {\n\t\twidth: 100%;\n\t\tmax-width: 430px;\n\t\theight: 80%;\n\t\tposition: absolute;\n\t}\n\n\t/* Products section */\n\n\t.products {\n\t\tmin-height: 270px;\n\t\tgap: 24px;\n\t}\n\t\n\t.products__list {\n\t\tjustify-content: space-between;\n\t\tmin-height: 400px;\n\t\trow-gap: 16px;\n\t\tcolumn-gap: 20px;\n\t}\n\t\n\t.no-products-message {\n\t\tdisplay: none;\n\t\tcolor: var(--dark-gray);\n\t\tfont-size: 18px;\n\t\tfont-weight: 500;\n\t\ttext-align: center;\n\t}\n\t\n\t.product-card {\n\t\tmax-width: 278px;\n\t\tpadding-bottom: 24px;\n\t\tgap: 16px;\n\t}\n\t\n\t.product-card__img-wrapper {\n\t\twidth: 152px;\n\t\theight: 152px;\n\t}\n\t\n\t.product-card__content {\n\t\tgap: 20px;\n\t}\n\t\n\t.product-card__title {\n\t\tmax-width: 152px;\n\t\tfont-weight: 300;\n\t}\n\t\n\t.product-card__button {\n\t\topacity: 1;\n\t\theight: 24px;\n\t\twidth: 40px;\n\t\tbackground-color: var(--light-gray);\n\t\tborder-radius: 6px;\n\t\tposition: relative;\n\t\ttransition: opacity 0.5s, background-color 0.3s;\n\t}\n\t\n\t.product-card__button:active {\n\t\tbackground-color: var(--light-gray);\n\t}\n\t\n\t.product-card__button::before {\n\t\tcontent: '';\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\tleft: 10px;\n\t\ttop: 10px;\n\t}\n\n\t.footer {\n\t\theight: 204px;\n\t}\n}`,""]);const T=w},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var p=[].concat(t[l]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),n.push(p))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var r={},a=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],p=r[l]||0,d="".concat(l," ").concat(p);r[l]=p+1;var u=e(d),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var x=i(g,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:x,references:1})}a.push(d)}return a}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var c=e(r[a]);n[c].references--}for(var s=o(t,i),l=0;l<r.length;l++){var p=e(r[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}r=s}}},659:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},361:(t,n,e)=>{t.exports=e.p+"fonts/Inter-Light.otf"},172:(t,n,e)=>{t.exports=e.p+"fonts/Inter-Medium.otf"},193:(t,n,e)=>{t.exports=e.p+"fonts/Inter-Regular.otf"},586:(t,n,e)=>{t.exports=e.p+"fonts/Inter-SemiBold.otf"},704:(t,n,e)=>{t.exports=e.p+"fonts/TTHoves-Medium.ttf"},596:(t,n,e)=>{t.exports=e.p+"img/minus.png"},994:(t,n,e)=>{t.exports=e.p+"img/plus.png"},646:(t,n,e)=>{t.exports=e.p+"img/plus_1.png"},427:(t,n,e)=>{t.exports=e.p+"img/repeat.png"},492:(t,n,e)=>{t.exports=e.p+"img/x.png"},101:(t,n,e)=>{t.exports=e.p+"img/x_light.png"},110:(t,n,e)=>{t.exports=e.p+"img/main-bg.png"}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return t[o](r,r.exports,e),r.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.p="/",e.b=document.baseURI||self.location.href,e.nc=void 0;var o=e(72),i=e.n(o),r=e(825),a=e.n(r),c=e(659),s=e.n(c),l=e(56),p=e.n(l),d=e(540),u=e.n(d),g=e(113),x=e.n(g),f=e(16),m={};m.styleTagTransform=x(),m.setAttributes=p(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),i()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h="https://67309b8066e42ceaf160cbf8.mockapi.io/api/v1/products";let _=[];const b=document.getElementById("products-list"),y=document.querySelector(".products__count span");let v=[],w=[];async function k(){try{const t=await fetch(`${h}/products`);v=await t.json(),w=v,L(w)}catch(t){console.error("При загрузке товаров произошла ошибка",t)}}function L(t){const n=document.createElement("p");n.classList.add("no-products-message"),n.textContent="Товары не найдены",b.innerHTML="",0===t.length?(b.classList.add("empty"),b.appendChild(n)):(b.classList.remove("empty"),t.forEach((t=>{const n=document.createElement("div");n.className="product-card",n.innerHTML=`\n\t\t\t\t<div class="product-card__img-wrapper">\n\t\t\t\t\t<img class="product-card__img" src="${t.image}" alt="${t.name}">\n\t\t\t\t</div>\n\t\t\t\t<div class="product-card__content">\n\t\t\t\t\t<p class="product-card__title">\n\t\t\t\t\t\t${t.name}\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="product-card__footer">\n\t\t\t\t\t\t<p class="product-card__price">${t.price} ₽</p>\n\t\t\t\t\t\t<button class="product-card__button"></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,n.querySelector(".product-card__button").addEventListener("click",(()=>async function(t){try{const n=await fetch(`${h}/products/${t}`),e=await n.json(),o=_.find((n=>n.id===t));o?e.inStock?o.quantity+=1:o=1:_.push({...e,quantity:(e.inStock,1)}),E(),z()}catch(t){console.error("Товар не добавлен:",t)}}(t.id))),b.appendChild(n)}))),y.textContent=t.length}function S(){const t=document.getElementById("filterSwitch1").checked,n=document.getElementById("filterSwitch2").checked,e=document.getElementById("filterSwitch3").checked,o=document.getElementById("filterSwitch4").checked,i=document.getElementById("filterSwitch5").checked;w=v.filter((r=>{const a=new Date(r.addedAt),c=new Date("2024-05-07T14:30:00Z");return(!t||a>=c)&&(!n||r.inStock)&&(!e||Array.isArray(r.category)&&r.category.includes("contract"))&&(!o||Array.isArray(r.category)&&r.category.includes("exclusive"))&&(!i||Array.isArray(r.category)&&r.category.includes("sale"))})),L(w)}function E(){localStorage.setItem("cart",JSON.stringify(_))}function z(){const t=document.querySelector(".cart_products-list"),n=document.querySelector(".cart-count span"),e=document.querySelector(".icons-item__cart-button p"),o=document.querySelector(".icons-item__cart-button-mini p"),i=document.querySelector(".final-price__price");t.innerHTML="";let r=0,a=0;_.forEach((n=>{const e=document.createElement("div");e.className="cart-item";const o=n.inStock?"1":"0.4",i=n.inStock?"":"disabled",c=n.inStock?"":"out-of-stock";e.innerHTML=`\n\t\t<div class="cart-item__image-text" style="opacity: ${o}">\n\t\t\t<img src="${n.image}" alt="${n.name}" class="cart-item__image">\n\t\t\t<div class="cart-item__details">\n\t\t\t\t<h3 class="cart-item__name">${n.name}</h3>\n\t\t\t\t<p class="cart-item__price">${n.price} ₽</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="cart-item__button-section">\n\t\t\t<div class="cart-item__set-quantity">\n\t\t\t\t<button class="button-decrease" ${i}></button>\n\t\t\t\t<p class="cart-item__quantity">${n.quantity}</p>\n\t\t\t\t<button class="button-increase" ${i}></button>\n\t\t\t</div>\n\t\t\t<button class="cart-item__remove ${c}"></button>\n\t\t</div>\n\t\t`,e.querySelector(".button-decrease").addEventListener("click",(()=>function(t){const n=_.find((n=>n.id===t));n&&n.quantity>1?(n.quantity-=1,E(),z()):n&&1===n.quantity&&q(t)}(n.id))),e.querySelector(".button-increase").addEventListener("click",(()=>function(t){const n=_.find((n=>n.id===t));n&&(n.quantity+=1,E(),z())}(n.id))),e.querySelector(".cart-item__remove").addEventListener("click",(()=>q(n.id))),t.appendChild(e),n.inStock&&(r+=n.price*n.quantity,a+=n.quantity)})),n.textContent=a,e&&(e.textContent=a),o&&(o.textContent=a),i.textContent=`${r} ₽`}function q(t){_=_.filter((n=>n.id!==t)),E(),z()}document.addEventListener("DOMContentLoaded",(()=>{k(),function(){const t=localStorage.getItem("cart");_=t?JSON.parse(t):[]}(),z()})),document.querySelectorAll(".filters__item .switch__input").forEach((t=>{t.addEventListener("change",S)})),document.addEventListener("DOMContentLoaded",k),document.querySelector(".cart__clear").addEventListener("click",(function(){_=[],E(),z()})),document.querySelector(".cart");const I=document.querySelector(".cart-overlay"),j=document.getElementById("cart-button-open"),$=document.querySelector(".icons-item__cart-button-mini"),C=document.querySelector(".cart__close-button");function M(){const t=document.body.classList.toggle("cart-open"),n=window.innerWidth-document.documentElement.clientWidth;t?(document.body.style.overflow="hidden",document.body.style.paddingRight=`${n}px`,localStorage.setItem("isCartOpen","true")):(document.body.style.overflow="",document.body.style.paddingRight="",localStorage.setItem("isCartOpen","false"))}j.addEventListener("click",(t=>{t.preventDefault(),M()})),$&&$.addEventListener("click",(t=>{t.preventDefault(),M()})),C.addEventListener("click",M),I.addEventListener("click",M),document.addEventListener("DOMContentLoaded",(()=>{if("true"===localStorage.getItem("isCartOpen")){document.body.classList.add("cart-open");const t=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${t}px`}}));const A=document.querySelectorAll(".indicator"),T=document.querySelector(".slider__arrow_left"),R=document.querySelector(".slider__arrow_right");let B=0;function U(){A.forEach(((t,n)=>{t.classList.toggle("active",n===B)}))}function F(){const t=document.getElementById("sortModal"),n=document.getElementById("overlay");t.classList.toggle("show-modal"),n.classList.toggle("show-overlay")}T.addEventListener("click",(()=>{B=(B-1+A.length)%A.length,U()})),R.addEventListener("click",(()=>{B=(B+1)%A.length,U()})),document.querySelector(".sort-dropdown__button").addEventListener("click",(()=>F())),window.addEventListener("click",(function(t){const n=document.getElementById("sortModal"),e=document.getElementById("overlay");t.target===e&&(n.classList.remove("show-modal"),e.classList.remove("show-overlay"))})),document.querySelectorAll(".modal__item").forEach((t=>{t.addEventListener("click",(function(){!function(t){switch(document.querySelector(".sort-dropdown__button").innerText=t,t){case"Сначала дорогие":w.sort(((t,n)=>n.price-t.price));break;case"Сначала недорогие":w.sort(((t,n)=>t.price-n.price));break;case"Сначала популярные":w.sort(((t,n)=>n.isPopular-t.isPopular));break;case"Сначала новые":w.sort(((t,n)=>new Date(n.addedAt)-new Date(t.addedAt)))}L(w),F()}(this.getAttribute("data-option"))}))})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("burger-icon"),n=document.getElementById("burger-dropdown");t.addEventListener("click",(t=>{t.stopPropagation(),n.classList.toggle("show")})),document.addEventListener("click",(t=>{!n.contains(t.target)&&n.classList.contains("show")&&n.classList.remove("show")}))})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".filters-toggle-button"),n=document.querySelector(".filters"),e=document.querySelector(".overlay-mobile");function o(){n.classList.toggle("show"),e.classList.toggle("show")}t.addEventListener("click",o),e.addEventListener("click",o)}))})();